import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FETCH_POST_REQUESTED } from './constants';

class EditPostPage extends React.Component {
  componentWillMount() {
    this.props.fetchData(this.props.params.slug);
  }
  render() {
    return (
      <div>

      </div>
    );
  }
}

EditPostPage.propTypes = {
  fetchData: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (postId) => dispatch({ type: FETCH_POST_REQUESTED, postId }),
  };
}
const mapStateToProps = createStructuredSelector({

});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);
