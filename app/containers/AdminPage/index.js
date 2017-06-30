import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';
import AdminAppBar from 'components/AdminAppBar';
import { USER_LOGOUT, TOGGLE_DRAWER, DRAWER_LINK_CLICKED, AUTHENTIFICATION_CHECK } from './constants';
import { makeSelectUser, getAuthState, getDrawerState, getActiveUrl } from './selectors';
/* eslint-disable react/prefer-stateless-function */
class AdminPage extends React.Component {
  componentWillMount() {
    this.props.authCheck();
  }
  render() {
    return (
      <div>
        {
          !this.props.authorized
          ? <h2>Loading..</h2>
          : <AdminAppBar
            logout={this.props.logout}
            toggleDrawer={this.props.toggleDrawer}
            drawerState={this.props.drawerState}
            activeUrl={this.props.activeUrl}
            clickedLink={this.props.clickedLink}
            /> // eslint-disable-line
        }
        {
          React.Children.toArray(this.props.children).length === 0
          ? <Link to="admin/post/1">test</Link>
          : React.Children.toArray(this.props.children)
        }
      </div>
    );
  }
}

AdminPage.propTypes = {
  logout: PropType.func.isRequired,
  redirect: PropType.func.isRequired, //eslint-disable-line
  authorized: PropType.bool.isRequired,
  toggleDrawer: PropType.func.isRequired,
  drawerState: PropType.bool.isRequired,
  activeUrl: PropType.string.isRequired,
  clickedLink: PropType.func.isRequired,
  children: PropType.node,
  authCheck: PropType.func.isRequired,
};

function mapDispatchToProps(dispatch) { // eslint-disable-line
  return {
    logout: () => dispatch({ type: USER_LOGOUT }),
    redirect: () => dispatch(push('/admin/login')),
    toggleDrawer: (state) => dispatch({ type: TOGGLE_DRAWER, state }),
    clickedLink: (url) => dispatch({ type: DRAWER_LINK_CLICKED, url }),
    authCheck: () => dispatch({ type: AUTHENTIFICATION_CHECK }),
  };
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  authorized: getAuthState(),
  drawerState: getDrawerState(),
  activeUrl: getActiveUrl(),
});
// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
