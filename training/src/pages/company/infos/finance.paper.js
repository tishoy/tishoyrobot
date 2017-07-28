// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
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
        data: {
            name: "", taxpayer_identify: "", bank: "", bank_account: "", address: "", tel: ""
        }
    }

    componentDidMount() {
        if (getCache(DATA_TYPE_FINANCE) !== undefined) {
            this.setState({
                data: getCache(DATA_TYPE_FINANCE)
            });
        }
    }

    submit = () => {

        var name = document.getElementById("name").value;
        var taxpayer_identify = document.getElementById("taxpayer_identify").value;
        var bank = document.getElementById("bank").value;
        var bank_account = document.getElementById("bank_account").value;
        var address = document.getElementById("address").value;
        var tel = document.getElementById("tel").value;

        var cb = (route, message, arg) => {
            if (message.code === Code.LOGIC_SUCCESS) {
                window.CacheData.finance = arg.data;
                console.log(getCache(DATA_TYPE_FINANCE));
            }
        }
        var obj = {
            name: name,
            taxpayer_identify: taxpayer_identify,
            bank: bank,
            bank_account: bank_account,
            address: address,
            tel: tel
        }
        getData(getRouter(RESET_INFO), { session: sessionStorage.session, base: JSON.stringify(obj) }, cb, { self: this, data: obj });
    }

    render() {

        return (
            <div>

                <Paper style={{ width: 600 }}>
                    <TextField
                        id="name"
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

export default Finance;
