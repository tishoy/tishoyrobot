// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

import { getData, getCache, getRouter } from '../../../utils/helpers';
import { DATA_TYPE_BASE, RESET_INFO, DATA_TYPE_ADMIN } from '../../../enum';
import Code from '../../../code';
import Lang from '../../../language';

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

class Admin extends Component {
    state = {
        data: {}
    }

    componentDidMount() {
        this.setState({
            data: getCache(DATA_TYPE_ADMIN)
        });
    }

    render() {
        return (
            <div

            >
                <Paper style={{ width: 600 }}>
                    <TextField
                        id="account"
                        label={Lang[window.Lang].pages.company.infos.admin.account}
                        defaultValue={this.state.data.name}>
                    </TextField>
                    <TextField
                        id="password"
                        label={Lang[window.Lang].pages.company.infos.admin.password}
                        defaultValue={this.state.data.password}>
                    </TextField>
                    <TextField
                        id="name"
                        label={Lang[window.Lang].pages.company.infos.admin.name}
                        defaultValue={this.state.data.name}>
                    </TextField>
                    <TextField
                        id="tel"
                        label={Lang[window.Lang].pages.company.infos.admin.tel}
                        defaultValue={this.state.data.tel}>
                    </TextField>
                    <TextField
                        id="email"
                        label={Lang[window.Lang].pages.company.infos.admin.email}
                        defaultValue={this.state.data.email}>

                    </TextField>
                </Paper>

            </div>
        );
    }



};

export default Admin;
