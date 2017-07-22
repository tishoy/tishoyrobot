import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import GridList from 'material-ui/Grid';

import NamePaper from './name.paper.js';
import UnarrangedPaper from './unarranged.paper.js';
import ArrangedPaper from './arranged.paper.js';
import ClassesPaper from './classes.paper.js';

class Home extends Component {

    state = {
        students: {}
    };

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div
                    style={{ paddingTop: 80, paddingLeft: 40, justifyContent: 'space-between' }}
                >
                    <div style={{ margin: 10, width: 400, float: "left" }}>
                        <NamePaper />
                        <UnarrangedPaper style={{ margin: 10 }} />
                    </div>
                    <div style={{ margin: 10, width: 800, float: "left" }}>
                        <ArrangedPaper />
                    </div>
                    <div style={{ margin: 10, width: 400, float: "left" }}>
                        <ClassesPaper />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;