// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import { getData, getRouter, getCache } from '../../../utils/helpers.js';

const styleSheet = createStyleSheet('PaperSheet', theme => ({
  root: theme.mixins.gutters({
    paddingTop: 32,
    paddingBottom: 16,

  }),
}));

class Name extends Component {

  state = {
    name: {},
    enrolled: [],
    arranged: [],
    agreed: [],
    examing: [],
    passed: [],
    retry: []
  }

  componentDidMount() {
    this.getNameData();
  }

  getStudentsStatus() {

    for (var i = 0; i < students.length; i++) {
      if (students[i].status['enrolled'].status === 1) {
        this.state.enrolled.push(students[i]);
      }
      if (students[i].status['arranged'].status === 1) {
        this.state.arranged.push(students[i]);
      }
      if (students[i].status['agreed'].status === 1) {
        this.state.agreed.push(students[i]);
      }
      if (students[i].status['examing'].status === 1) {
        this.state.examing.push(students[i]);
      }
      if (students[i].status['passed'].status === 1) {
        this.state.passed.push(students[i]);
      }
      if (students[i].status['retry'].status === 1) {
        this.state.retry.push(students[i]);
      }
    }
  }

  getNameData() {
    var cb = (route, message, arg) => {
      console.log(route);
      console.log(message);
    }

    getData(getRouter(query), { session: sessionStorage.session, collection: "company", sentence: "{}" }, cb);
    // console.log(data);
  }

  render() {
    return (
      <div>
        <Paper id="companyid" width="500px">
          <Typography type="headline" component="h5">
            {this.state.name["company"]}
          </Typography>
          <Typography type="body1" component="p">
            {"已安排/已报名：" + this.state.arranged.length + "人次/" + this.state.enrolled.length + "人次"}
          </Typography>
          <Typography type="body1" component="p">
            {"已通过/已培训：" + this.state.passed.length + "人次/" + this.state.examing.length + "人次"}
          </Typography>
        </Paper>
      </div>
    );
  }
};

export default Name;
