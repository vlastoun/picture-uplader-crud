import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import InputField from 'components/InputField';
import Button from 'components/Button';
import validate from './validate';
import asyncValidate from './asyncValidate';
import { selectActiveCategory } from './selectors';
/* eslint-disable jsx-a11y/label-has-for */

class CategoriesForm extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { visibility: props.visibilityState };
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose() {
    this.setState({ visibility: false });
  }
  render() {
    const { sendData, handleSubmit, submitting, categoriesError, item } = this.props;

    const Form = (
      <form>
        <Field
          name="name"
          type="text"
          component={InputField}
          label="Category name"
        />
        <Field
          name="description"
          type="text"
          component={InputField}
          label="Description"
        />
        <div>
          <Button type="submit" disabled={submitting}>
            Submit
          </Button>
          <Button
            type="button"
            disabled={submitting}
            onClick={this.handleClose}
            secondary
          >
            Clear and close
          </Button>
        </div>
      </form>
    );
    return (
      <div>
        {this.state.visibility ? Form : null}
      </div>
    );
  }
}

CategoriesForm.propTypes = {};

/* eslint-disable no-class-assign */
CategoriesForm = reduxForm({
  form: `editForm`, // a unique identifier for this form
  validate,
  asyncValidate,
  asyncBlurFields: ['name'],
})(CategoriesForm);

const mapStateToProps = createStructuredSelector({
  initialValues: selectActiveCategory(),
});// You have to connect() to any reducers that you wish to connect to yourself
CategoriesForm = connect(mapStateToProps, null)(CategoriesForm);

export default CategoriesForm;
