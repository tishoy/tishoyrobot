import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import NamePaper from './home/name.paper.js';


class EnrolledPage extends Component {
    state = {
    };



    render() {
        return (
            <div>
                <NamePaper />
            </div>
        )
    }
}

export default EnrolledPage;