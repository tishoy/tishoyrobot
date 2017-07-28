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
import { initCache, getData, getRouter, getCache } from '../../../utils/helpers';
import { DATA_TYPE_STUDENT, STATUS_EXAMING, STATUS_PASSED, STATUS_PASSED_DID, STATUS_EXAMING_DOING, STATUS_PASSED_UNDO, STATUS_EXAMING_DID } from '../../../enum';
import Lang from '../../../language';

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
        window.currentPage = this;
        initCache(this.cacheToState);

    }

    cacheToState() {
        let students = getCache(DATA_TYPE_STUDENT);
        let examingStudents = [], passedStudents = [], unpassedStudents = [];
        for (var i = 0; i < students.length; i++) {
            if (students[i].status[STATUS_EXAMING].status === STATUS_EXAMING_DOING) {
                examingStudents.push(students[i]);
            }
            if (students[i].status[STATUS_EXAMING].status === STATUS_EXAMING_DID && students[i].status[STATUS_PASSED].status === STATUS_PASSED_DID) {
                passedStudents.push(students[i]);
            }
            if (students[i].status[STATUS_EXAMING].status === STATUS_EXAMING_DID && students[i].status[STATUS_PASSED].status !== STATUS_PASSED_UNDO) {
                unpassedStudents.push(students[i]);
            }
        }

        window.currentPage.setState({
            examingStudents: examingStudents,
            passedStudents: passedStudents,
            unpassedStudents: unpassedStudents,
        })
    }

    // 安排考试
    arrangeExam() {
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

    retryExam() {
        var cb = (router, message, arg) => {
            if (message.code === Code.LOGIC_SUCCESS) {
                // getCache(DATA_TYPE_STUDENT).
                // newStudents slice
                // unarragedStudents push
                // getCache(STUDENT)[]
                // getStudent(arg.id)[STATUS_AGREED] = STATUS_AGREED_REFUSED;
            }
        }
        getData(getRouter(RETRY_EXAM), { session: sessionStorage.session, id: id }, cb, { id: id });
    }

    render() {
        return (
            <div>
                <div
                    style={{ paddingTop: "80px", paddingLeft: 40, display: 'flex', FlexDirection: 'row', justifyContent: 'space-between' }}
                >

                    <Paper elevation={4} style={Style.paper}>
                        <List subheader={<ListSubheader>{Lang[window.Lang].pages.company.exams.examing}</ListSubheader>}>
                            {this.state.examingStudents.map(student =>
                                <StudentCard
                                    key={student.id}
                                    name={student.base_info.name}
                                    tel={student.base_info.tel}
                                    email={student.base_info.email}
                                    level={student.base_info.level}
                                    city={student.base_info.city}>
                                </StudentCard>
                            )}
                        </List>
                    </Paper>
                    <Paper elevation={4} style={Style.paper}>
                        <List subheader={<ListSubheader>{Lang[window.Lang].pages.company.exams.passed}</ListSubheader>}>
                            {this.state.passedStudents.map(student =>
                                <StudentCard
                                    key={student.id}
                                    name={student.base_info.name}
                                    tel={student.base_info.tel}
                                    email={student.base_info.email}
                                    level={student.base_info.level}
                                    city={student.base_info.city}>
                                </StudentCard>
                            )}
                        </List>
                    </Paper>
                    <Paper elevation={4} style={Style.paper}>
                        <List subheader={<ListSubheader>{Lang[window.Lang].pages.company.exams.unpassed}</ListSubheader>}>
                            {this.state.unpassedStudents.map(student =>
                                <StudentCard
                                    key={student.id}
                                    name={student.base_info.name}
                                    tel={student.base_info.tel}
                                    email={student.base_info.email}
                                    level={student.base_info.level}
                                    city={student.base_info.city}>
                                </StudentCard>
                            )}
                        </List>
                    </Paper>
                </div>
            </div>
        )
    }
}

export default Exams;