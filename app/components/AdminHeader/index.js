import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Right from './Right';

/* eslint-disable react/prefer-stateless-function */
class AdminHeader extends React.Component {
  render() {
    return (
      <Wrapper>
        <Right><button onClick={this.props.logout}>Logout</button></Right>
      </Wrapper>
    );
  }
}

AdminHeader.propTypes = {
  logout: PropTypes.func.isRequired,
};
export default AdminHeader;
