import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,

  p, 
  label { 
    line-height: 1em; 
  } 

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
`;
