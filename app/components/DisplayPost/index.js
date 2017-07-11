import React from 'react';
import PropTypes from 'prop-types';
import MarkdownParser from 'components/MarkdownParser';
import Form from 'components/Form';

/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
class DisplayPost extends React.Component {
  render() {
    const { title, body, description } = this.props.post;
    return (
      <Form noTopMargin mainPage>
        <h1>{title}</h1>
        <p>{description}</p>
        <MarkdownParser data={body} />
      </Form>
    );
  }
}

DisplayPost.propTypes = {
  post: PropTypes.object.isRequired,
};
export default DisplayPost;
