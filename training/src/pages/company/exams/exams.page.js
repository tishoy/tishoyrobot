import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import GridList from 'material-ui/Grid';

import StudentCard from '../card.js';
import { getData, getRouter, getCache } from '../../../utils/helpers';

const Style = {
    paper: { margin: 10, width: 400, float: "left" }
}


class Exams extends Component {
    state = {
        examingStudents: [],
        passedStudents: [],
        unpassedStudents: [],
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
            let examingStudents = [], passedStudents = [], unpassedStudents = [];
            for (var i = 0; i < students.length; i++) {
                if (students[i].status['examing'].status === 0) {
                    examingStudents.push(students[i]);
                }
                if (students[i].status['examing'].status === 1 && students[i].status['passed'].status === 1) {
                    passedStudents.push(students[i]);
                }
                if (students[i].status['examing'].status === 1 && students[i].status['passed'].status !== 1) {
                    unpassedStudents.push(students[i]);
                }
            }

            this.setState({
                examingStudents: examingStudents,
                passedStudents: passedStudents,
                unpassedStudents: unpassedStudents,
            })
        }

    }

    render() {
        return (
            <div>
                <div
                    style={{ paddingTop: "80px", paddingLeft: 40, display: 'flex', FlexDirection: 'row', justifyContent: 'space-between' }}
                >

                    <Paper elevation={4} style={Style.paper}>
                        {this.state.examingStudents.map(value =>
                            <StudentCard
                                name="tishoy"
                                tel="100"
                            >
                            </StudentCard>
                        )}
                    </Paper>
                    <Paper elevation={4} style={Style.paper}>
                        {this.state.passedStudents.map(value =>
                            <StudentCard
                                name="tishoy"
                                tel="100"
                            >
                            </StudentCard>
                        )}
                    </Paper>
                    <Paper elevation={4} style={Style.paper}>
                        {this.state.unpassedStudents.map(value =>
                            <StudentCard
                                name="tishoy"
                                tel="100"
                            >
                            </StudentCard>
                        )}
                    </Paper>
                </div>
            </div>
        )
    }
}

export default Exams;