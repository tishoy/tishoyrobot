// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet('SimpleCard', theme => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
}));

function SimpleCard(props) {

  console.log(props);

  const classes = props.classes;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card>
        <CardContent>
          <Typography type="name" className={classes.title}>
            太帅
          </Typography>
          <Typography type="tel" component="h2">
            13845773125
          </Typography>
          <Typography type="email" className={classes.pos}>
            182161673@qq.com
          </Typography>
          <Typography component="p">
            中级<br />
            {'"北京"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense>修改</Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(SimpleCard);