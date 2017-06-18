import styled from 'styled-components';

const Form = styled.div`
  margin: 20px auto;
  width: ${
    (props) =>
    props.mainPage
    ? '90%'
    : '61%'
  } ;
  padding: 15px;
  vertical-align: middle;
  max-width: ${
    (props) =>
    props.mainPage
    ? '1200px'
    : '300px'
  } ;
  color: rgba(0, 0, 0, 0.870588);
  background-color: rgb(255, 255, 255);
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  border-radius: 2px;
  text-align: center;
`;

export default Form;
