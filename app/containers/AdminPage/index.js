import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectUser, getAuthState } from './selectors';
/* eslint-disable react/prefer-stateless-function */
class AdminPage extends React.Component {
  componentWillMount() {

  }

  render() {
    return (
      <div>
        <h1>TEST</h1>
      </div>
    );
  }
}

AdminPage.propTypes = {

};

function mapDispatchToProps(dispatch) { // eslint-disable-line
  return {

  };
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  authorized: getAuthState(),
});
// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
