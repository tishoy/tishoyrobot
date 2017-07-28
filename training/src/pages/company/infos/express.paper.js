// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

import { getData, getCache, getRouter } from '../../../utils/helpers';
import { DATA_TYPE_BASE, RESET_INFO, DATA_TYPE_EXPRESS } from '../../../enum';
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

const LANG_PREFIX = Lang[window.Lang].pages.company.infos.express;

class Express extends Component {
    componentDidMount() {
        this.setState({
            data: getCache(DATA_TYPE_EXPRESS)
        });
    }

    state = {
        data: {}
    }

    render() {
        return (
            <div>

                <Paper style={{ width: 600 }}>


                    <TextField
                        id="code"
                        label={LANG_PREFIX.code}
                        defaultValue={this.state.data.code}>
                    </TextField>
                    <TextField
                        id="express_address"
                        label={LANG_PREFIX.express_address}
                        defaultValue={this.state.data.express_address}>
                    </TextField>

                    <TextField
                        id="address"
                        label={LANG_PREFIX.address}
                        defaultValue={this.state.data.address}>

                    </TextField>

                    <TextField
                        id="express_person"
                        label={LANG_PREFIX.express_person}
                        defaultValue={this.state.data.express_person}>
                    </TextField>

                    <TextField
                        id="contact_way"
                        label={LANG_PREFIX.contact_way}
                        defaultValue={this.state.data.contact_way}>
                    </TextField>
                </Paper>

            </div>
        );
    }



};

export default Express;
