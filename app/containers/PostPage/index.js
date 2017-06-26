import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PageTemplate from 'components/PageTemplate';
import PostForm from 'components/PostForm';
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
class PostPage extends React.Component {
  render() {
    return (
      <PageTemplate heading="Post">
        <PostForm />
      </PageTemplate>
    );
  }
}

PostPage.propTypes = {
};
export default connect(null, null)(PostPage);
