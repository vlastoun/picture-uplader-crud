import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class CategoryCard extends React.Component {
  constructor(props) {
    super(props);
    const sortedPosts = props.posts.sort((a, b) => parseFloat(a.date) - parseFloat(b.date));
    this.state = { posts: sortedPosts };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      const sortedPosts = nextProps.posts.sort((a, b) => a.date - b.date);
      this.setState({ posts: sortedPosts });
    }
  }
  render() {
    const listItems = this.state.posts.map((post, index) =>
      <Link to={`/posts/${post.id}`} key={index}><div >
        <h2>{post.title}</h2>
        <p>{post.description}</p>
      </div></Link>
    );
    return (
      <div>
        <h2>
          {this.props.category.name.toUpperCase()}
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
