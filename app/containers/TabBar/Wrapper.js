import styled from 'styled-components';

const Wrapper = styled.ul`
  list-style-type: none;
  width: 90%;
  max-width: 1200px;
  height: 3em;
  margin: auto;
  padding: 0;
  overflow: hidden;
  background-color: ${
    (props) =>
    props.secondary
    ? props.theme.blue
    : props.theme.primaryColor
  } ;
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  border-radius: 2px;
  margin-top: 0.25em;
`;

export default Wrapper;
