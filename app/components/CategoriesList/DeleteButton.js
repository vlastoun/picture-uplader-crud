import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';

class DeleteButton extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.delete(this.props.post);
  }
  render() {
    return (
      <Button onClick={this.handleClick}>Delete</Button>
    );
  }
}

DeleteButton.propTypes = {
  delete: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};
export default DeleteButton;
