// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Link from 'react-router/lib/Link';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Paper from 'material-ui/Paper';

import AppFrame from '../components/AppFrame';
import { getData, getRouter } from '../utils/helpers';
import config from '../config';
import Lang from '../language';

import { createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';


import blue from 'material-ui/colors/blue';
import pink from 'material-ui/colors/pink';

const palette = createPalette({
  primary: blue,
  accent: pink,

});

const theme = createMuiTheme({ palette });

class Home extends Component {


  static contextTypes = {
    router: PropTypes.object.isRequired,
  }


  state = {
    logged: Boolean(sessionStorage.getItem("logged")),
  }

  componentDidMount() {
    console.log(this.context.router)

    this.getRoutes();

    // this.context.
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
        window.CacheData = {};
        // window.CacheData = message.data;
        // 严谨检查服务端传过来的数据正确性
        if (message.data.base !== undefined) {
          window.CacheData.base = message.data.base;
        } else {

        }
        if (message.data.finance !== undefined) {
          window.CacheData.finance = message.data.finance;
        } else {

        }
        if (message.data.express !== undefined) {
          window.CacheData.express = message.data.express;
        } else {

        }
        if (message.data.admin !== undefined) {
          window.CacheData.admin = message.data.admin;
        } else {

        }
        if (message.data.student !== undefined) {
          window.CacheData.student = message.data.student;
        } else {

        }
        if (message.data.clazz !== undefined) {
          window.CacheData.clazz = message.data.clazz;
        } else {

        }


        console.log(window.CacheData);
        this.context.router.push("/company/home");

        // window.
        // this.context.router.push("/company/home");
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
          {Lang[window.Lang].pages.input_your_account}
          <TextField
            name="register_account"
            id="register_account"
            hintText={Lang[window.Lang].pages.input_your_account}
            floatingLabelText={Lang[window.Lang].pages.account}
            fullWidth={true}
            defaultValue={sessionStorage.account}
            onBlur={() => {
              this.check_available(document.getElementById("register_account").value);
            }}
          />
          {Lang[window.Lang].pages.input_your_password}
          <TextField
            name="register_password"
            id="register_password"
            type="password"
            hintText={Lang[window.Lang].pages.input_your_password}
            floatingLabelText={Lang[window.Lang].pages.password}
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
        <AppFrame />
        <Paper style={{
          margin: '20px 30%',
          width: '100%',
          height: '40vw',
          maxHeight: 230,
        }}>
          {Lang[window.Lang].pages.input_your_account}
          <TextField
            id="name"
            label="Name"
            style={{
              marginLeft: 200,//styleManager.theme.spacing.unit,
              marginRight: 200,//theme.spacing.unit,  
              width: 200,
            }}
            value={this.state.name}
            onChange={event => this.setState({ name: event.target.value })}
            margin="normal"
          />
          {Lang[window.Lang].pages.input_your_password}
          <TextField
            name="password"
            id="login_password"
            type="password"
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
        </Paper>
      </div>
    )
  }


  render() {
    return (
      <div style={{ flex: '1 0 100%', }}>
        <div style={{
          minHeight: '100vh', // Makes the hero full height until we get some more content.
          flex: '0 0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.palette.primary[500],
          color: theme.palette.getContrastText(theme.palette.primary[500]),
        }}>
          <div style={{
            padding: '60px 30px',
            textAlign: 'center',
            [theme.breakpoints.up('sm')]: {
              padding: '120px 30px',
            },
          }}>
            <Button
              raised
              onClick={() => {
                console.log("123");
                this.login("tishoy", "hantishoy123");
              }}
            >

            </Button>
          </div>
        </div>
      </div>
    )
  }




}


export default Home;
