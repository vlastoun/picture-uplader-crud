import styled from 'styled-components';


const Input = styled.input`
  width: 100%;
  padding: 5px 5px 5px 5px;
  box-sizing: border-box;
  margin: 0 0 10px;
  display: block;
  text-shadow: 1px 1px 1px rgba(0,0,0,.004);
  border-bottom: solid 2px
  ${(props) => (
    props.warning || props.error
      ? 'red'
      : props.theme.gray
    )
  };

  position: absolute;
  top: 14px;
  left: 0px;

  transition-property: "all";
  transition-duration: 450ms;
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  -webkit-transition-property: "all";
  -webkit-transition-duration: 450ms;
  -webkit-transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);

  &:focus{
    outline: none;
    border-bottom: solid 2px ${(props) => props.theme.primaryColor};
  }
`;

export default Input;

