import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import
import InputField from 'components/InputField';
import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import { SelectField } from 'redux-form-material-ui';
import PostEditor from './PostEditor';
const buttonStyle = {
  marginTop: '2em',
};
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-class-assign */
class PostForm extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { sendData, handleSubmit, submitting } = this.props;
    const name = (
      <Field
        name="name"
        type="text"
        component={InputField}
        label="Name"
        fullWidth
      />
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
   const listItems = this.props.categories.map((item) => { //eslint-disable-line
     return (
       <MenuItem value={item.id} primaryText={item.name} key={item.id} />
     );
   });

    const select = (
      <Field name="categoryId" component={SelectField} fullWidth floatingLabelText="Category" hintText="Category" >
        {listItems}
      </Field>
    );
    return (
      <form onSubmit={handleSubmit(sendData)}>
        {name}
        {description}
        {select}
        <PostEditor
          editorChanged={this.props.editorChanged}
          editorState={this.props.editorState}
        />
        <RaisedButton type="submit" disabled={submitting} fullWidth primary style={buttonStyle}>
          Submit
        </RaisedButton>
      </form>
    );
  }
}

PostForm.propTypes = {
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  sendData: PropTypes.func.isRequired,
  editorChanged: PropTypes.func.isRequired,
  editorState: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
};

PostForm = reduxForm({
  form: 'PostForm', // a unique identifier for this form
})(PostForm);

PostForm = connect(null, null)(PostForm);

export default PostForm;
