/**
*
* CreateUserForm
*
*/
import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import
import React from 'react';
import InputField from 'components/InputField';
import Form from 'components/Form';
import Button from 'components/Button';
// import styled from 'styled-components';
/* eslint-disable react/prop-types, jsx-a11y/label-has-for */

class CreateUserForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { handleSubmit, pristine, submitting, reset, sendData } = this.props;
    return (
      <Form>
        <form onSubmit={handleSubmit(sendData)}>
          <Field name="user" type="text" component={InputField} label="User name" />
          <Field name="email" type="email" component={InputField} label="Email" />
          <Field name="password" type="password" component={InputField} label="Password" />
          <div>
            <Button type="submit" disabled={submitting}>Submit</Button>
            <Button type="button" disabled={pristine || submitting} onClick={reset} secondary>
              Clear Values
            </Button>
          </div>
        </form>
      </Form>
    );
  }
}

CreateUserForm.propTypes = {

};

export default reduxForm({
  form: 'createUserForm', // a unique identifier for this form
})(CreateUserForm);
