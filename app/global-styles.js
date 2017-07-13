import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  #app {
    min-height: 100%;
    min-width: 100%;
    font-smooth: auto;
  }
  @font-face {
    font-family: 'Roboto', sans-serif;
    src: url("https://fonts.googleapis.com/css?family=Roboto") format('opentype');
  }
  h1{
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: auto;
  }
  h2{
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: auto;
  }
  h3{
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: auto;
  }
  h4{
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: auto;
  }
  p{ 
    line-height: 1.5em; 
  }
  code{
    background-color: grey;
  }
  body{
    padding-top: 25px;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ul{
    margin: 0;
    padding: 0;
  }
`;
