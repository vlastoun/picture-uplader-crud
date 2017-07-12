import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import LoginForm from 'components/LoginForm';
import Form from 'components/Form';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import { makeSelectError } from './selectors';
import { USER_LOGIN, RESET_FIELDS } from './constants';
const style = {
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
};
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/anchor-has-content */
class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.sendData = this.sendData.bind(this);
  }

  sendData(data) {
    this.props.onLogin(data);
  }

  render() {
    return (
      <Form>
        <Paper style={style}>
          <h1>Login</h1>
          <LoginForm
            sendData={this.sendData}
            loginError={this.props.error}
            resetError={this.props.resetError}
          />
          <FlatButton label={'Do not have an account?'} fullWidth primary containerElement={<Link to="/admin/signup" />} />
        </Paper>
      </Form>
    );
  }
}

LoginContainer.propTypes = {
  onLogin: PropTypes.func.isRequired,
  error: PropTypes.string,
  resetError: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    onLogin: (data) => dispatch({ type: USER_LOGIN, user: data }),
    resetError: () => dispatch({ type: RESET_FIELDS }),
  };
}

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
