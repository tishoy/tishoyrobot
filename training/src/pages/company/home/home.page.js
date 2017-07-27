import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import GridList from 'material-ui/Grid';
import List, {
    ListItem, ListItemSecondaryAction, ListItemText,
    ListSubheader,
} from 'material-ui/List';
import Typography from 'material-ui/Typography';

import { getData, getRouter, getCache } from '../../../utils/helpers';
import {
    DATA_TYPE_BASE, DATA_TYPE_CLAZZ, STATUS_ENROLLED, STATUS_ARRANGED, STATUS_ARRANGED_DOING, STATUS_ARRANGED_UNDO,
    STATUS_ENROLLED_DID, STATUS_EXAMING, STATUS_EXAMING_DID, STATUS_PASSED, STATUS_PASSED_DID, QUERY, DATA_TYPE_STUDENT
} from '../../../enum';
import Lang from '../../../language';
import StudentCard from '../card.js';

class Home extends Component {

    state = {
        name: "",
        enrolled: 0,
        arranged: 0,
        examing: 0,
        passed: 0,
        unarragedStudents: [],
        arrangedStudents: [],
        clazz: []
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
                    window.CacheData = message.data;
                    arg.self.cacheToState();
                }
            }
            getData(getRouter(QUERY), { session: sessionStorage.session, type: 1 }, cb, { self: this });
        } else {
            // 设置界面
            this.cacheToState();
        }

    }

    cacheToState() {
        let students = getCache(DATA_TYPE_STUDENT);
        let enrolled = 0, arranged = 0, passed = 0, examing = 0,
            unarragedStudents = [], arrangedStudents = [];
        for (var i = 0; i < students.length; i++) {
            if (students[i].status[STATUS_ENROLLED].status === STATUS_ENROLLED_DID) {
                enrolled++
                if (students[i].status[STATUS_ARRANGED].status === STATUS_ARRANGED_UNDO) {
                    unarragedStudents.push(students[i]);
                }
            }
            if (students[i].status[STATUS_ARRANGED].status === STATUS_ARRANGED_DOING) {
                arranged++
                arrangedStudents.push(students[i]);
            }
            // if (students[i].status['agreed'].status === 1) {
            //     this.state.agreed.push(students[i]);
            // }
            if (students[i].status[STATUS_EXAMING].status === STATUS_EXAMING_DID) {
                examing++
            }
            if (students[i].status[STATUS_PASSED].status === STATUS_PASSED_DID) {
                passed++
            }
            // if (students[i].status['retry'].status === 1) {
            //     this.state.retry.push(students[i]);
            // }

        }
        this.setState({
            name: getCache(DATA_TYPE_BASE).name,
            enrolled: enrolled,
            arranged: arranged,
            examing: examing,
            passed: passed,
            unarragedStudents: unarragedStudents,
            arrangedStudents: arrangedStudents,
            clazz: getCache(DATA_TYPE_CLAZZ)
        })
    }

    render() {
        return (
            <div>
                <div
                    style={{ paddingTop: 80, paddingLeft: 40, justifyContent: 'space-between' }}
                >
                    <div style={{ margin: 10, width: 400, float: "left" }}>
                        <Paper id="companyid" width="500px">
                            <Typography type="headline" component="h5">
                                {this.state.name}
                            </Typography>
                            <Typography type="body1" component="p">
                                {Lang[window.Lang].pages.company.home.arranged + "/" + Lang[window.Lang].pages.company.home.arranged + ":"
                                    + this.state.arranged + Lang[window.Lang].pages.company.home.human + "/" + this.state.enrolled + Lang[window.Lang].pages.company.home.human}
                            </Typography>
                            <Typography type="body1" component="p">
                                {Lang[window.Lang].pages.company.home.passed + "/" + Lang[window.Lang].pages.company.home.trained + ":"
                                    + this.state.passed + Lang[window.Lang].pages.company.home.human + "/" + this.state.examing + Lang[window.Lang].pages.company.home.human}
                            </Typography>
                        </Paper>
                        <Paper elevation={4} style={{ margin: 10, width: 400, }}>
                            {/* <StudentCard>
                    </StudentCard> */}
                            <List subheader={<ListSubheader>{Lang[window.Lang].pages.company.home.unarranged_title}</ListSubheader>}>
                                {this.state.unarragedStudents.map(student =>
                                    <StudentCard
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
                    <div style={{ margin: 10, width: 800, float: "left" }}>
                        <Paper elevation={4}>

                            <List subheader={<ListSubheader>{Lang[window.Lang].pages.company.home.arranged_title}</ListSubheader>}>
                                {this.state.arrangedStudents.map(student =>
                                    <StudentCard
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
                    <div style={{ margin: 10, width: 400, float: "left" }}>
                        <Paper elevation={4}>

                            <List subheader={<ListSubheader>{Lang[window.Lang].pages.company.home.clazz_title}</ListSubheader>}>
                                {this.state.clazz.map(value =>
                                    <ListItem dense button key={value}>
                                        {/* <Avatar alt="Remy Sharp" src={remyImage} /> */}
                                        <ListItemText primary={`班级 ${value + 1}`} />
                                        <ListItemSecondaryAction>
                                            {/* <Checkbox
                  onClick={event => this.handleToggle(event, value)}
                  checked={this.state.checked.indexOf(value) !== -1}
                /> */}
                                        </ListItemSecondaryAction>
                                    </ListItem>,
                                )}
                            </List>


                        </Paper>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;