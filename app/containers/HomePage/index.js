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
import UploadPicture from 'components/UploadPicture';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.sendData = this.sendData.bind(this);
    this.login = this.login.bind(this);
  }

  login(data) {
    this.props.onLogin(data);
  }

  render() {
    const { user } = this.props;
    console.log(user);
    return (
      <div>
        <UploadPicture />
      </div>
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
