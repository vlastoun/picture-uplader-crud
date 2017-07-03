import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PageTemplate from 'components/PageTemplate';
import PostForm from 'components/PostForm';
import { createStructuredSelector } from 'reselect';
import {
  FETCH_POST_REQUESTED,
  EDITOR_CHANGED,
  EDIT_POST_REQUESTED,
  IMAGE_UPLOAD_FINISHED,
  IMAGE_DELETE,
  OLD_IMAGE_DEL_REQ,
  CLEAR_VALUES_REQUESTED,
} from './constants';
import {
  selectPostData,
  selectCategories,
  selectImages,
  loadingState,
  selectOldImages,
  selectEditorState,
  imagesToDelete,
} from './selectors';

class EditPostPage extends React.Component {
  constructor(props) {
    super(props);
    this.sendData = this.sendData.bind(this);
    this.state = {
      editorState: null,
      postForm: undefined,
    };
  }
  componentWillMount() {
    this.props.fetchData(this.props.params.slug);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.postData !== this.props.postData) {
      const data = JSON.parse(nextProps.postData.body);
      this.setState({ editorState: data });
      this.props.editorChanged(data);
      this.setState({ postForm: nextProps.postData });
    }
  }
  sendData(data) {
    this.props.editPostRequest(data.toJS(), this.props.editorState, this.props.imagesToDelete, this.props.images);
  }
  render() {
    const { loading } = this.props;
    const localLoading = loading.toJS();
    return (
      <PageTemplate heading="Edit post">
        {!localLoading.categories &&
          !localLoading.images &&
          !localLoading.postData
          ? <PostForm
            initialValues={this.state.postForm}
            editorChanged={this.props.editorChanged}
            editorState={this.state.editorState}
            sendData={this.sendData}
            categories={this.props.categories}
            imagesUploaded={this.props.imagesUploaded}
            images={this.props.images}
            imageDelete={this.props.imageDelete}
            oldImages={this.props.oldImages}
            oldImagesDelete={this.props.oldImagesDelete}
          />
          : <h1>Loading...</h1>}
      </PageTemplate>
    );
  }
}

EditPostPage.propTypes = {
  fetchData: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  editorChanged: PropTypes.func.isRequired,
  editPostRequest: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  imagesUploaded: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
  imageDelete: PropTypes.func.isRequired,
  oldImages: PropTypes.array,
  oldImagesDelete: PropTypes.func.isRequired,
  postData: PropTypes.object.isRequired,
  loading: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (postId) => dispatch({ type: FETCH_POST_REQUESTED, postId }),
    editorChanged: (data) => dispatch({ type: EDITOR_CHANGED, content: data }),
    editPostRequest: (data, editorState, imagesToDelete, images) =>
      dispatch({ type: EDIT_POST_REQUESTED, content: { data, editorState, imagesToDelete, images } }),
    imagesUploaded: (images) => dispatch({ type: IMAGE_UPLOAD_FINISHED, images }),
    imageDelete: (id) => dispatch({ type: IMAGE_DELETE, id }),
    oldImagesDelete: (id) => dispatch({ type: OLD_IMAGE_DEL_REQ, id }),
    clearValues: () => dispatch({ type: CLEAR_VALUES_REQUESTED }),
  };
}
const mapStateToProps = createStructuredSelector({
  postData: selectPostData(),
  categories: selectCategories(),
  images: selectImages(),
  oldImages: selectOldImages(),
  loading: loadingState(),
  editorState: selectEditorState(),
  imagesToDelete: imagesToDelete(),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);
