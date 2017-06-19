import styled from 'styled-components';

const InputHeader = styled.span`
  width: 100%;
  font-size: 0.75em;
  text-align: left;
  padding: 0px 5px 5px 5px;
  display: block;
  color: ${(props) => (props.active ? props.theme.primaryColor : props.theme.gray)};
  position: absolute;
  top: 0;
  left: 0;
`;

export default InputHeader;
