import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const Wrapper = styled.ul`
  width: 100%
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */ 
  background: ${(props) => props.theme.primaryColor};
  height: 50px;
`;
const Item = styled.li`
  color: white;
  display: inline;
`;
/* eslint-disable react/prefer-stateless-function */
class AppBar extends React.Component {
  render() {
    return (
      <Wrapper>
        <Link to="/"><Item>Domů</Item></Link>
        <Link to="/posts"><Item>Projekty</Item></Link>
      </Wrapper>
    );
  }
}

AppBar.propTypes = {
};
export default AppBar;
