// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import List, {
    ListItem, ListItemSecondaryAction, ListItemText,
    ListSubheader,
} from 'material-ui/List';
import Typography from 'material-ui/Typography';

import { getData } from '../../../utils/helpers.js';

const styleSheet = createStyleSheet('PaperSheet', theme => ({
    root: theme.mixins.gutters({
        magain: 10,
        paddingTop: 16,
        paddingBottom: 16,
    }),
}));

class Clazzes extends Component {

    state = {}

    componentDidMount() {
        this.getClassesData();
    }

    getClassesData() {
        var cb = (id, message, arg) => {
            console.log(id);
            console.log(message);
        }

        console.log(data);
    }

    render() {


        return (
            <div>
                <Paper elevation={4}>

                    <List subheader={<ListSubheader>企业所属地区正在开设班级的</ListSubheader>}>
                        {[0, 1, 2, 3].map(value =>
                            <ListItem dense button key={value}>
                                {/* <Avatar alt="Remy Sharp" src={remyImage} /> */}
                                <ListItemText primary={`班级 ${value + 1}`} />
                                <ListItemSecondaryAction>
                                    {/* <Checkbox
                  onClick={event => this.handleToggle(event, value)}
                  checked={this.state.checked.indexOf(value) !== -1}
                /> */}
                                </ListItemSecondaryAction>
                            </ListItem>,
                        )}
                    </List>


                </Paper>
            </div>
        );
    }



}

export default Clazzes;
