import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PageTemplate from 'components/PageTemplate';
import PostForm from 'components/PostForm';
import { EDITOR_CHANGED } from './constants';
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
class PostPage extends React.Component {
  render() {
    return (
      <PageTemplate heading="Post">
        <PostForm editorChanged={this.props.editorChanged} />
      </PageTemplate>
    );
  }
}

PostPage.propTypes = {
  editorChanged: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    editorChanged: (data) => dispatch({ type: EDITOR_CHANGED, content: data }),
  };
}

export default connect(null, mapDispatchToProps)(PostPage);
