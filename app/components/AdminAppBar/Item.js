import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
const style = {
  background: 'darkgray',
};
class Item extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.onClick(this.props.url);
  }

  render() {
    return (
      <MenuItem
        style={this.props.active
        ? style
        : null}
        onTouchTap={this.handleClick}
      >
        {this.props.title}
      </MenuItem>
    );
  }
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Item;
