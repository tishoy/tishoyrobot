// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

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

class Base extends Component {
    render() {

        return (
            <div>
                <Grid container gutter={24}>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <Typography type="body1" component="p">
                                {企业名称}
                            </Typography>
                            <TextField>

                            </TextField>
                            <Typography type="body1" component="p">
                                {省市地区}
                            </Typography>
                            <TextField>

                            </TextField>
                            <Typography type="body1" component="p">
                                {一级资质}
                            </Typography>
                            <TextField>

                            </TextField>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <Typography type="body1" component="p">
                                {企业名称}
                            </Typography>
                            <TextField>

                            </TextField>
                            <Typography type="body1" component="p">
                                {省市地区}
                            </Typography>
                            <TextField>

                            </TextField>
                            <Typography type="body1" component="p">
                                {一级资质}
                            </Typography>
                            <TextField>

                            </TextField>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <Typography type="body1" component="p">
                                {企业名称}
                            </Typography>
                            <TextField>

                            </TextField>
                            <Typography type="body1" component="p">
                                {省市地区}
                            </Typography>
                            <TextField>

                            </TextField>
                            <Typography type="body1" component="p">
                                {一级资质}
                            </Typography>
                            <TextField>

                            </TextField>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <Typography type="body1" component="p">
                                {企业名称}
                            </Typography>
                            <TextField>

                            </TextField>
                            <Typography type="body1" component="p">
                                {省市地区}
                            </Typography>
                            <TextField>

                            </TextField>
                            <Typography type="body1" component="p">
                                {一级资质}
                            </Typography>
                            <TextField>

                            </TextField>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }



};

export default Base;
