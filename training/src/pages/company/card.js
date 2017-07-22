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
  
}));

class SimpleCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    city: PropTypes.number.isRequired
  };


  render() {
    const {
      name,
      tel,
      email,
      level,
      city
    } = this.props;

    return (
      <div>
        <Card>
          <CardContent>
            <Typography type="name" style={{
              marginBottom: 16,
              fontSize: 14,
              color: theme.palette.text.secondary,
            }}>
              {name}
            </Typography>
            <Typography type="tel" component="h2">
              {tel}
            </Typography>
            <Typography type="email" style={{
              marginBottom: 12,
              color: theme.palette.text.secondary,
            }}>
              email
            </Typography>
            <Typography component="p">
              level<br />
              city
            </Typography>
          </CardContent>
          <CardActions>
            <Button dense>修改</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default SimpleCard;