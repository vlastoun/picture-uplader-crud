
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import AppBar from 'components/AppBar';
import Form from 'components/Form';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <AppBar />
        <Form noTopMargin mainPage>
          {React.Children.toArray(this.props.children).length === 0
          ? <div>
            <h1>Vítejte</h1>
          </div>
          : React.Children.toArray(this.props.children)}
        </Form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

const mapStateToProps = createStructuredSelector({

});

HomePage.propTypes = {
  children: PropTypes.node,
};

// Wrap the component to inject dispatch and state into it
export default connect(null, null)(HomePage);
