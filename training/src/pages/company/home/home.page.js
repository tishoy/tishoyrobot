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
            let enrolled = 0, arranged = 0, passed = 0, examing = 0,
                unarragedStudents = [], arrangedStudents = [];
            for (var i = 0; i < students.length; i++) {
                if (students[i].status['enrolled'].status === 1) {
                    enrolled++
                    if (students[i].status['arranged'].status !== 1) {
                        unarragedStudents.push(students[i]);
                    }
                }
                if (students[i].status['arranged'].status === 1) {
                    arranged++
                    arrangedStudents.push(students[i]);
                }
                // if (students[i].status['agreed'].status === 1) {
                //     this.state.agreed.push(students[i]);
                // }
                if (students[i].status['examing'].status === 1) {
                    examing++
                }
                if (students[i].status['passed'].status === 1) {
                    passed++
                }
                // if (students[i].status['retry'].status === 1) {
                //     this.state.retry.push(students[i]);
                // }

            }
            this.setState({
                name: getCache("base").name,
                enrolled: enrolled,
                arranged: arranged,
                examing: examing,
                passed: passed,
                unarragedStudents: unarragedStudents,
                arrangedStudents: arrangedStudents,
                clazz: getCache("clazz")
            })
        }

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
                                {this.state.company}
                            </Typography>
                            <Typography type="body1" component="p">
                                {"已安排/已报名：" + this.state.arranged + "人次/" + this.state.enrolled + "人次"}
                            </Typography>
                            <Typography type="body1" component="p">
                                {"已通过/已培训：" + this.state.passed + "人次/" + this.state.examing + "人次"}
                            </Typography>
                        </Paper>
                        <Paper elevation={4} style={{ margin: 10 }}>
                            {/* <StudentCard>
                    </StudentCard> */}
                            <List subheader={<ListSubheader>待安排的学员</ListSubheader>}>
                                {this.state.unarragedStudents.map(value =>
                                    <ListItem dense button key={value}>
                                        <ListItemText primary={`Tishoy`} />
                                        <ListItemSecondaryAction>

                                        </ListItemSecondaryAction>
                                    </ListItem>,
                                )}
                            </List>
                        </Paper>
                    </div>
                    <div style={{ margin: 10, width: 800, float: "left" }}>
                        <Paper elevation={4}>

                            <List subheader={<ListSubheader>已安排的学员</ListSubheader>}>
                                {this.state.arrangedStudents.map(students =>
                                    <ListItem dense button key={students.id}>
                                        {/* <Avatar alt="Remy Sharp" src={remyImage} /> */}
                                        <ListItemText primary={students.name} />
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
                    <div style={{ margin: 10, width: 400, float: "left" }}>
                        <Paper elevation={4}>

                            <List subheader={<ListSubheader>企业所属地区正在开设班级的</ListSubheader>}>
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