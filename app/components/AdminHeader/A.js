import styled from 'styled-components';

const A = styled.a`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover{
    background: ${(props) => props.theme.primaryColor};
  }
`;

export default A;
