// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

import { getData, getCache, getRouter } from '../../../utils/helpers';
import { DATA_TYPE_BASE, RESET } from '../../../enum';
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

class Base extends Component {
    state = {
        data: {}
    }

    componentDidMount() {
        getCache(DATA_TYPE_BASE)
    }

    submit = () => {

        var name = document.getElementById("name").value;
        var province = document.getElementById("province").value;
        var qualification = document.getElementById("qualification").value;

        var cb = (route, message, arg) => {
            if (message.id === Code.LOGIC_SUCCESS) {

                getCache(DATA_TYPE_BASE) = arg.base;
                // arg.self.state.data = 
            }

        }
        var obj = {
            name: name,
            province: province,
            qualification: qualification
        }
        getData(getRouter(RESET), { session: sessionStorage.session, base: JSON.stringify(obj) }, cb, { self: this, data: base });
    }

    render() {

        return (
            <div>
                <Paper style={{ width: 600 }}>
                    <Typography type="body1" component="p">
                        {Lang[window.Lang].pages.company.infos.company_name}
                    </Typography>
                    <TextField
                        id="name"
                        defaultValue={this.state.data.name}
                    />
                    <Typography type="body1" component="p">
                        {Lang[window.Lang].pages.company.infos.province}
                    </Typography>
                    <TextField
                        id="province"
                        defaultValue={this.state.data.province}
                    />

                    <Typography type="body1" component="p">
                        {Lang[window.Lang].pages.company.infos.qualification}
                    </Typography>
                    <TextField
                        id="qualification"
                        defaultValue={this.state.data.qualification}
                    />
                </Paper>

            </div>
        );
    }



};

export default Base;
