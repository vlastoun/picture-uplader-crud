import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  #app {
    min-height: 100%;
    min-width: 100%;
  }
  html{
    padding: 0;
    margin: 0;
  }
  h1{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: auto;
  }
  h2{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: auto;
  }
  h3{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: auto;
  }
  h4{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: auto;
  }
  a{
    text-decoration: none;
    color: inherit;
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
    font-smooth: auto;
  }
  ul{
    margin: 0;
    padding: 0;
  }
`;
