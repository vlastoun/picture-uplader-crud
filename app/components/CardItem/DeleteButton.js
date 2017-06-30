import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';

class DeleteButton extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.delete(this.props.id, this.props.title);
  }
  render() {
    return (
      <FlatButton style={this.props.style} onTouchTap={this.handleClick} secondary>Delete</FlatButton>
    );
  }
}

DeleteButton.propTypes = {
  delete: PropTypes.func.isRequired,
  id: PropTypes.object.isRequired,
  style: PropTypes.object,
  title: PropTypes.object.isRequired,
};
export default DeleteButton;
