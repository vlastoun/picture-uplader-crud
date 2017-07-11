import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DisplayPost from 'components/DisplayPost';
import { LOAD_DATA } from './constants';
import { selectPictures, selectPost } from './selectors';

class Post extends React.Component {
  componentWillMount() {
    this.props.fetchData(this.props.params.slug);
  }
  render() {
    return (
      <div>
        <DisplayPost
          post={this.props.post}
          pictures={this.props.pictures}
        />
      </div>
    );
  }
}

Post.propTypes = {
  fetchData: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  pictures: PropTypes.array.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (postId) => dispatch({ type: LOAD_DATA, postId }),
  };
}
const mapStateToProps = createStructuredSelector({
  pictures: selectPictures(),
  post: selectPost(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
