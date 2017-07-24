import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import GridList from 'material-ui/Grid';

import NamePaper from './name.paper.js';
import UnarrangedPaper from './unarranged.paper.js';
import ArrangedPaper from './arranged.paper.js';
import ClassesPaper from './classes.paper.js';

import { getData, getRouter } from '../../../utils/helpers';

class Home extends Component {

    state = {
        students: {}
    };

    componentWillMount() {

        if (!window.CacheData) {
            var cb = (route, message, arg) => {
                console.log(route);
                console.log(message);
                if (message.code === "0") {
                    sessionStorage.logged = true;
                    sessionStorage.account = arg["account"];
                    sessionStorage.session = message.session;
                    window.CacheData = message.students;
                    console.log(window.CacheData);

                    // window.
                    // this.context.router.push("/company/home");
                }
            }
            getData(getRouter("login"), { account: "tishoy", password: "hantishoy123", type: 1 }, cb, { account: "tishoy" });
        }
    }

    render() {
        return (
            <div>
                <div
                    style={{ paddingTop: 80, paddingLeft: 40, justifyContent: 'space-between' }}
                >
                    <div style={{ margin: 10, width: 400, float: "left" }}>
                        <NamePaper />
                        <UnarrangedPaper style={{ margin: 10 }} />
                    </div>
                    <div style={{ margin: 10, width: 800, float: "left" }}>
                        <ArrangedPaper />
                    </div>
                    <div style={{ margin: 10, width: 400, float: "left" }}>
                        <ClassesPaper />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;