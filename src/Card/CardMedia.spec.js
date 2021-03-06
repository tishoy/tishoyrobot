// @flow

import React from 'react';
import { assert } from 'chai';
import { createShallow } from '../test-utils';
import CardMedia, { styleSheet } from './CardMedia';

describe('<CardMedia />', () => {
  let shallow;
  let classes;

  before(() => {
    shallow = createShallow({ untilSelector: 'CardMedia' });
    classes = shallow.context.styleManager.render(styleSheet);
  });

  it('should have the root class', () => {
    const wrapper = shallow(<CardMedia />);
    assert.strictEqual(wrapper.hasClass(classes.root), true);
  });
});
