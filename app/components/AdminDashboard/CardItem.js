import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle } from 'material-ui/Card';

import { Link } from 'react-router';
import styled from 'styled-components';

const P = styled.div`
  float: right;
`;

const cardStyle = {
  marginTop: '1em',
  marginBottom: '1em',
};
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-boolean-value */
class CardItem extends React.Component {
  constructor() {
    super();
    this.state = { edit: false, shadow: 1 };
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }
  onMouseOver = () => { this.setState({ shadow: 3 }); }
  onMouseOut = () => { this.setState({ shadow: 1 }); }
  render() {
    return (
      <Link to={this.props.link}>
        <Card
          style={cardStyle}
          zDepth={this.state.shadow}
          onMouseOver={this.onMouseOver}
          onFocus={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          onBlur={this.onMouseOut}
        >
          <CardTitle>
            {this.props.text}
            <P>{this.props.count}</P>
          </CardTitle>
        </Card>
      </Link>
    );
  }
}

CardItem.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  count: PropTypes.number,
};
export default CardItem;
