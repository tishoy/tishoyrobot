// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import List, {
  ListItem, ListItemSecondaryAction, ListItemText,
  ListSubheader,
} from 'material-ui/List';
import Typography from 'material-ui/Typography';

import StudentCard from '../card.js';

import { getData, getRouter, getCache } from '../../../utils/helpers.js';

const styleSheet = createStyleSheet('PaperSheet', theme => ({
  root: theme.mixins.gutters({
    magain: 10,
    paddingTop: 16,
    paddingBottom: 16,
  }),
}));

class Arranged extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    // var cb = (router, message, args) => {
    //   this.setState({ data: message.data })
    // }
    // getData(getRouter('query'), { collection: 'students', sentence: '{}' }, cb);
    // getData("arrange", { session: sessionStorage.getItem("session") }, cb, {});
  }



  render() {

    return (
      <div>
        
      </div>
    );
  }
}


export default Arranged;
