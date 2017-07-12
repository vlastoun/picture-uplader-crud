import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DisplayPost from 'components/DisplayPost';
import ImgModal from 'components/ImgModal';
import { LOAD_DATA, SHOW_PICTURE, HIDE_MODAL } from './constants';
import { selectPictures, selectPost, modalState, selectPictureURL } from './selectors';

class Post extends React.Component {
  componentWillMount() {
    this.props.fetchData(this.props.params.slug);
  }
  render() {
    return (
      <div>
        <DisplayPost
          post={this.props.post.toJS()}
          pictures={this.props.pictures.toJS()}
          showPicture={this.props.showPicture}
        />
        <ImgModal
          hideModal={this.props.hideModal}
          modalState={this.props.modalState}
          pictureURL={this.props.pictureURL}
        />
      </div>
    );
  }
}

Post.propTypes = {
  fetchData: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  pictures: PropTypes.array.isRequired,
  modalState: PropTypes.bool.isRequired,
  showPicture: PropTypes.func.isRequired,
  pictureURL: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (postId) => dispatch({ type: LOAD_DATA, postId }),
    showPicture: (url) => dispatch({ type: SHOW_PICTURE, url }),
    hideModal: () => dispatch({ type: HIDE_MODAL }),
  };
}
const mapStateToProps = createStructuredSelector({
  pictures: selectPictures(),
  post: selectPost(),
  modalState: modalState(),
  pictureURL: selectPictureURL(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
