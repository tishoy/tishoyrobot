import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import List, {
  ListItem, ListItemSecondaryAction, ListItemText,
  ListSubheader,
} from 'material-ui/List';
import Typography from 'material-ui/Typography';

import StudentCard from '../card.js';

import { getData, getRouter } from '../../../utils/helpers';

const Style = {
    paper: { margin: 10, width: 400, float: "left" }
}


class Enrolled extends Component {
    state = {
        newStudents: [],
        unarragedStudents: [],
        arrangedStudents: [],
    };


    componentWillMount() {

        if (!window.CacheData) {
            if (sessionStorage.logged === undefined || sessionStorage.logged === false) {
                // 请先登录
                // 路由转到 Home

            }


            var cb = (route, message, arg) => {
                console.log(route);
                console.log(message);
                if (message.code === "0") {
                    sessionStorage.logged = true;
                    sessionStorage.account = arg['account'];
                    sessionStorage.session = message.session;
                    window.CacheData = message.students;
                    console.log(window.CacheData);
                    // arg.self.


                    // window.
                    // this.context.router.push("/company/home");
                }
            }
            getData(getRouter("query"), { session: sessionStorage.session, type: 1 }, cb, { self: this });
        } else {
            // 设置界面
            let students = getCache("student");
            let newStudents = [], unarragedStudents = [], arrangedStudents = [];
            for (var i = 0; i < students.length; i++) {
                if (students[i].status['enrolled'].status === 0) {
                    newStudents.push(students[i]);
                }
                if (students[i].status['enrolled'].status === 1 && students[i].status['arranged'].status !== 1) {
                    unarragedStudents.push(students[i]);
                }
                if (students[i].status['arranged'].status === 1 && students[i].status['examing'].status === 1) {
                    arrangedStudents.push(students[i]);
                }
            }

            this.setState({
                name: getCache("base").name,
                newStudents: newStudents,
                unarragedStudents: unarragedStudents,
                arrangedStudents: arrangedStudents,
                clazz: getCache("clazz")
            })
        }

    }

    render() {
        return (
            <div style={{ paddingTop: 80, paddingLeft: 40, justifyContent: 'space-between' }}>
                <Paper style={Style.paper}>
                    {this.state.newStudents.map(value =>
                        <StudentCard>
                        </StudentCard>
                    )}
                </Paper>
                <Paper style={Style.paper}>
                    {this.state.unarragedStudents.map(value =>
                        <StudentCard>
                        </StudentCard>
                    )}
                </Paper>
                <Paper style={Style.paper}>
                    {this.state.arrangedStudents.map(value =>
                        <StudentCard>
                        </StudentCard>
                    )}
                </Paper>
            </div>
        )
    }
}

export default Enrolled;