import React from 'react';
import styled from 'styled-components';
import Form from 'components/Form';
import PropTypes from 'prop-types';
import TabButton from 'components/TabButton';

const Wrapper = styled.ul`
  width: 100%
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */ 
  background: ${(props) => props.theme.primaryColor};
  height: 40px;
  z-index 100;
`;
/* eslint-disable react/prefer-stateless-function */
class AppBar extends React.Component {
  render() {
    const tabs = this.props.tabs.map((tab, id) =>
      <TabButton
        onClick={this.props.onTabClick}
        id={id}
        label={tab.name}
        url="/posts"
        active={id === this.props.activeTab.id}
        categoryId={tab.id}
      />);
    return (
      <Wrapper>
        <Form noTopMargin mainPage>
          <TabButton
            label="Home"
            id={-1}
            onClick={this.props.onTabClick}
            url=""
            active={this.props.activeTab.id === -1}
          />
          {tabs}
        </Form>
      </Wrapper>
    );
  }
}

AppBar.propTypes = {
  tabs: PropTypes.array.isRequired,
  onTabClick: PropTypes.func.isRequired,
  activeTab: PropTypes.string,
};
export default AppBar;
