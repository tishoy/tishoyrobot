// @flow

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import CheckBox from 'material-ui/CheckBox';
import Button from 'material-ui/Button';

const styleSheet = createStyleSheet('AppContent', theme => ({
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
            <TextField
                name="login_account"
                id="login_account"
                hintText={Lang[window.Lang].Common.input_your_account}
                floatingLabelText={Lang[window.Lang].Master.account}
                fullWidth={true}
                defaultValue={sessionStorage.account}
            />
            <TextField
                name="password"
                id="login_password"
                type="password"
                hintText={Lang[window.Lang].Common.input_your_password}
                floatingLabelText={Lang[window.Lang].Master.password}
                fullWidth={true}
                defaultValue={""}
            />
            <Checkbox
                label="记住登录状态"
                checked={this.state.rememberLogin}
                style={{
                    checkbox: {
                        marginTop: 10,
                        marginBottom: 10
                    },
                }}
                onCheck={this.onRememberLogin}
            />
            <Button raised className={classes.button}>

            </Button>
        </div>
    );
}

AppContent.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    route: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(AppContent);
