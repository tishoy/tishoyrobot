// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import List, {
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    ListSubheader,
} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';

import DeleteIcon from 'material-ui-icons/Delete';

import StudentCard from '../card.js';

import { getData } from '../../../utils/helpers.js';

const styleSheet = createStyleSheet('PaperSheet', theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
    }),
}));

class Unarranged extends Component {
    state = {
        data: {}
    }

    componentDidMount() {
        // var cc = getData("enroll", { session: sessionStorage.getItem("session") });
    }

    render() {
        return (
            <div style={{
                paddingTop: 16,
                paddingBottom: 16,
            }}>
                
            </div>
        );
    }



};

export default Unarranged;
