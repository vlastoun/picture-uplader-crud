/**
*
* CreateUserForm
*
*/
import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import
import React from 'react';
import InputField from 'components/InputField';
import RaisedButton from 'material-ui/RaisedButton';
import Span from 'components/Span';
import validate from './validate';
// import styled from 'styled-components';
/* eslint-disable react/prop-types, jsx-a11y/label-has-for */
const style = {
  margin: 12,
};

class LoginForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { sendData, handleSubmit, pristine, submitting, reset } = this.props;
    return (
      <form onSubmit={handleSubmit(sendData)}>
        <Field name="email" type="email" component={InputField} label="Email" />
        <Field name="password" type="password" component={InputField} label="Password" />
        <div>
          {
            this.props.loginError
              ? <Span>{this.props.loginError}</Span>
              : null
          }
        </div>
        <div>
          <RaisedButton type="submit" disabled={submitting} style={style} primary >Submit</RaisedButton>
          <RaisedButton type="button" disabled={pristine || submitting} onClick={reset} style={style}>
            Clear
          </RaisedButton>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {

};

export default reduxForm({
  form: 'loginForm', // a unique identifier for this form
  validate,
})(LoginForm);
