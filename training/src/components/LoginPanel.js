// @flow

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import CheckBox from 'material-ui/CheckBox';
import Button from 'material-ui/Button';
// import Checkbox from 'material-ui/Checkbox';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';

import { getData } from '../utils/helpers.js';
import Lang from '../utils/language.js';

const styleSheet = createStyleSheet('LoginPanel', theme => ({
    content: theme.mixins.gutters({
        paddingTop: 80,
        flex: '1 1 100%',
        maxWidth: '100%',
        margin: '0 auto',
    }),
    [theme.breakpoints.up(948)]: {
        content: {
            maxWidth: 900,
        },
    },
}));



function LoginPanel(props) {
    const classes = props.classes;


    return (
        <div>
            <Dialog
                open={true}
            >
                <TextField
                    name="login_account"
                    id="login_account"
                    hintText={Lang["Chin"].Common.input_your_account}
                    floatingLabelText={Lang["Chin"].Common.account}
                    fullWidth={true}
                    defaultValue={sessionStorage.account}
                />
                <TextField
                    name="password"
                    id="login_password"
                    type="password"
                    hintText={Lang["Chin"].Common.input_your_password}
                    floatingLabelText={Lang["Chin"].Common.password}
                    fullWidth={true}
                    defaultValue={""}
                />
                {/* <Checkbox
                    label="记住密码"
                    // checked={this.state.rememberLogin}
                    style={{
                        checkbox: {
                            marginTop: 10,
                            marginBottom: 10
                        },
                    }}
                    onCheck={() => { }}
                /> */}
                <Button
                    raised
                    className={classes.button}
                    onClick={() => {
                        console.log("123");
                        var result = getData("post", { name: "tishoy", aaa: 3 });
                    }}
                >

                </Button>
            </Dialog>
        </div>
    );
}

LoginPanel.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    // route: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(LoginPanel);
