
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import HomePageList from 'components/HomePageList';
import { LOAD_DATA } from './constants';
import { selectCategories, selectPosts } from './selectors';


class HomePage extends React.PureComponent {
  componentWillMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <HomePageList
        categories={this.props.categories.toJS()}
        posts={this.props.posts.toJS()}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch({ type: LOAD_DATA }),
  };
}

const mapStateToProps = createStructuredSelector({
  categories: selectCategories(),
  posts: selectPosts(),
});

HomePage.propTypes = {
  fetchData: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  posts: PropTypes.array.isRequired,
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
