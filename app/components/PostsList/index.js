import React from 'react';
import PropTypes from 'prop-types';
import CardItem from 'components/CardItem';
import Ul from './Ul';

class PostsList extends React.Component {
  render() {
    const postToList = this.props.posts.toJS();
    const listItems = postToList.map((item, i) =>
      <CardItem
        key={i}
        item={item}
        edit={this.props.edit}
        delete={this.props.delete}
      />
    );
    return (
      <div>
        {listItems.length > 0
          ? <Ul>{listItems}</Ul>
          : <h1>List is empty</h1>}
      </div>
    );
  }
}


PostsList.propTypes = {
  posts: PropTypes.object.isRequired,
  edit: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
};
export default PostsList;
