import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import GridList from 'material-ui/Grid';

import ExamingPaper from './examing.paper.js';
import PassedPaper from './passed.paper.js';
import UnpassPaper from './unpass.paper.js';
// import 

const Style = {
    paper: { margin: 10 }
}


class Exams extends Component {
    state = {
    };



    render() {
        return (
            <div>
                <div
                    style={{ paddingTop: "80px", paddingLeft: 40, display: 'flex', FlexDirection: 'row', justifyContent: 'space-between' }}
                >

                    <div style={Style.paper}>
                        <ExamingPaper />
                    </div>
                    <div style={Style.paper}>
                        <PassedPaper />
                    </div>
                    <div style={Style.paper}>
                        <UnpassPaper />
                    </div>
                </div>
            </div>
        )
    }
}

export default Exams;