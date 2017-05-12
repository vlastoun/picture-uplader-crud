/**
*
* CreateUserForm
*
*/
import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import
import React from 'react';
import InputField from 'components/InputField';
// import styled from 'styled-components';
/* eslint-disable react/prop-types, jsx-a11y/label-has-for */

class CreateUserForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { handleSubmit, pristine, submitting, reset, sendData } = this.props;
    return (
      <form onSubmit={handleSubmit(sendData)}>
        <Field name="user" type="text" component={InputField} label="User name" />
        <Field name="email" type="email" component={InputField} label="Email" />
        <Field name="password" type="password" component={InputField} label="Password" />
        <div>
          <button type="submit" disabled={submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    );
  }
}

CreateUserForm.propTypes = {

};

export default reduxForm({
  form: 'createUserForm', // a unique identifier for this form
})(CreateUserForm);
