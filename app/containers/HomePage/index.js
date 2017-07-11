
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import AppBar from 'components/AppBar';

class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <AppBar />
        {React.Children.toArray(this.props.children).length === 0
        ? <div>
          <p>vitejte</p>
        </div>
        : React.Children.toArray(this.props.children)}
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
