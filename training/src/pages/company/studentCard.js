// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardHeader, CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import {
  CARD_TYPE_COMMON, CARD_TYPE_INFO, CARD_TYPE_ENROLL, CARD_TYPE_ARRANGE, CARD_TYPE_EXAM, CARD_TYPE_UNARRANGE,
  STATUS_AGREED_UNDO, STATUS_AGREED_AGREE, STATUS_AGREED_REFUSED
} from '../../enum';
import Lang from '../../language';

class ComCard extends Component {
  state = {
    type: "",
    status: 0,
    action: []
  }

  static propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    city: PropTypes.number.isRequired,
    action: PropTypes.array.isRequired,
    status: PropTypes.number.isRequired,
  };

  static defaultProps = {
    action: [],
    status: 0
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
            onClick={this.state.action[0]}>
            {Lang[window.Lang].pages.company.card.modify}
          </Button>
        </CardActions>
      case CARD_TYPE_ENROLL:
        return <CardActions>
          <Button
            dense
            onClick={this.state.action[0]}>
            {Lang[window.Lang].pages.company.card.enroll}
          </Button>
        </CardActions>
      case CARD_TYPE_ARRANGE:
        return <CardActions>
          {this.state.status === STATUS_AGREED_UNDO ?
            <div>
              <Button
                dense
                onClick={this.state.action[0]}>
                {Lang[window.Lang].pages.company.card.agree}
              </Button>
              <Button
                dense
                onClick={this.state.action[1]}>
                {Lang[window.Lang].pages.company.card.refuse}
              </Button>
            </div> : Lang[window.Lang].pages.company.card.status[this.state.status]}
        </CardActions>
      case CARD_TYPE_EXAM:
        return <CardActions>
          <Button
            dense
            onClick={this.state.action[0]}>
            {Lang[window.Lang].pages.company.card.retry}
          </Button>
          <Button
            dense
            onClick={this.state.action[1]}>
            {Lang[window.Lang].pages.company.card.giveup}
          </Button>
        </CardActions>
      case CARD_TYPE_UNARRANGE:
        return (
          <CardActions>
            <Button
              dense
              onClick={this.state.action[0]}>
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
      action,
      status
    } = this.props;

    this.state.type = type;
    this.state.status = status;
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
            {status}
          </div>
        </Card>
      </div>
    );
  }
}

export default ComCard;