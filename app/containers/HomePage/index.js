
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router';
import { LOAD_DATA } from './constants';


class HomePage extends React.PureComponent {
  componentWillMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <Link to="/admin">....Admin page</Link>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch({ type: LOAD_DATA }),
  };
}

const mapStateToProps = createStructuredSelector({

});

HomePage.propTypes = {
  fetchData: PropTypes.func.isRequired,
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
