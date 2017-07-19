import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import UnarrangedPaper from './unarranged.paper.js';
import ArrangedPaper from './arranged.paper.js';
import UnenrollPaper from './unenroll.paper.js';

const Style = {
    paper: { margin: 10, width: 400, float: "left" }
}


class EnrolledPage extends Component {
    state = {
    };



    render() {
        return (
            <div>
                <div style={Style.paper}>
                    <UnenrollPaper />
                </div>
                <div style={Style.paper}>
                    <UnarrangedPaper />
                </div>
                <div style={Style.paper}>
                    <ArrangedPaper />
                </div>
            </div>
        )
    }
}

export default EnrolledPage;