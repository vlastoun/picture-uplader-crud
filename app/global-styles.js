import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
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

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
`;
