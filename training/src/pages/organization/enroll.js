import React, { Component } from 'react';
import List, {
    ListItem, ListItemSecondaryAction, ListItemText,
    ListSubheader,
} from 'material-ui/List';


import StudentCard from './OrganizationStudent';

import CommonAlert from '../../components/CommonAlert';

class Enroll extends Component {
    state = {
        // 提示状态
        alertOpen: true,
        alertType: "notice",
        alertCode: Code.LOGIC_SUCCESS,
        alertContent: "登录成功"
    }

    componentDidMount() {
        window.currentPage = this;
        this.fresh()
    }

    fresh = () => {
    }

    popUpNotice = (type, code, content) => {
        this.setState({ type: type, code: code, content: content, alertOpen: true });
    }


    render() {
        return <div>
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
            <CommonAlert
                show={this.state.alertOpen}
                type={this.state.alertType}
                code={this.state.alertCode}
                content={this.state.alertContent}
                action={this.state.alertAction}
            >
            </CommonAlert>
        </div>
    }

}

export default Enroll;