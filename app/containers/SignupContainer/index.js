import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { CREATE_USER } from './constants';
import { makeSelectUser } from './selectors';
/* eslint-disable no-console */
class SignupContainer extends React.Component {
  constructor(props) {
    super(props);
    this.sendData = this.sendData.bind(this);
  }

  sendData(data) {
    console.log('pred poslanim', data.toJS());
    this.props.onSubmit(data);
  }

  render() {
    return (
      <div>
        Sign up container
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (data) => dispatch({ type: CREATE_USER, user: data }),
  };
}

SignupContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});
// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
