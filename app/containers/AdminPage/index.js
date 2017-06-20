import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';
import AdminDashboard from 'components/AdminDashboard';
import { USER_LOGOUT } from './constants';
import { makeSelectUser, getAuthState } from './selectors';
/* eslint-disable react/prefer-stateless-function */
class AdminPage extends React.Component {
  componentWillMount() {
    if (!this.props.authorized) {
      this.props.redirect();
    }
  }
  render() {
    return (
      <div>
        {
          !this.props.authorized
          ? <h2>UNAUTORIZED</h2>
          : <AdminDashboard
            logout={this.props.logout}
            /> // eslint-disable-line
        }
      </div>
    );
  }
}

AdminPage.propTypes = {
  logout: PropType.func.isRequired,
  redirect: PropType.func.isRequired,
  authorized: PropType.bool.isRequired,
};

function mapDispatchToProps(dispatch) { // eslint-disable-line
  return {
    logout: () => dispatch({ type: USER_LOGOUT }),
    redirect: () => dispatch(push('/admin/login')),
  };
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  authorized: getAuthState(),
});
// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
