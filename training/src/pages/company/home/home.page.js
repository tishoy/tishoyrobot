import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import GridList from 'material-ui/Grid';

import NamePaper from './name.paper.js';
import UnarrangedPaper from './unarranged.paper.js';
import ArrangedPaper from './arranged.paper.js';
import ClassesPaper from './classes.paper.js';

const Style = {
    paper: { margin: 10, width: 400, float: "left" }
}


class HomePage extends Component {
    state = {
    };



    render() {
        return (
            <div>
                <div
                    style={{ paddingTop: 80, paddingLeft: 40,  justifyContent: 'space-between' }}
                >
                    <div style={Style.paper}>
                        <NamePaper />
                        <UnarrangedPaper />
                    </div>
                    <div style={Style.paper}>
                        <ArrangedPaper />
                    </div>
                    <div style={Style.paper}>
                        <ClassesPaper />
                    </div>

                    {/*<NamePaper />*/}
                    {/*<UnarrangedPaper />*/}
                </div>
            </div>
        )
    }
}

export default HomePage;