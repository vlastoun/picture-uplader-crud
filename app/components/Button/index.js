import styled from 'styled-components';

const Button = styled.button`
  background: ${(props) => props.theme.primaryColor} ;
  border: none;
  border-radius: 2px;
  color: white;
  position: relative;
  height: 36px;
  margin: 0;
  min-width: 64px;
  padding: 0 16px;
  display: inline-block;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0;
  overflow: hidden;
  outline: none;
  cursor: 'pointer';
  text-decoration: none;
  text-align: center;
  line-height: 36px;
  vertical-align: middle;

  transition-property: "all";
  transition-duration: 450ms;
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  -webkit-transition-property: "all";
  -webkit-transition-duration: 450ms;
  -webkit-transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);

  &:disabled{
    background: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.disabledText};
    cursor: 'not-allowed';
  }
  &:hover{
    background: ${(props) => props.theme.ligtColor};
  }
  &:active{
    background: ${(props) => props.theme.darkColor};
  }
`;

export default Button;

