// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Link from 'react-router/lib/Link';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import MobileStepper from 'material-ui/MobileStepper';
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

import Base from './company/infos/base.paper';
import Finance from './company/infos/finance.paper';
import Express from './company/infos/express.paper';
import Admin from './company/infos/admin.paper';

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
    showRegister: true,
    name: "",
    activeStep: 0,
  }

  componentDidMount() {
    window.CacheData = {};
    window.currentPage = this;
    this.getRoutes();
  }

  fresh = () => {
    this.setState({ showRegister: !this.state.showRegister })
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
      if (message.code === Code.LOGIC_SUCCESS) {
        // 与其他玩家不冲突
      } else {
        // 名字已经被占用，需要重新起一个有特色的名字
      }

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

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };

  RegisterStep = () => {
    switch (this.state.activeStep) {
      // 遵守协议
      case 0:
        return <div>

        </div>
      // 注册账号密码
      case 1:
        return <div>
          <TextField
            name="register_account"
            id="register_account"
            placeholder={Lang[window.Lang].pages.main.account}
            fullWidth={true}
            defaultValue={sessionStorage.account}
            onBlur={() => {
              this.check_available(document.getElementById("register_account").value);
              console.log("可以用");
            }}
          />
          <TextField
            name="register_password"
            id="register_password"
            placeholder={Lang[window.Lang].pages.main.password}
            type="password"
            fullWidth={true}
          // defaultValue={Lang[window.Lang].pages.main.input_your_password}
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
            color="accent"
            onClick={() => {
              console.log("123");
              this.register();
            }}
          >
            {Lang[window.Lang].pages.main.register_button}
          </Button>
        </div>
      case 2:
        return <div>
          <Base />
        </div>
      case 3:
        return <div>
          <Finance />
        </div>
      case 4:
        return <div>
          <Express />
        </div>
      case 5:
        return <div>
          <Admin />
        </div>

    }
  }

  RegisterView = () => {
    return (
      <div>
        {this.RegisterStep()}
        <MobileStepper
          type="text"
          steps={6}
          position="static"
          activeStep={this.state.activeStep}
          style={{
            maxWidth: 400,
            flexGrow: 1,
          }}
          onBack={this.handleBack}
          onNext={this.handleNext}
          disableBack={this.state.activeStep === 0}
          disableNext={this.state.activeStep === 5}
        />

      </div>
    )
  }

  LoginView = () => {
    return (
      <div>
        <TextField
          id="login_name"
          label={Lang[window.Lang].pages.main.account}
          style={{
            marginLeft: 200,//styleManager.theme.spacing.unit,
            marginRight: 200,//theme.spacing.unit,  
            width: 200,
          }}
          defaultValue={Lang[window.Lang].pages.main.input_your_account}
          value={this.state.name}
          onChange={event => this.setState({ name: event.target.value })}
        />
        <TextField
          placeholder={Lang[window.Lang].pages.main.password}
          id="login_password"
          type="password"
        // defaultValue={Lang[window.Lang].pages.main.input_your_password}
        />
        <Button
          raised
          color="accent"
          onClick={() => {
            var name = document.getElementById("login_name").value;
            var password = document.getElementById("login_password").value;
            if (name === "" || password === "") {
              return
            }
            this.login(name, password);
          }}
        >
          {Lang[window.Lang].pages.main.login_button}
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
            {this.state.showRegister === true ? this.RegisterView() : this.LoginView()}
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
