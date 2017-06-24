import styled from 'styled-components';

const Form = styled.div`
<<<<<<< HEAD
<<<<<<< develop
  margin: 20px auto;
  margin-top: ${
    (props) =>
    props.noTopMargin
    ? '0px'
    : '20px'
  } ;
=======
  margin: auto;
>>>>>>> setup of material ui
=======
  margin: auto;
>>>>>>> material-ui
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
