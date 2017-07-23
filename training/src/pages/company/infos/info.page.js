// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Drawer from 'material-ui/Drawer';
import TextField from 'material-ui/TextField';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';

import Base from './base.paper';
import Finance from './finance.paper';
import Express from './express.paper';
import Admin from './admin.paper';

const styleSheet = createStyleSheet('PaperSheet', theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
    }),
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

class Info extends Component {

    state = {
        open: true
    }

    render() {

        return (
            <div>
                {/* <Drawer
                    open={this.state.open}
                    onRequestClose={this.handleLeftClose}
                    onClick={this.handleLeftClose}
                > */}

                {/* </Drawer> */}

                <div style={{ paddingTop: 80, paddingLeft: 40, justifyContent: 'space-between' }}>
                    <Grid container gutter={27}>
                        <Grid item xs={3} sm={3}>
                            <List style={{
                            }} disablePadding>
                                <div>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <InboxIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Inbox" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <StarIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Starred" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <SendIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Send mail" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <DraftsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Drafts" />
                                    </ListItem>
                                </div>
                            </List>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Base />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Finance />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Express />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Admin />
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }



};

export default Info;
