import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PageTemplate from 'components/PageTemplate';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-has-content*/
class PostsPage extends React.Component {
  render() {
    return (
      <PageTemplate heading="Posts">
        <FlatButton label={'New post?'} primary containerElement={<Link to="/admin/post" />} />
      </PageTemplate>
    );
  }
}

PostsPage.propTypes = {
};
export default connect()(PostsPage);
