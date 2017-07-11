import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LOAD_DATA } from './constants';

class Post extends React.Component {
  componentWillMount() {
    this.props.fetchData(this.props.params.slug);
  }
  render() {
    return (
      <div>
        <h1>Post</h1>
      </div>
    );
  }
}

Post.propTypes = {
  fetchData: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (postId) => dispatch({ type: LOAD_DATA, postId }),
  };
}
const mapStateToProps = createStructuredSelector({

});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
