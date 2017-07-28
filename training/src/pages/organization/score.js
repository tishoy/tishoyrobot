import React, { Component } from 'react';

class Score extends Component {
    state = {}

    componentDidMount() {
        window.currentPage = this;
        this.fresh()
    }

    fresh = () => {
    }


    render() {
        return <div>
        </div>
    }

}

export default Score;