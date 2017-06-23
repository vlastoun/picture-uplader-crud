import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TabButton from 'components/TabButton';
import { USER_LOGOUT } from 'containers/AdminPage/constants';
import { createStructuredSelector } from 'reselect';
import Wrapper from './Wrapper';
import { TAB_CLICKED } from './constants';
import { makeSelectCurrentTab } from './selectors';

/* eslint-disable react/prefer-stateless-function */
class TabBar extends React.Component {

  render() {
    const listItems = this.props.tabs.map((item, index) => {
      item.id = index; //eslint-disable-line
      let isActive;
      if (this.props.activeTab === item.id) {
        isActive = true;
      } else {
        isActive = false;
      }

      return (<TabButton
        label={item.title}
        key={item.id}
        id={item.id}
        onClick={this.props.onClick}
        active={isActive}
      />);
    });
    return (
      <Wrapper>
        {listItems}
        <TabButton
          label="logout"
          id={999}
          onClick={this.props.logout}
          right
        />
      </Wrapper>
    );
  }
}

TabBar.propTypes = {
  onClick: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  activeTab: PropTypes.number,
  tabs: PropTypes.array.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    onClick: (data) => dispatch({ type: TAB_CLICKED, tab: data }),
    logout: (data) => dispatch({ type: USER_LOGOUT, tab: data }),
  };
}

const mapStateToProps = createStructuredSelector({
  activeTab: makeSelectCurrentTab(),
});
// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(TabBar);
