// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

import Base from './base.paper';
import Finance from './finance.paper';
import Express from './express.paper';
import Admin from './admin.paper';

const styleSheet = createStyleSheet('PaperSheet', theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
    }),
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

class Info extends Component {
    render() {

        return (
            <div>
                <Grid container gutter={24}>
                    <Grid item xs={12} sm={6}>
                        <Base />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Finance />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Express />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Admin />
                    </Grid>
                </Grid>
            </div>
        );
    }



};

export default Info;
