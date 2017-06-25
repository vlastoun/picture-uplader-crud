import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';

class EditButton extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.edit(this.props.post);
  }
  render() {
    return (
      <FlatButton style={this.props.style} onTouchTap={this.handleClick} primary>Edit</FlatButton>
    );
  }
}

EditButton.propTypes = {
  edit: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  style: PropTypes.object,
};
export default EditButton;
