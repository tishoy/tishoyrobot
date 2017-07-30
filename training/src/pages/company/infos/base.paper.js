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
import { DATA_TYPE_BASE, RESET_INFO } from '../../../enum';
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
        data: { company_name: "", province: "", qualification: "" }
    }

    componentDidMount() {
        if (getCache(DATA_TYPE_BASE) !== undefined) {
            this.setState({
                data: getCache(DATA_TYPE_BASE)
            });
        }
    }

    submit = () => {

        var company_name = document.getElementById("company_name").value;
        var province = document.getElementById("province").value;
        var qualification = document.getElementById("qualification").value;

        var cb = (route, message, arg) => {
            if (message.code === Code.LOGIC_SUCCESS) {

                console.log(arg.data);

                window.CacheData.base = arg.data;

                console.log(getCache(DATA_TYPE_BASE));
                // arg.self.state.data = 
            }

        }
        var obj = {
            company_name: company_name,
            province: province,
            qualification: qualification
        }
        getData(getRouter(RESET_INFO), { session: sessionStorage.session, base: JSON.stringify(obj) }, cb, { self: this, data: obj });
    }

    render() {

        return (
            <div>
                <Paper style={{ width: 600 }}>
                    <TextField
                        id="company_name"
                        placeholder={Lang[window.Lang].pages.company.infos.base.company_name}
                        defaultValue={this.state.data.company_name}
                    />
                    <TextField
                        id="province"
                        placeholder={Lang[window.Lang].pages.company.infos.base.province}
                        defaultValue={this.state.data.province}
                    />
                    <TextField
                        id="qualification"
                        placeholder={Lang[window.Lang].pages.company.infos.base.qualification}
                        defaultValue={this.state.data.qualification}
                    />
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

export default Base;
