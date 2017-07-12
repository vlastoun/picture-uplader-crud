import styled from 'styled-components';

const Button = styled.div`
  float: ${(props) => props.right ? 'right' : 'left'};
  padding-left: 10px;
  padding-right: 10px;
  border-bottom: ${(props) => props.active ? `5px solid ${props.theme.darkColor}` : 'none'};
  height: 40px;
  line-height: 3em;
  text-align: center;
  color: white;
  min-width: 100px;
  font-weight: ${(props) => props.active ? 'normal' : 'normal'};
  &:hover{
    background: ${(props) => props.theme.ligtColor};
  }
  transition-property: "all";
  transition-duration: 450ms;
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  -webkit-transition-property: "all";
  -webkit-transition-duration: 450ms;
  -webkit-transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
`;

export default Button;
