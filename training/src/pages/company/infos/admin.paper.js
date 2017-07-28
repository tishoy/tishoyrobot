// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
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
        data: { account: "", password: "", name: "", tel: "", email: "" }
    }

    componentDidMount() {
        if (getCache(DATA_TYPE_ADMIN) !== undefined) {
            this.setState({
                data: getCache(DATA_TYPE_ADMIN)
            });
        }
    }

    submit = () => {

        var account = document.getElementById("account").value;
        var password = document.getElementById("password").value;
        var name = document.getElementById("name").value;
        var tel = document.getElementById("tel").value;
        var email = document.getElementById("email").value;

        var cb = (route, message, arg) => {
            if (message.code === Code.LOGIC_SUCCESS) {

                window.CacheData.admin = arg.data;

                console.log(getCache(DATA_TYPE_ADMIN));
                // arg.self.state.data = 
            }

        }
        var obj = {
            account: account,
            password: password,
            name: name,
            tel: tel,
            email: email
        }
        getData(getRouter(RESET_INFO), { session: sessionStorage.session, base: JSON.stringify(obj) }, cb, { self: this, data: obj });
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
                    <Button
                        raised
                        color="accent"
                        onClick={() => {
                            this.submit();
                        }}
                    >
                        {Lang[window.Lang].pages.main.certain_button}
                    </Button>
                </Paper>

            </div>
        );
    }



};

export default Admin;
