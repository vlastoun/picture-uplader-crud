import React from 'react';
import PropTypes from 'prop-types';
import AdminHeader from 'components/AdminHeader';

/* eslint-disable react/prefer-stateless-function */
class DashBoard extends React.Component {
  render() {
    return (
      <div>
        <AdminHeader logout={this.props.logout} />
      </div>
    );
  }
}
DashBoard.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default DashBoard;
