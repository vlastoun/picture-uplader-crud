import React from 'react';
import PropTypes from 'prop-types';
import PostsList from 'components/PostsList';
import { connect } from 'react-redux';
import PageTemplate from 'components/PageTemplate';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { FETCH_POSTS_REQUESTED } from './constants';
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
        <FlatButton label={'New post?'} primary containerElement={<Link to="/admin/post" />} />
        <PostsList />
      </PageTemplate>
    );
  }
}

PostsPage.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch({ type: FETCH_POSTS_REQUESTED }),
  };
}
const mapStateToProps = createStructuredSelector({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
