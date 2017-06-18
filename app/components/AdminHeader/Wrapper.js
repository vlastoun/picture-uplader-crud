import styled from 'styled-components';

const Wrapper = styled.ul`
  list-style-type: none;
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding: 0;
  overflow: hidden;
  background-color: ${
    (props) =>
    props.secondary
    ? props.theme.blue
    : props.theme.ligtColor
  } ;;
`;

export default Wrapper;
