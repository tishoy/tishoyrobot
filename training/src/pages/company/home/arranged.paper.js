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

import StudentCard from '../card.js';

import { getData } from '../../../utils/helpers.js';

const styleSheet = createStyleSheet('PaperSheet', theme => ({
  root: theme.mixins.gutters({
    magain: 10,
    paddingTop: 16,
    paddingBottom: 16,
  }),
}));

class Arranged extends Component {

  componentDidMount() {
    getData("http://localhost:3008/", "users/login", { name: "tishoy", aaa: 3 });
    console.log(12311);
  }

  render() {

    return (
      <div>
        <Paper elevation={4}>

          <List subheader={<ListSubheader>已安排的学员</ListSubheader>}>
            {[0, 1, 2, 3].map(value =>
              <ListItem dense button key={value}>
                {/* <Avatar alt="Remy Sharp" src={remyImage} /> */}
                <ListItemText primary={`Tishoy`} />
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


export default Arranged;
