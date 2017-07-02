import React from 'react';
import PropTypes from 'prop-types';
import PostsList from 'components/PostsList';
import { connect } from 'react-redux';
import PageTemplate from 'components/PageTemplate';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import ConfirmationModal from 'components/ConfirmationModal';
import { createStructuredSelector } from 'reselect';
import {
  FETCH_POSTS_REQUESTED,
  EDIT_REQUESTED,
  DELETE_REQIESTED,
  DELETE_DECLINED,
  DELETE_CONFIRMED,
} from './constants';
import { selectPosts, eraseModalState, selectPostToDelete } from './selectors';
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-has-content*/
class PostsPage extends React.Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <PageTemplate heading="Posts">
        {this.props.eraseModal &&
        <ConfirmationModal
          closeModal={this.props.deleteDeclined}
          showDialog={this.props.eraseModal}
          title="Delete Post"
          text="Are you sure to erase"
          id={this.props.postToDelete.id}
          name={this.props.postToDelete.title}
          action={this.props.deleteConfirmed}
        />}
        <FlatButton
          label={'New post?'}
          primary
          containerElement={<Link to="/admin/post" />}
        />
        <PostsList
          posts={this.props.posts}
          edit={this.props.edit}
          delete={this.props.delete}
        />
      </PageTemplate>
    );
  }
}

PostsPage.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  edit: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
  deleteDeclined: PropTypes.func.isRequired,
  eraseModal: PropTypes.bool.isRequired,
  postToDelete: PropTypes.object.isRequired,
  deleteConfirmed: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch({ type: FETCH_POSTS_REQUESTED }),
    edit: (id) => dispatch({ type: EDIT_REQUESTED, id }),
    delete: (id, title) => dispatch({ type: DELETE_REQIESTED, post: { id, title } }),
    deleteDeclined: () => dispatch({ type: DELETE_DECLINED }),
    deleteConfirmed: (id) => dispatch({ type: DELETE_CONFIRMED, id }),
  };
}
const mapStateToProps = createStructuredSelector({
  posts: selectPosts(),
  eraseModal: eraseModalState(),
  postToDelete: selectPostToDelete(),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
