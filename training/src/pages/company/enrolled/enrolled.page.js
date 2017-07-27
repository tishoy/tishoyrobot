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

import { getData, getRouter, getStudent, getCache } from '../../../utils/helpers';
import { QUERY, ENROLL_STUDENT, STATUS_ENROLLED, AGREE_ARRANGE, REFUSE_ARRANGE } from '../../../enum';
import Lang from '../../../language';
import Code from '../../../code';

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
            getData(getRouter(QUERY), { session: sessionStorage.session, type: 1 }, cb, { self: this });
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

    // 将新加入的学生排队
    erollStudent() {
        var cb = (router, message, arg) => {
            if (message.code === Code.LOGIC_SUCCESS) {
                // getCache(DATA_TYPE_STUDENT).
                // newStudents slice
                // unarragedStudents push
                // getCache(STUDENT)[]
                getStudent(arg.id)[STATUS_ENROLLED] = STATUS_ENROLLED_DID;
            }
        }
        getData(getRouter(ENROLL_STUDENT), { session: sessionStorage.session, id: id }, cb, { id: id });
    }

    agreeArrange() {
        var cb = (router, message, arg) => {
            if (message.code === Code.LOGIC_SUCCESS) {
                // getCache(DATA_TYPE_STUDENT).
                // newStudents slice
                // unarragedStudents push
                // getCache(STUDENT)[]
                getStudent(arg.id)[STATUS_ENROLLED] = STATUS_AGREED_AGREE;
            }
        }
        getData(getRouter(AGREE_ARRANGE), { session: sessionStorage.session, id: id }, cb, { id: id });
    }

    refuseArrange() {
        var cb = (router, message, arg) => {
            if (message.code === Code.LOGIC_SUCCESS) {
                // getCache(DATA_TYPE_STUDENT).
                // newStudents slice
                // unarragedStudents push
                // getCache(STUDENT)[]
                getStudent(arg.id)[STATUS_AGREED] = STATUS_AGREED_REFUSED;
            }
        }
        getData(getRouter(REFUSE_ARRANGE), { session: sessionStorage.session, id: id }, cb, { id: id });
    }

    render() {
        return (
            <div style={{ paddingTop: 80, paddingLeft: 40, justifyContent: 'space-between' }}>
                <Paper style={Style.paper}>
                    {this.state.newStudents.map(student =>
                        <StudentCard
                            name={student.base_info.name}
                            tel={student.base_info.tel}
                            email={student.base_info.email}
                            level={student.base_info.level}
                            city={student.base_info.city}>
                        </StudentCard>
                    )}
                </Paper>
                <Paper style={Style.paper}>
                    {this.state.unarragedStudents.map(student =>
                        <StudentCard
                            name={student.base_info.name}
                            tel={student.base_info.tel}
                            email={student.base_info.email}
                            level={student.base_info.level}
                            city={student.base_info.city}>
                        </StudentCard>
                    )}
                </Paper>
                <Paper style={Style.paper}>
                    {this.state.arrangedStudents.map(student =>
                        <StudentCard
                            name={student.base_info.name}
                            tel={student.base_info.tel}
                            email={student.base_info.email}
                            level={student.base_info.level}
                            city={student.base_info.city}>
                        </StudentCard>
                    )}
                </Paper>
            </div>
        )
    }
}

export default Enrolled;