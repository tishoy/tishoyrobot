// @flow

import React from 'react';
import { assert } from 'chai';
import { spy } from 'sinon';
import { createShallow, createMount } from '../test-utils';
import RadioGroup from './RadioGroup';
import Radio from './Radio';

describe('<RadioGroup />', () => {
  let shallow;

  before(() => {
    shallow = createShallow({ dive: true });
  });

  it('should render a FormGroup with the radiogroup role', () => {
    const wrapper = shallow(<RadioGroup />);
    assert.strictEqual(wrapper.name(), 'withStyles(FormGroup)');
    assert.strictEqual(
      wrapper.props().role,
      'radiogroup',
      'should be a FormGroup with the correct role',
    );
  });

  it('should fire the onBlur callback', () => {
    const handleBlur = spy();
    const wrapper = shallow(<RadioGroup onBlur={handleBlur} />);
    const event = {};
    wrapper.simulate('blur', event);
    assert.strictEqual(handleBlur.callCount, 1);
    assert.strictEqual(handleBlur.args[0][0], event);
  });

  it('should fire the onKeyDown callback', () => {
    const handleKeyDown = spy();
    const wrapper = shallow(<RadioGroup onKeyDown={handleKeyDown} />);
    const event = {};
    wrapper.simulate('keyDown', event);
    assert.strictEqual(handleKeyDown.callCount, 1);
    assert.strictEqual(handleKeyDown.args[0][0], event);
  });

  describe('imperative focus()', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<RadioGroup />);
    });

    it('should focus the first non-disabled radio', () => {
      const radios = [
        { props: { disabled: true }, focus: spy() },
        { props: { disabled: false }, focus: spy() },
        { props: { disabled: false }, focus: spy() },
      ];
      wrapper.instance().radios = radios;
      wrapper.instance().focus();

      assert.strictEqual(radios[1].focus.callCount, 1);
    });

    it('should not focus any radios if all are disabled', () => {
      const radios = [
        { props: { disabled: true }, focus: spy() },
        { props: { disabled: true }, focus: spy() },
        { props: { disabled: true }, focus: spy() },
      ];
      wrapper.instance().radios = radios;
      wrapper.instance().focus();

      assert.strictEqual(radios[0].focus.callCount, 0);
      assert.strictEqual(radios[1].focus.callCount, 0);
      assert.strictEqual(radios[2].focus.callCount, 0);
    });

    it('should focus the selected radio', () => {
      const radios = [
        { props: { disabled: true }, focus: spy() },
        { props: { disabled: false }, focus: spy() },
        { props: { disabled: false, checked: true }, focus: spy() },
        { props: { disabled: false }, focus: spy() },
      ];
      wrapper.instance().radios = radios;
      wrapper.instance().focus();

      assert.strictEqual(radios[0].focus.callCount, 0);
      assert.strictEqual(radios[1].focus.callCount, 0);
      assert.strictEqual(radios[2].focus.callCount, 1);
      assert.strictEqual(radios[3].focus.callCount, 0);
    });

    it('should focus the non-disabled radio rather than the disabled selected radio', () => {
      const radios = [
        { props: { disabled: true }, focus: spy() },
        { props: { disabled: true }, focus: spy() },
        { props: { disabled: true, checked: true }, focus: spy() },
        { props: { disabled: false }, focus: spy() },
      ];
      wrapper.instance().radios = radios;
      wrapper.instance().focus();

      assert.strictEqual(radios[0].focus.callCount, 0);
      assert.strictEqual(radios[1].focus.callCount, 0);
      assert.strictEqual(radios[2].focus.callCount, 0);
      assert.strictEqual(radios[3].focus.callCount, 1);
    });

    it('should be able to focus with no radios', () => {
      wrapper.instance().radios = [];
      wrapper.instance().focus();
    });
  });

  describe('children radios fire change event', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <RadioGroup>
          <Radio />
        </RadioGroup>,
      );
    });

    it('should fire onChange', () => {
      const internalRadio = wrapper.children().first();
      const event = { target: { value: 'woof' } };
      const onChangeSpy = spy();
      wrapper.setProps({ onChange: onChangeSpy });

      internalRadio.simulate('change', event, true);
      assert.strictEqual(onChangeSpy.callCount, 1);
      assert.strictEqual(onChangeSpy.calledWith(event), true);
    });

    it('should not fire onChange if not checked', () => {
      const internalRadio = wrapper.children().first();
      const onChangeSpy = spy();
      wrapper.setProps({ onChange: onChangeSpy });
      internalRadio.simulate('change', { target: { value: 'woof' } }, false);
      assert.strictEqual(onChangeSpy.callCount, 0);
    });
  });

  describe('register internal radios to this.radio', () => {
    let mount;

    before(() => {
      mount = createMount();
    });

    after(() => {
      mount.cleanUp();
    });

    it('should add a child', () => {
      const wrapper = mount(
        <RadioGroup.Naked classes={{}}>
          <Radio />
        </RadioGroup.Naked>,
      );
      assert.strictEqual(wrapper.instance().radios.length, 1);
    });

    it('should keep radios empty', () => {
      const wrapper = mount(<RadioGroup.Naked classes={{}} />);
      assert.strictEqual(wrapper.instance().radios.length, 0);
    });
  });
});
