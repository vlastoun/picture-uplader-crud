import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class TabButton extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const dataToSend = { id: this.props.id, label: this.props.label };
    this.props.onClick(dataToSend);
  }
  render() {
    const { right, active, label } = this.props;
    return (
      <div>
        <Button onClick={this.handleClick} active={active} right={right}>{label}</Button>
      </div>
    );
  }
}

TabButton.propTypes = {
  id: PropTypes.number,
  right: PropTypes.bool,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default TabButton;
