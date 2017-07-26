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
import { createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import blue from 'material-ui/colors/blue';
import pink from 'material-ui/colors/pink';
import AppFrame from '../components/AppFrame';

import { getData, getRouter } from '../utils/helpers';
import { APP_TYPE_COMPANY, LOGIN, REGISTER_COMPANY, CHECK_AVAILABLE } from '../enum';
import config from '../config';
import Lang from '../language';
import Code from '../code';



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
    name: ""
  }

  componentDidMount() {
    console.log(this.context.router)

    this.getRoutes();

    // this.context.
  }

  getRoutes = () => {
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

    getData(config.routes, { type: APP_TYPE_COMPANY, version: config.version }, cb);
  }

  check_available = (account) => {
    var cb = (route, message, arg) => {
      console.log(route);
      console.log(message);
    }
    getData(getRouter(CHECK_AVAILABLE), { account: account, type: APP_TYPE_COMPANY }, cb);
  }

  register = (account, password, repeat) => {
    // 判断两次密码是否一致
    if (password !== repeat) {

    }

    var cb = (route, message, arg) => {
      console.log(route);
      console.log(message);
    }
    getData(getRouter(REGISTER_COMPANY), { account: account, password: password, type: APP_TYPE_COMPANY }, cb);
  }

  login = (account, password) => {
    var cb = (route, message, arg) => {
      console.log(route);
      console.log(message);
      if (message.code === Code.LOGIC_SUCCESS) {
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
    getData(getRouter(LOGIN), { account: account, password: password, type: APP_TYPE_COMPANY }, cb, { account: account });
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
            value={"登陆"}
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
        />
        {Lang[window.Lang].pages.input_your_password}
        <TextField
          name="password"
          id="login_password"
          type="password"
          defaultValue={""}
        />
        <Button
          raised
          value={"登陆"}
          onClick={() => {
            console.log("123");
            this.login("tishoy", "hantishoy123");
          }}
        >

        </Button>
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
            {this.LoginDialog()}
          </div>
        </div>
      </div>
    )
  }




}


export default Home;
