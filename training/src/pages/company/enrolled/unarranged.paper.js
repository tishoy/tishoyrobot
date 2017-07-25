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



const styleSheet = createStyleSheet('PaperSheet', theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
    }),
}));

class Unarranged extends Component {
    render() {
        return (
            <div>
                <Paper elevation={4}>
                    <StudentCard>
                    </StudentCard>
                </Paper>
            </div>
        );
    }
}

export default Unarranged;
