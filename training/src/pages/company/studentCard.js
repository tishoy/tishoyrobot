// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardHeader, CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import { CARD_TYPE_COMMON, CARD_TYPE_INFO, CARD_TYPE_ENROLL, CARD_TYPE_ARRANGE, CARD_TYPE_EXAM, CARD_TYPE_UNARRANGE } from '../../enum';
import Lang from '../../language';

class ComCard extends Component {
  state = {
    type: ""
  }

  static propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    city: PropTypes.number.isRequired,
    action: PropTypes.func.isRequired
  };

  static defaultProps = {
    action: () => {

    }
  }

  buttonActions() {
    switch (this.state.type) {
      case CARD_TYPE_COMMON:
        return
        <CardActions>
        </CardActions>
      case CARD_TYPE_INFO:
        return <CardActions>
          <Button
            dense
            onClick={this.state.action}>
            {Lang[window.Lang].pages.company.card.modify}
          </Button>
        </CardActions>
      case CARD_TYPE_ENROLL:
        return <CardActions>
          <Button
            dense
            onClick={this.state.action}>
            {Lang[window.Lang].pages.company.card.enroll}
          </Button>
        </CardActions>
      case CARD_TYPE_ARRANGE:
        return <CardActions>
          <Button
            dense
            onClick={this.state.action}>
            {Lang[window.Lang].pages.company.card.agree}
          </Button>
          <Button
            dense
            onClick={this.state.action}>
            {Lang[window.Lang].pages.company.card.refuse}
          </Button>
        </CardActions>
      case CARD_TYPE_EXAM:
        return <CardActions>
          <Button
            dense
            onClick={this.state.action}>
            {Lang[window.Lang].pages.company.card.retry}
          </Button>
          <Button
            dense
            onClick={this.state.action}>
            {Lang[window.Lang].pages.company.card.giveup}
          </Button>
        </CardActions>
      case CARD_TYPE_UNARRANGE:
        return (
          <CardActions>
            <Button
              dense
              onClick={this.state.action}>
            </Button>
          </CardActions>
        )
      default:
        return {}
    }
  }

  render() {
    const {
      type,
      name,
      tel,
      email,
      level,
      city,
      action
    } = this.props;

    this.state.type = type;
    this.state.action = action;

    return (
      <div>
        <Card style={{ display: 'flex', }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <CardContent>
              <Typography type="body1">
                {name}
              </Typography>
              <Typography type="body1" component="h2">
                {tel}
              </Typography>
              <Typography type="body1">
                {email}
              </Typography>
              <Typography component="p">
                {level}<br />
                {city}
              </Typography>
            </CardContent>
          </div>
          <div>
            {this.buttonActions()}
          </div>
        </Card>
      </div>
    );
  }
}

export default ComCard;