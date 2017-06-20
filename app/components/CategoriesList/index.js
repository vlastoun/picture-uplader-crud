import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import Li from './Li';
import Ul from './Ul';

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
        <Button>Delete</Button>
      </Li>
    );

    return (
      <div>
        {this.props.visibilityState ? <Ul>{listItems}</Ul> : null}
      </div>
    );
  }
}

CategoriesList.propTypes = {
  visibilityState: PropTypes.bool.isRequired,
  fetch: PropTypes.func.isRequired,
};


export default CategoriesList;
