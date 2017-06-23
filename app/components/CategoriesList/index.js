import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import Li from './Li';
import Ul from './Ul';
import DeleteButton from './DeleteButton';

class CategoriesList extends React.Component {
  componentWillMount() {
    this.props.fetch();
  }
  render() {
    const listItems = this.props.items.map((item) => //eslint-disable-line
      <Li key={item.id}>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <Button>Edit</Button>
        <DeleteButton delete={this.props.delete} post={item} />
      </Li>
    );
    return (
      <div>
        {this.props.visibilityState && (listItems.length > 0 ? <Ul>{listItems}</Ul> : <h1>List is empty</h1>)}
      </div>
    );
  }
}

CategoriesList.propTypes = {
  visibilityState: PropTypes.bool.isRequired,
  fetch: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
};


export default CategoriesList;
