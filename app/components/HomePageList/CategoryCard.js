import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import styled from 'styled-components';

const MainWrapper = styled.div`
  box-shadow: 2px 4px 8px 2px rgba(0,0,0,0.2);
  transition: 0.3s;
  display: flex;
  margin-top: 1em;
  &:hover{
    box-shadow: 4px 8px 16px 4px rgba(0,0,0,0.2); 
  }
`;
const Img = styled.img`
  float: left;
  position: relative;
  max-height: 150px;
`;
const P = styled.div`
  margin: 0em;
`;
const B = styled.div`
  font-size: 125%;
  font-weight: bold;
  margin: 0em;
  padding: 0em;
`;
const SecondaryWrapper = styled.div`
  padding: 10px;
`;

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
      <Link to={`/posts/${post.id}`} key={index}>
        <MainWrapper >
          <Img src={post.mainimg} />
          <SecondaryWrapper>
            <B>{post.title}</B>
            <P>{post.description}</P>
          </SecondaryWrapper>
        </MainWrapper>
      </Link>
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
