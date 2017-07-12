// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import List, {
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    ListSubheader,
} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';

import DeleteIcon from 'material-ui-icons/Delete';




const styleSheet = createStyleSheet('PaperSheet', theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
    }),
}));

function PaperSheet(props) {
    const classes = props.classes;
    return (
        <div>
            <Paper className={classes.root} elevation={4}>
                <Typography type="headline" component="h3">
                    {"待安排的学员"}
                </Typography>
                <List>
                    <ListItem button>

                        <ListItemText primary="Photos" secondary="Jan 9, 2016" />
                    </ListItem>
                    <ListItem button>

                        <ListItemText primary="Photos" secondary="Jan 9, 2016" />
                        <ListItemSecondaryAction>
                            <IconButton aria-label="Delete">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </Paper>
        </div>
    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(PaperSheet);
