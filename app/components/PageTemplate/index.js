import React from 'react';
import PropTypes from 'prop-types';
import Form from 'components/Form';
import Paper from 'material-ui/Paper';

const paperStyle = {
  padding: '2em',
};
/* eslint-disable react/prefer-stateless-function */
class PageTemplate extends React.Component {
  render() {
    return (
      <Form mainPage noTopMargin>
        <Paper style={paperStyle}>
          <h1>{this.props.heading}</h1>
          {React.Children.toArray(this.props.children)}
        </Paper>
      </Form>
    );
  }
}
/**
* @param {*} heading heading must be provided
 */

PageTemplate.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default PageTemplate;
