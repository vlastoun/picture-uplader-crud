/**
*
* CreateUserForm
*
*/
import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import
import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import InputField from 'components/InputField';
import Form from 'components/Form';
import RaisedButton from 'material-ui/RaisedButton';
import asyncValidate from './asyncValidate';
import validate from './validate';
// import styled from 'styled-components';
/* eslint-disable react/prop-types, jsx-a11y/label-has-for */
const style = {
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const buttonStyle = {
  margin: '0.5em',
  marginTop: '2em',
};

class CreateUserForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
      reset,
      sendData,
      createUserError } = this.props;

    return (
      <Form>
        <Paper style={style}>
          <h1>Register</h1>
          <form onSubmit={handleSubmit(sendData)}>
            <Field name="username" type="text" component={InputField} label="User name" serverError={createUserError.username} />
            <Field name="email" type="email" component={InputField} label="Email" serverError={createUserError.email} />
            <Field name="password" type="password" component={InputField} label="Password" serverError={createUserError.password} />
            <Field name="passwordConfirm" type="password" component={InputField} label="Password confirmation" />
            <div>
              <RaisedButton type="submit" disabled={submitting} style={buttonStyle} primary>Submit</RaisedButton>
              <RaisedButton type="button" disabled={pristine || submitting} onClick={reset} style={buttonStyle}>
                Clear
              </RaisedButton>
            </div>
          </form>
        </Paper>
      </Form>
    );
  }
}

CreateUserForm.propTypes = {
  createUserError: PropTypes.object,
};

export default reduxForm({
  form: 'createUserForm', // a unique identifier for this form
  validate,
  asyncValidate,
  asyncBlurFields: ['username', 'email'],
})(CreateUserForm);
