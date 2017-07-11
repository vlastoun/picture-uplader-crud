import React from 'react';
import PropTypes from 'prop-types';
import CategoryCard from './CategoryCard'

class HomePageList extends React.Component {
  render() {
    const { categories, posts } = this.props;
    const listItems = categories.map((category, index) =>
      <CategoryCard
        key={index}
        category={category}
        posts={posts.filter((post) => category.id === post.categoryId)}
      />
    );
    return (
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}

HomePageList.propTypes = {
  posts: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
};
export default HomePageList;
