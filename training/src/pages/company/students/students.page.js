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


import StudentCard from '../CompanyStudent';

import Lang from '../../../language';
import Code from '../../../code';
import { initCache, getData, getRouter, getCache } from '../../../utils/helpers';
import { INSERT_STUDENT, REMOVE_STUDENT, BASE_INFO, SELF_INFO, ADDEXP, DELEXP, DATA_TYPE_STUDENT, QUERY, CARD_TYPE_INFO } from '../../../enum';

import CommonAlert from '../../../components/CommonAlert';

const Style = {
    paper: { paddingTop: 80, paddingLeft: 40, display: 'flex', FlexDirection: 'row', justifyContent: 'spacebetween' }

}


class Students extends Component {

    state = {
        students: [],
        selected: {},
        showInfo: false,

        // 提示状态
        alertOpen: true,
        alertType: "notice",
        alertCode: Code.LOGIC_SUCCESS,
        alertContent: ""
    }

    componentDidMount() {
        window.currentPage = this;
        this.fresh()
    }

    fresh = () => {
        initCache(this.cacheToState);
    }

    cacheToState() {
        let students = getCache(DATA_TYPE_STUDENT);
        window.currentPage.setState({ students: students })
    }

    getStudents() {

    }

    newStudent(student) {
        var cb = (route, message, arg) => {
            if (message.code === Code.LOGIC_SUCCESS) {
                getCache(DATA_TYPE_STUDENT).push(student)
            }
        }
        getData(getRouter(INSERT_STUDENT), { session: sessionStorage.session, student: student }, cb, { student: student });
    }

    removeStudent(id) {
        var cb = (route, message, arg) => {
            if (message.code === Code.LOGIC_SUCCESS) {
                for (var i = 0; i < getCache(student).length; i++) {
                    if (getCache(DATA_TYPE_STUDENT)[i].id === student.id) {
                        getCache(DATA_TYPE_STUDENT).splice(i, 1);
                        break;
                    }
                }
            }
        }
        getData(getRouter(REMOVE_STUDENT), { session: sessionStorage.session, id: id }, cb, { id: id });
    }

    updateStudent(id, key, info) {
        var cb = (route, message, arg) => {
            if (message.code === Code.LOGIC_SUCCESS) {
                for (var i = 0; i < getCache(student).length; i++) {
                    if (getCache(DATA_TYPE_STUDENT)[i].id === arg.id) {
                        getCache(DATA_TYPE_STUDENT)[i][arg.key] = info;
                        break;
                    }
                }
            }
        }

        switch (key) {
            case BASE_INFO:
                getData(getRouter(BASE_INFO), { session: sessionStorage.session, id: id, info: info }, cb, { id: id, info: info, key: key });
                break;
            case SELF_INFO:
                getData(getRouter(SELF_INFO), { session: sessionStorage.session, id: id, info: info }, cb, { id: id, info: info, key: key });
                break;
            case ADDEXP:
                getData(getRouter(ADDEXP), { session: sessionStorage.session, id: id, info: info }, cb, { id: id, info: info, key: key });
                break;
            case DELEXP:
                getData(getRouter(DELEXP), { session: sessionStorage.session, id: id, info: info }, cb, { id: id, info: info, key: key });
                break;
        }
    }

    popUpNotice = (type, code, content) => {
        this.setState({ type: type, code: code, content: content, alertOpen: true });
    }

    render() {
        return (
            <div>
                <div
                    style={{ paddingTop: 80, paddingLeft: 40, justifyContent: 'space-between' }}
                >
                    <div style={{ margin: 10, width: 400, float: "left" }}>
                        <List subheader={<ListSubheader>{Lang[window.Lang].pages.company.students.list_title}</ListSubheader>}>
                            {this.state.students.map(student =>
                                <StudentCard
                                    type={CARD_TYPE_INFO}
                                    key={student.id}
                                    name={student.base_info.name}
                                    tel={student.base_info.tel}
                                    email={student.base_info.email}
                                    level={student.base_info.level}
                                    city={student.base_info.city}
                                    action={[() => {
                                        this.setState({
                                            showInfo: true,
                                            selected: student
                                        })
                                    }]}
                                >
                                </StudentCard>
                            )}
                        </List>
                    </div>
                    {this.state.showInfo === true ?
                        <Paper style={{ margin: 10, width: 800, float: "left" }} elevation={4}>
                            <div>
                                <Typography type="headline" component="h3">
                                    {Lang[window.Lang].pages.company.students.base_info}
                                </Typography>
                                <TextField
                                    id="name"
                                    placeholder={Lang[window.Lang].pages.company.students.name}
                                    defaultValue={this.state.selected.name}
                                />
                                <TextField
                                    id="tel"
                                    placeholder={Lang[window.Lang].pages.company.students.tel}
                                    defaultValue={this.state.selected.tel}
                                />
                                <TextField
                                    id="email"
                                    placeholder={Lang[window.Lang].pages.company.students.email}
                                    defaultValue={this.state.selected.email}
                                />
                                <TextField
                                    id="city"
                                    placeholder={Lang[window.Lang].pages.company.students.city}
                                    defaultValue={this.state.selected.city}
                                />
                                <TextField
                                    id="level"
                                    placeholder={Lang[window.Lang].pages.company.students.level.title}
                                    defaultValue={this.state.selected.level}
                                />

                                <Button color="primary" style={{ margin: 10 }}>
                                    {Lang[window.Lang].pages.main.certain_button}
                                </Button>
                            </div>
                            <div>
                                <Typography type="headline" component="h3">
                                    {Lang[window.Lang].pages.company.students.personal_info.title}
                                </Typography>


                                <Typography type="body1" component="p">
                                    {Lang[window.Lang].pages.company.students.personal_info.licence}
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
                                    {Lang[window.Lang].pages.main.certain_button}
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
                                    {Lang[window.Lang].pages.main.certain_button}
                                </Button>
                            </div>
                        </Paper> : <div />}

                </div>
            </div>
        )
    }
}

export default Students; 