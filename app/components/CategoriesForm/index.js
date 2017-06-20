/**
*
* CreateUserForm
*
*/
import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import
import React from 'react';
import PropTypes from 'prop-types';
import InputField from 'components/InputField';
import Button from 'components/Button';
// import styled from 'styled-components';
/* eslint-disable react/prop-types, jsx-a11y/label-has-for */

class CategoriesForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      submitting,
     } = this.props;

    const Form = (
      <form>
        <Field name="title" type="text" component={InputField} label="Title" />
        <Field name="description" type="text" component={InputField} label="Description" />
        <div>
          <Button type="submit" disabled={submitting}>
            Submit
          </Button>
          <Button type="button" disabled={submitting} onClick={this.props.close} secondary>
            Clear and close
          </Button>
        </div>
      </form>
    );

    return (
      <div>
        {
        this.props.visibilityState
         ? Form
         : null
        }
      </div>
    );
  }
}

CategoriesForm.propTypes = {
  close: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'CategoriesForm', // a unique identifier for this form
})(CategoriesForm);
