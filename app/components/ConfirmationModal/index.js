import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Span from 'components/Span';
/* eslint-disable react/jsx-boolean-value */
class ConfirmationModal extends React.Component {
  constructor() {
    super();
    this.handleConfirm = this.handleConfirm.bind(this);
  }
  handleConfirm() {
    this.props.action(this.props.id);
  }
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.closeModal}
        keyboardFocused={true}
      />,
      <RaisedButton
        label="Delete"
        secondary={true}
        onTouchTap={this.handleConfirm}
      />,
    ];
    return (
      <Dialog
        title={this.props.title}
        open={this.props.showDialog}
        onRequestClose={this.props.closeModal}
        actions={actions}
      >
        {this.props.text}
        {<Span> {this.props.name}</Span>}
        ?
      </Dialog>
    );
  }
}

ConfirmationModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  showDialog: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};
export default ConfirmationModal;
