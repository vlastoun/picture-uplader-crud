import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import LoginForm from 'components/LoginForm';
import Form from 'components/Form';
import { makeSelectError } from './selectors';
import { USER_LOGIN, RESET_FIELDS } from './constants';

class LoginContainer extends React.Component { // eslint-disable-line
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
        <LoginForm
          sendData={this.sendData}
          loginError={this.props.error}
          resetError={this.props.resetError}
        />
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
