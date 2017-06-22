import styled from 'styled-components';

const Form = styled.div`
  margin: auto;
  width: ${
    (props) =>
    props.mainPage
    ? '90%'
    : '61%'
  } ;
  vertical-align: middle;
  max-width: ${
    (props) =>
    props.mainPage
    ? '1200px'
    : '300px'
  } ;

`;

export default Form;
