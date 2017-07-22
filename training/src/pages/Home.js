// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Link from 'react-router/lib/Link';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import CheckBox from 'material-ui/CheckBox';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

import { getData, getRouter } from '../utils/helpers';
import config from '../config';
import Lang from '../utils/language';

class Home extends Component {

  state = {
    logged: Boolean(sessionStorage.getItem("logged")),
  }

  componentDidMount() {


    this.getRoutes();
  }

  getRoutes = (account) => {
    var cb = (route, message, arg) => {
      try {
        console.log(route);
        console.log(message);
        for (var key in message) {
          sessionStorage.setItem(key, message[key]);
        }
        console.log(sessionStorage);
      } catch (e) {
        console.log("回调出错");
      }
    }

    getData(config.routes, { type: 1, version: config.version }, cb);
  }

  check_available = () => {
    var cb = (route, message, arg) => {
      console.log(route);
      console.log(message);
    }
    getData(getRouter("available"), { account: "", type: 1 }, cb);
  }

  register = (account, password, repeat) => {
    // 判断两次密码是否一致
    if (password !== repeat) {

    }

    var cb = (route, message, arg) => {
      console.log(route);
      console.log(message);
    }
    getData(getRouter("register"), { account: "", password: "", type: 1 }, cb);
  }

  login = (account, password) => {
    var cb = (route, message, arg) => {
      console.log(route);
      console.log(message);
      if (message.code === "0") {
        sessionStorage.logged = true;
        sessionStorage.account = arg["account"];
        sessionStorage.session = message.session;
        Cache = message;
        console.log(Cache);
        this.context.router.push("/company/home");
      }
    }
    getData(getRouter("login"), { account: account, password: password, type: 1 }, cb, { account: account });
  }


  RegisterDialog = () => {

    return (
      <div>
        <Dialog
          open={true}
        >
          {Lang["Chin"].Common.input_your_account}
          <TextField
            name="register_account"
            id="register_account"
            hintText={Lang["Chin"].Common.input_your_account}
            floatingLabelText={Lang["Chin"].Common.account}
            fullWidth={true}
            defaultValue={sessionStorage.account}
            onBlur={() => {
              this.check_available(document.getElementById("register_account").value);
            }}
          />
          {Lang["Chin"].Common.input_your_password}
          <TextField
            name="register_password"
            id="register_password"
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
            onClick={() => {
              console.log("123");
              this.register();
            }}
          >

          </Button>
        </Dialog>
      </div>
    )
  }


  LoginDialog = () => {

    return (
      <div>
        <Dialog
          open={true}
        >
          {Lang["Chin"].Common.input_your_account}
          <TextField
            name="login_account"
            id="login_account"
            hintText={Lang["Chin"].Common.input_your_account}
            floatingLabelText={Lang["Chin"].Common.account}
            fullWidth={true}
            defaultValue={sessionStorage.account}
          />
          {Lang["Chin"].Common.input_your_password}
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
            onClick={() => {
              console.log("123");
              this.login("tishoy", "hantishoy123");
            }}
          >

          </Button>
        </Dialog>
      </div>
    )
  }


  render() {
    return (
      <div>
        {this.LoginDialog()}
      </div>
    )
  }




}


export default Home;
