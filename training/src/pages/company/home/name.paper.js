// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet('PaperSheet', theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
}));

function PaperSheet(props) {
  const classes = props.classes;
  return (
    <div>
      <Paper width="500px" className={classes.root} elevation={4}>
        <Typography type="headline" component="h3">
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

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(PaperSheet);
