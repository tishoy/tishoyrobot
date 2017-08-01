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

import StudentCard from '../CompanyStudent.js';

import { initCache, getData, getRouter, getStudent, getCache } from '../../../utils/helpers';
import {
    QUERY, ENROLL_STUDENT, STATUS_ENROLLED, AGREE_ARRANGE, REFUSE_ARRANGE, DATA_TYPE_STUDENT, STATUS_ARRANGED_DOING,
    STATUS_ENROLLED_UNDO, STATUS_ARRANGED_UNDO, STATUS_AGREED_AGREE, STATUS_ENROLLED_DID, STATUS_ARRANGED, STATUS_AGREED,
    CARD_TYPE_ENROLL, CARD_TYPE_ARRANGE, CARD_TYPE_UNARRANGE
} from '../../../enum';
import Lang from '../../../language';
import Code from '../../../code';

import CommonAlert from '../../../components/CommonAlert';

const Style = {
    paper: { margin: 10, width: 400, float: "left" }
}


class Enrolled extends Component {
    state = {
        newStudents: [],
        unarragedStudents: [],
        arrangedStudents: [],

        // 提示状态
        alertOpen: true,
        alertType: "notice",
        alertCode: Code.LOGIC_SUCCESS,
        alertContent: "登录成功"
    };


    componentWillMount() {
        window.currentPage = this;
        this.fresh()
    }

    fresh = () => {
        initCache(this.cacheToState);
    }

    cacheToState() {
        // 设置界面
        let students = getCache(DATA_TYPE_STUDENT);
        let newStudents = [], unarragedStudents = [], arrangedStudents = [];
        for (var i = 0; i < students.length; i++) {
            if (students[i].status[STATUS_ENROLLED].status === STATUS_ENROLLED_UNDO) {
                newStudents.push(students[i]);
            }
            if (students[i].status[STATUS_ENROLLED].status === STATUS_ENROLLED_DID && students[i].status[STATUS_ARRANGED].status === STATUS_ARRANGED_UNDO) {
                unarragedStudents.push(students[i]);
            }
            if (students[i].status[STATUS_AGREED].status === STATUS_ARRANGED_DOING || students[i].status[STATUS_AGREED].status === STATUS_ARRANGED_DID) {
                arrangedStudents.push(students[i]);
            }
        }
        window.currentPage.setState({
            newStudents: newStudents,
            unarragedStudents: unarragedStudents,
            arrangedStudents: arrangedStudents
        })
    }

    // 将新加入的学生排队
    erollStudent(id) {
        var cb = (router, message, arg) => {
            if (message.code === Code.LOGIC_SUCCESS) {
                getStudent(arg.id)[STATUS_ENROLLED] = STATUS_ENROLLED_DID;
            }
        }
        getData(getRouter(ENROLL_STUDENT), { session: sessionStorage.session, id: id }, cb, { id: id });
    }

    agreeArrange() {
        var cb = (router, message, arg) => {
            if (message.code === Code.LOGIC_SUCCESS) {
                getStudent(arg.id)[STATUS_ENROLLED] = STATUS_AGREED_AGREE;
            }
        }
        getData(getRouter(AGREE_ARRANGE), { session: sessionStorage.session, id: id }, cb, { id: id });
    }

    refuseArrange() {
        var cb = (router, message, arg) => {
            if (message.code === Code.LOGIC_SUCCESS) {
                getStudent(arg.id)[STATUS_AGREED] = STATUS_AGREED_REFUSED;
            }
        }
        getData(getRouter(REFUSE_ARRANGE), { session: sessionStorage.session, id: id }, cb, { id: id });
    }

    popUpNotice = (type, code, content) => {
        this.setState({ type: type, code: code, content: content, alertOpen: true });
    }

    render() {
        return (
            <div style={{ paddingTop: 80, paddingLeft: 40, justifyContent: 'space-between' }}>
                <Paper style={Style.paper}>
                    <List subheader={<ListSubheader>{Lang[window.Lang].pages.company.enrolled.unenrolled}</ListSubheader>}>
                        {this.state.newStudents.map(student =>
                            <StudentCard
                                type={CARD_TYPE_ENROLL}
                                key={student.id}
                                name={student.base_info.name}
                                tel={student.base_info.tel}
                                email={student.base_info.email}
                                level={student.base_info.level}
                                city={student.base_info.city}
                                action={() => {
                                    console.log("erollStudent" + student.id)
                                    this.erollStudent(student.id);
                                }}>
                            </StudentCard>
                        )}
                    </List>
                </Paper>
                <Paper style={Style.paper}>
                    <List subheader={<ListSubheader>{Lang[window.Lang].pages.company.enrolled.unarrange}</ListSubheader>}>
                        {this.state.unarragedStudents.map(student =>
                            <StudentCard
                                type={CARD_TYPE_UNARRANGE}
                                key={student.id}
                                name={student.base_info.name}
                                tel={student.base_info.tel}
                                email={student.base_info.email}
                                level={student.base_info.level}
                                city={student.base_info.city}
                            >
                            </StudentCard>
                        )}
                    </List>
                </Paper>
                <Paper style={Style.paper}>
                    <List subheader={<ListSubheader>{Lang[window.Lang].pages.company.enrolled.arranged}</ListSubheader>}>
                        {this.state.arrangedStudents.map(student =>
                            <StudentCard
                                type={CARD_TYPE_ARRANGE}
                                key={student.id}
                                name={student.base_info.name}
                                tel={student.base_info.tel}
                                email={student.base_info.email}
                                level={student.base_info.level}
                                city={student.base_info.city}
                                action={[() => {
                                    console.log("agreeArrange" + student.id)
                                    this.agreeArrange(student.id);
                                }, () => {
                                    console.log("refuseArrange" + student.id)
                                    this.refuseArrange(student.id);
                                }]}>
                            </StudentCard>
                        )}
                    </List>
                </Paper>
                <CommonAlert
                    show={this.state.alertOpen}
                    type={this.state.alertType}
                    code={this.state.alertCode}
                    content={this.state.alertContent}
                    handleCertainClose={() => {
                        this.setState({ alertOpen: false });
                    }}
                    handleCancelClose={() => {
                        this.setState({ alertOpen: false })
                    }}>
                </CommonAlert>
            </div>
        )
    }
}

export default Enrolled;