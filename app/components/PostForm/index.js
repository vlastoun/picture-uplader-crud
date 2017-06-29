import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import
import InputField from 'components/InputField';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostEditor from './PostEditor';
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-class-assign */
class PostForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const name = (
      <Field name="name" type="text" component={InputField} label="Name" fullWidth />
    );
    const description = (
      <Field
        name="description"
        type="text"
        component={InputField}
        label="Description"
        multiLine
        fullWidth
      />
    );
    return (
      <form>
        {name}
        {description}
        <PostEditor editorChanged={this.props.editorChanged} />
      </form>
    );
  }
}

PostForm.propTypes = {
  editorChanged: PropTypes.func.isRequired,
};

PostForm = reduxForm({
  form: 'PostForm', // a unique identifier for this form
})(PostForm);

PostForm = connect(null, null)(PostForm);

export default PostForm;

