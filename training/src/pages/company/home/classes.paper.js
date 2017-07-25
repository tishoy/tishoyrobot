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

import { getData, getRouter } from '../../../utils/helpers.js';

const styleSheet = createStyleSheet('PaperSheet', theme => ({
    root: theme.mixins.gutters({
        magain: 10,
        paddingTop: 16,
        paddingBottom: 16,
    }),
}));

class Clazzes extends Component {

    state = {}

    componentDidMount() {
        this.getClassesData();
    }

    getClassesData() {
        // var cb = (id, message, arg) => {
        //     console.log(id);
        //     console.log(message);
        // }
        // getData(getRouter('query'), { collection: 'classes', sentence: '{}' }, cb);
    }

    render() {


        return (
            <div>
                
            </div>
        );
    }



}

export default Clazzes;
