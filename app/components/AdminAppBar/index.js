import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { LINKS } from 'constants/AdminLinks';
import LeftDrawer from './LeftDrawer';


const appBarStyle = {
  postition: 'fixed',
  top: 0,
  width: '100%',
};


/* eslint-disable react/prefer-stateless-function */
class AdminAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0' };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.showDrawer = this.showDrawer.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  showDrawer() {
    this.props.toggleDrawer(true);
  }
  render() {
    return (
      <div>
        <AppBar
          title="Title"
          onLeftIconButtonTouchTap={this.showDrawer}
          iconElementRight={<FlatButton label="Logout" onClick={this.props.logout} />}
          style={appBarStyle}
        />
        <LeftDrawer
          toggleDrawer={this.props.toggleDrawer}
          drawerState={this.props.drawerState}
          items={LINKS}
          activeUrl={this.props.activeUrl}
          clickedLink={this.props.clickedLink}
        />
      </div>
    );
  }
}
AdminAppBar.propTypes = {
  logout: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  drawerState: PropTypes.bool.isRequired,
  activeUrl: PropTypes.string.isRequired,
  clickedLink: PropTypes.func.isRequired,
};

export default AdminAppBar;
