import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router';

const Wrapper = styled.ul`
  width: 100%
  paddingTop: 0px,
  background: ${(props)=>props.theme.primaryColor};
`;
const Item = styled.li`
  color: white;
  display: inline;
  padding: 10px
  font-size:150%;
`;

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
