
/* eslint-disable */
import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostEditor from './PostEditor';

/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-class-assign */
class PostForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <PostEditor />
      </div>
    );
  }
}

// PostForm.propTypes = {

// };

// PostForm = reduxForm({
//   form: 'PostForm', // a unique identifier for this form
// })(PostForm);

// PostForm = connect(null, null)(PostForm);

export default PostForm;

