import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
  html{
    padding: 0;
    margin: 0;
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
    padding-top: 40px;
    margin: 0;
  }
  ul{
    margin: 0;
    padding: 0;
  }
`;
