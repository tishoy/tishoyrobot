import React, { Component } from 'react';
// import PropTypes from 'proptypes';
// import { withStyles, createStyleSheet } from 'materialui/styles';

import Paper from 'material-ui/Paper';
// import GridList from 'materialui/Grid';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import List, {
    ListItem, ListItemSecondaryAction, ListItemText,
    ListSubheader,
} from 'material-ui/List';


import StudentCard from '../card';

import Lang from '../../../language';
import { getData, getRouter, getCache } from '../../../utils/helpers';
import { INSERT_STUDENT, REMOVE_STUDENT, BASE_INFO, SELF_INFO, ADDEXP, DELEXP, DATA_TYPE_STUDENT, QUERY } from '../../../enum';



const Style = {
    paper: { paddingTop: 80, paddingLeft: 40, display: 'flex', FlexDirection: 'row', justifyContent: 'spacebetween' }

}


class Students extends Component {

    state = {
        students: [],
        selected: {}
    }

    componentDidMount() {
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
                    console.log(window.CacheData);
                    arg.self.cacheToState();


                    // window.
                    // this.context.router.push("/company/home");
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
        this.setState({ students: students })


    }


    getStudents() {

    }

    newStudent(student) {
        var cb = (route, message, arg) => {
            if (message.code === 0) {
                getCache(student).push(student)

            }
        }
        getData(getRouter(IN))
    }

    removeStudent(id) {
        for (var i = 0; i < getCache(student).length; i++) {
            if (getCache(student)[i].id === student.id) {
                getCache(student).splice(i, 1);
                break;
            }
        }
    }

    updateStudent(id, key, info) {
        for (var i = 0; i < getCache(student).length; i++) {
            if (getCache(student)[i].id === id) {
                getCache(student)[i].key = info;
                break;
            }
        }
    }

    render() {
        return (
            <div>
                <div
                    style={{ paddingTop: 80, paddingLeft: 40, justifyContent: 'space-between' }}
                >
                    <div style={{ margin: 10, width: 400, float: "left" }}>
                        <List subheader={<ListSubheader>{Lang[window.Lang].pages.company.home.unarranged_title}</ListSubheader>}>
                            {this.state.students.map(student =>
                                <StudentCard
                                    name={student.base_info.name}
                                    tel={student.base_info.tel}
                                    email={student.base_info.email}
                                    level={student.base_info.level}
                                    city={student.base_info.city}>
                                </StudentCard>
                            )}
                        </List>
                    </div>
                    <Paper style={{ margin: 10, width: 800, float: "left" }} elevation={4}>
                        <div>
                            <Typography type="headline" component="h3">
                                {"基本信息"}
                            </Typography>
                            <Typography type="body1" component="p">
                                {"姓名"}
                            </Typography>
                            <TextField>

                            </TextField>
                            <Typography type="body1" component="p">
                                {"电话"}
                            </Typography>
                            <TextField>

                            </TextField>
                            <Typography type="body1" component="p">
                                {"电子邮件"}
                            </Typography>
                            <TextField>

                            </TextField>

                            <Typography type="body1" component="p">
                                {"地区"}
                            </Typography>
                            <TextField>

                            </TextField>

                            <Typography type="body1" component="p">
                                {"级别"}
                            </Typography>

                            <TextField>

                            </TextField>
                            <Button color="primary" style={{ margin: 10 }}>
                                Primary
                            </Button>
                        </div>
                        <div>
                            <Typography type="headline" component="h3">
                                {"个人信息"}
                            </Typography>


                            <Typography type="body1" component="p">
                                {"身份证号"}
                            </Typography>
                            <TextField>

                            </TextField>

                            <Typography type="body1" component="p">
                                {"学历"}
                            </Typography>
                            <TextField>

                            </TextField>

                            <Typography type="body1" component="p">
                                {"从业时间"}
                            </Typography>
                            <TextField>

                            </TextField>

                            <Typography type="body1" component="p">
                                {"累计项目总金额"}
                            </Typography>
                            <TextField>

                            </TextField>

                            <Typography type="body1" component="p">
                                {"累计项目软件服务金额"}
                            </Typography>
                            <TextField>

                            </TextField>
                            <Button color="primary" style={{ margin: 10 }}>
                                Primary
                            </Button>
                        </div>
                        <div>

                            <Typography type="headline" component="h3">
                                {"项目经历"}
                            </Typography>
                            <Typography type="body1" component="p">
                                {"项目名称"}
                            </Typography>
                            <TextField>

                            </TextField>
                            <Typography type="body1" component="p">
                                {"项目时间"}
                            </Typography>
                            <TextField>

                            </TextField>
                            <Typography type="body1" component="p">
                                {"担任角色"}
                            </Typography>
                            <TextField>

                            </TextField>
                            <Typography type="body1" component="p">
                                {"项目总额"}
                            </Typography>
                            <TextField>

                            </TextField>
                            <Typography type="body1" component="p">
                                {"软件和IT服务金额"}
                            </Typography>
                            <TextField>

                            </TextField>
                            <Button color="primary" style={{ margin: 10 }}>
                                Primary
                            </Button>
                        </div>
                    </Paper>

                    {/*<NamePaper />*/}
                    {/*<UnarrangedPaper />*/}
                </div>
            </div>
        )
    }
}

export default Students; 