import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import
import InputField from 'components/InputField';
import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import { SelectField } from 'redux-form-material-ui';
import ThumbnailBar from 'components/ThumbnailBar';
import { createStructuredSelector } from 'reselect';
import PostEditor from './PostEditor';
import ImageUploader from './ImageUploader';
import { selectPostData } from './selectors';
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
        name="title"
        type="text"
        component={InputField}
        label="Title"
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
        <ImageUploader imagesUploaded={this.props.imagesUploaded} />
        <ThumbnailBar images={this.props.images} imageDelete={this.props.imageDelete} />
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
  imagesUploaded: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
  imageDelete: PropTypes.func.isRequired,
};

PostForm = reduxForm({
  form: 'PostForm', // a unique identifier for this form
})(PostForm);

const mapStateToProps = createStructuredSelector({

}); // You have to connect() to any reducers that you wish to connect to yourself
PostForm = connect(null, null)(PostForm);

export default PostForm;
