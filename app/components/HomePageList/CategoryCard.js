import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class CategoryCard extends React.Component {
  render() {
    const listItems = this.props.posts.map((post, index) =>
      <Link to={`/post/${post.id}`}><div key={index}>{post.title}</div></Link>
    );
    return (
      <div>
        <h2>
          {this.props.category.name}
        </h2>
        {listItems}
      </div>
    );
  }
}

CategoryCard.propTypes = {
  category: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
};
export default CategoryCard;
