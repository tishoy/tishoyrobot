// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import { getData, getCache } from '../../../utils/helpers.js';

const styleSheet = createStyleSheet('PaperSheet', theme => ({
  root: theme.mixins.gutters({
    paddingTop: 32,
    paddingBottom: 16,

  }),
}));

class Name extends Component {

  state = {
    enrolled: [],
    arranged: [],
    agreed: [],
    examing: [],
    passed: [],
    retry: []
  }

  componentDidMount() {
    this.getStudentsStatus()
    this.getNameData();
  }

  getStudentsStatus() {
    var students = getCache()

    for (var i = 0; i < Cache.data.length; i++) {
      if (message.data[i].status['enrolled'].status === 1) {
        this.state.enrolled.push(message.data[i]);
      }
      if (message.data[i].status['arranged'].status === 1) {
        this.state.arranged.push(message.data[i]);
      }
      if (message.data[i].status['agreed'].status === 1) {
        this.state.agreed.push(message.data[i]);
      }
      if (message.data[i].status['examing'].status === 1) {
        this.state.examing.push(message.data[i]);
      }
      if (message.data[i].status['passed'].status === 1) {
        this.state.passed.push(message.data[i]);
      }
      if (message.data[i].status['retry'].status === 1) {
        this.state.retry.push(message.data[i]);
      }
    }
  }

  getNameData() {
    // var cb = (route, message, arg) => {
    //   console.log(route);
    //   console.log(message);
    // }

    // var data = getData("http://localhost:3008/", "users/login", { name: "tishoy", aaa: 3 }, cb);
    // console.log(data);
  }

  render() {
    return (
      <div>
        <Paper id="companyid" width="500px">
          <Typography type="headline" component="h5">
            {this.state.data["company"]}
          </Typography>
          <Typography type="body1" component="p">
            {"已安排/已报名：" + this.state.data["arranged"].length + "人次/" + this.state.data["enrolled"].length + "人次"}
          </Typography>
          <Typography type="body1" component="p">
            {"已通过/已培训：" + this.state.data["passed"].length + "人次/" + this.state.data["examing"].length + "人次"}
          </Typography>
        </Paper>
      </div>
    );
  }
};

export default Name;
