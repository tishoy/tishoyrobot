import React, { Component } from 'react';

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
        </div>
    }

}

export default Enroll;