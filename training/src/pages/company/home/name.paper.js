// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet('PaperSheet', theme => ({
  root: theme.mixins.gutters({
    paddingTop: 32,
    paddingBottom: 16,

  }),
}));

class Name extends Componet {
  render() {


    return (
      <div>
        <Paper id="companyid" width="500px">
          <Typography type="headline" component="h5">
            企业名称
        </Typography>
          <Typography type="body1" component="p">
            已安排/已报名：10人次/15人次
        </Typography>
          <Typography type="body1" component="p">
            已通过/已培训：人次/人次
        </Typography>
        </Paper>
      </div>
    );
  }


};

export default Name;
