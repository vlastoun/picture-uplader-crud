/**
*
* CreateUserForm
*
*/
import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import
import React from 'react';
import InputField from 'components/InputField';
import Button from 'components/Button';
import Span from 'components/Span';
import validate from './validate';
// import styled from 'styled-components';
/* eslint-disable react/prop-types, jsx-a11y/label-has-for */

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
          <Button type="submit" disabled={submitting}>Submit</Button>
          <Button type="button" disabled={pristine || submitting} onClick={reset} secondary>
            Clear Values
          </Button>
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
