/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */
/* eslint-disable react/prop-types, jsx-a11y/label-has-for */
/* eslint-disable import/first */
/* eslint-disable no-console */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import CreateUserForm from 'components/CreateUserForm';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import LoginForm from 'components/LoginForm';
import { CREATE_USER, LOGIN_USER } from './constants';
import messages from './messages';
import { makeSelectUser } from './selectors';
import UploadPicture from 'components/UploadPicture';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.sendData = this.sendData.bind(this);
    this.login = this.login.bind(this);
  }

  sendData(data) {
    console.log('pred poslanim', data.toJS());
    this.props.onSubmit(data);
  }

  login(data) {
    this.props.onLogin(data);
  }

  render() {
    const { user } = this.props;
    console.log(user);
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <CreateUserForm sendData={this.sendData} />
        LOGIN:
        <LoginForm sendData={this.login} />
        {user && <span>{user.id}</span>}
        <span>Upload picture</span>
        <UploadPicture />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (data) => dispatch({ type: CREATE_USER, user: data }),
    onLogin: (data) => dispatch({ type: LOGIN_USER, user: data }),
  };
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
