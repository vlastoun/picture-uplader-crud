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

import React from 'react';
import { FormattedMessage } from 'react-intl';
import CreateUserForm from 'components/CreateUserForm';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CREATE_USER } from './constants';
import messages from './messages';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.sendData = this.sendData.bind(this);
  }

  sendData(data) {
    console.log('pred poslanim', data.toJS());
    this.props.onSubmit(data);
  }

  render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <CreateUserForm sendData={this.sendData} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (data) => dispatch({ type: CREATE_USER, user: data }),
  };
}

const mapStateToProps = createStructuredSelector({
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
