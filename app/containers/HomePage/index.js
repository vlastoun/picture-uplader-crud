/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */
/* eslint-disable react/prop-types, jsx-a11y/label-has-for */
/* eslint-disable import/first */
/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router';
class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function


  render() {
    return (
      <Link to="/admin">....Admin page</Link>
    );
  }
}

function mapDispatchToProps(dispatch) { // eslint-disable-line
  return {

  };
}

const mapStateToProps = createStructuredSelector({

});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
