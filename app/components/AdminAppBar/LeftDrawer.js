import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import Item from './Item';

class LeftDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleClose = this.handleClose.bind(this);
    this.redirect = this.redirect.bind(this);
  }
  handleClose() {
    this.props.toggleDrawer(false);
  }
  redirect() {
    this.props.toggleDrawer(false);
  }
  render() {
    const listItems = this.props.items.map((item, index) => {
      item.id = index; //eslint-disable-line
      let isActive;
      if (this.props.activeUrl === item.url) {
        isActive = true;
      } else {
        isActive = false;
      }
      return (<Item
        title={item.title}
        url={item.url}
        active={isActive}
        key={item.id}
        onClick={this.props.clickedLink}
      />);
    });
    return (
      <Drawer
        docked={false}
        width={200}
        open={this.props.drawerState}
        onRequestChange={this.handleClose}
      >
        {listItems}
      </Drawer>
    );
  }
}

LeftDrawer.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  drawerState: PropTypes.bool.isRequired,
  activeUrl: PropTypes.string.isRequired,
  clickedLink: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};
export default LeftDrawer;
