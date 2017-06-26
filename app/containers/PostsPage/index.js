import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PageTemeplate from 'components/PageTemeplate';
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
class PostsPage extends React.Component {
  render() {
    return (
      <PageTemeplate heading="Posts">
        <p>page conten</p>
      </PageTemeplate>
    );
  }
}

PostsPage.propTypes = {
};
export default connect()(PostsPage);
