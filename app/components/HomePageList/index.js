import React from 'react';
import PropTypes from 'prop-types';
import CategoryCard from './CategoryCard';

/* eslint-disable react/prefer-stateless-function */
class HomePageList extends React.Component {
  render() {
    const { posts, activeTab } = this.props;
    return (
      <div>
        <ul>
          <CategoryCard
            category={activeTab}
            posts={posts.filter((post) => activeTab.categoryId === post.categoryId)}
          />
        </ul>
      </div>
    );
  }
}

HomePageList.propTypes = {
  posts: PropTypes.array.isRequired,
  activeTab: PropTypes.object.isRequired,
};
export default HomePageList;
