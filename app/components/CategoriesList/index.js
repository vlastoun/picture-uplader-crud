import React from 'react';
import PropTypes from 'prop-types';
import Ul from './Ul';
import CategoryCard from './CategoryCard';

class CategoriesList extends React.Component {
  componentWillMount() {
    this.props.fetch();
  }

  /* eslint-disable react/jsx-boolean-value */

  render() {
    const listItems = this.props.items.map((item) => { //eslint-disable-line
      return (
        <CategoryCard
          key={item.id}
          item={item}
          edit={this.props.edit}
          delete={this.props.delete}
        />);
    });
    return (
      <div>
        {listItems.length > 0
          ? <Ul>{listItems}</Ul>
          : <h1>List is empty</h1>}
      </div>
    );
  }
}

CategoriesList.propTypes = {
  fetch: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

export default CategoriesList;
