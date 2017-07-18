import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import GridList from 'material-ui/Grid';

// import NamePaper from './home/name.paper.js';
// import UnarrangedPaper from './home/unarranged.paper.js';
// import ArrangedPaper from './home/arranged.paper.js';
// import 

const Style = {
    paper: { margin: 10 }
}


class StudentsPage extends Component {
    state = {
    };



    render() {
        console.log("123");
        return (
            <div>
                <div
                    style={{ paddingTop: 80, paddingLeft: 40, display: 'flex', FlexDirection: 'row', justifyContent: 'space-between' }}
                >
                    {/* <div style={Style.paper}>
                        <NamePaper />
                    </div>
                    <div style={Style.paper}>
                        <NamePaper />
                    </div>
                    <div style={Style.paper}>
                        <NamePaper />
                    </div>
                    <div style={Style.paper}>
                        <NamePaper />
                    </div>
                    <div style={Style.paper}>
                        <NamePaper />
                        <UnarrangedPaper />
                        <UnarrangedPaper />
                        <UnarrangedPaper />
                    </div> */}

                    {/*<NamePaper />*/}
                    {/*<UnarrangedPaper />*/}
                </div>
            </div>
        )
    }
}

export default StudentsPage;