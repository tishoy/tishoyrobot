// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import List, {
    ListItem, ListItemSecondaryAction, ListItemText,
    ListSubheader,
} from 'material-ui/List';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet('PaperSheet', theme => ({
    root: theme.mixins.gutters({
        magain: 10,
        paddingTop: 16,
        paddingBottom: 16,
    }),
}));

function PaperSheet(props) {
    const classes = props.classes;
    return (
        <div>
            <Paper className={classes.root} elevation={4}>

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

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(PaperSheet);
