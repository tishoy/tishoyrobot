// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

import { getData, getCache, getRouter } from '../../../utils/helpers';
import { DATA_TYPE_BASE, RESET_INFO, DATA_TYPE_FINANCE } from '../../../enum';
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

const LANG_PREFIX = Lang[window.Lang].pages.company.infos.finance;

class Finance extends Component {

    state = {
        data: {}
    }

    componentDidMount() {
        this.setState({
            data: getCache(DATA_TYPE_FINANCE)
        });
    }

    render() {

        return (
            <div>

                <Paper style={{ width: 600 }}>
                    <TextField
                        id=""
                        label={LANG_PREFIX.name}
                        defaultValue={this.state.data.name}>
                    </TextField>
                    <TextField
                        id="taxpayer_identify"
                        label={LANG_PREFIX.taxpayer_identify}
                        defaultValue={this.state.data.taxpayer_identify}>
                    </TextField>
                    <TextField
                        id="bank"
                        label={LANG_PREFIX.bank}
                        defaultValue={this.state.data.bank}>
                    </TextField>
                    <TextField
                        id="bank_account"
                        label={LANG_PREFIX.bank_account}
                        defaultValue={this.state.data.bank_account}>
                    </TextField>
                    <TextField
                        id="address"
                        label={LANG_PREFIX.address}
                        defaultValue={this.state.data.address}>
                    </TextField>
                    <TextField
                        id="tel"
                        label={LANG_PREFIX.tel}
                        defaultValue={this.state.data.tel}>
                    </TextField>
                </Paper>
            </div>
        );
    }



};

export default Finance;
