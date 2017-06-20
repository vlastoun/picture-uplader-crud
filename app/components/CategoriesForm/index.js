
import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import
import React from 'react';
import PropTypes from 'prop-types';
import InputField from 'components/InputField';
import Button from 'components/Button';
import validate from './validate';
/* eslint-disable jsx-a11y/label-has-for */

class CategoriesForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      sendData,
      handleSubmit,
      submitting,
      categoriesError,
     } = this.props;

    const Form = (
      <form onSubmit={handleSubmit(sendData)}>
        <Field name="name" type="text" component={InputField} label="Category name" serverError={categoriesError.name} />
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
  visibilityState: PropTypes.bool.isRequired,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  sendData: PropTypes.func.isRequired,
  categoriesError: PropTypes.object,
};

export default reduxForm({
  form: 'CategoriesForm', // a unique identifier for this form
  validate,
})(CategoriesForm);
