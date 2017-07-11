
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import HomePageList from 'components/HomePageList';
import styled from 'styled-components';
import { LOAD_DATA } from './constants';
import { selectCategories, selectPosts } from './selectors';

const Wrapper = styled.div`
    top: 250px;
`;

class HomePostsPage extends React.PureComponent {
  componentWillMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <Wrapper>
        <HomePageList
          categories={this.props.categories.toJS()}
          posts={this.props.posts.toJS()}
        />
      </Wrapper>
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

HomePostsPage.propTypes = {
  fetchData: PropTypes.func.isRequired,
  categories: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired,
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePostsPage);
