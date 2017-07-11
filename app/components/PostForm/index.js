import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import
import InputField from 'components/InputField';
import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import { SelectField } from 'redux-form-material-ui';
import ThumbnailBar from 'components/ThumbnailBar';
import MarkdownParser from 'components/MarkdownParser';
import ImageUploader from './ImageUploader';
import validate from './validate';
const buttonStyle = {
  marginTop: '2em',
};

class PostForm extends React.Component {
  constructor() {
    super();
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }
  handleEditorChange(event) {
    this.props.editorChanged(event.target.value);
  }
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
    const date = (
      <Field
        name="date"
        type="text"
        component={InputField}
        label="Date"
        multiLine
        fullWidth
      />
    );
    const body = (
      <Field
        name="body"
        type="text"
        component={InputField}
        label="Body editor"
        multiLine
        fullWidth
        onChange={this.handleEditorChange}
      />
    );
    const mainimg = (
      <Field
        name="mainimg"
        type="text"
        component={InputField}
        label="Main image"
        multiLine
        fullWidth
        onChange={this.handleEditorChange}
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
      <div>
        <form onSubmit={handleSubmit(sendData)}>
          {name}
          {date}
          {description}
          {select}
          {mainimg}
          <div>
            {body}
            <MarkdownParser data={this.props.editorState} />
          </div>
          <ImageUploader imagesUploaded={this.props.imagesUploaded} />
          <ThumbnailBar images={this.props.images} imageDelete={this.props.imageDelete} />
          {this.props.oldImages && <ThumbnailBar images={this.props.oldImages} imageDelete={this.props.oldImagesDelete} />}
          <RaisedButton type="submit" disabled={submitting} fullWidth primary style={buttonStyle}>
            Save and exit
          </RaisedButton>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  sendData: PropTypes.func.isRequired,
  editorChanged: PropTypes.func.isRequired,
  editorState: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  imagesUploaded: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
  imageDelete: PropTypes.func.isRequired,
  oldImages: PropTypes.array,
  oldImagesDelete: PropTypes.func,
};
/* eslint-disable no-class-assign */
PostForm = reduxForm({
  form: 'PostForm', // a unique identifier for this form
  validate,
})(PostForm);

PostForm = connect(null, null)(PostForm);

export default PostForm;
