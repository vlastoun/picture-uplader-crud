import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PageTemplate from 'components/PageTemplate';
import { makeSelectUser } from './selectors';
import ChangePasswordForm from './ChangePasswordForm';

/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
class SettingsPage extends React.Component {
    constructor() {
      super();
      this.sendData = this.sendData.bind(this);
    }
  sendData(data) {
    console.log(data)
  }
  render() {
    return (
      <PageTemplate heading="User settings">
        <h2>User data</h2>
        <p>Username: {this.props.user.username}</p>
        <p>Email: {this.props.user.email}</p>
        <h2>Change password:</h2>
        <ChangePasswordForm sendData={this.sendData} />
      </PageTemplate >
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});
// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
