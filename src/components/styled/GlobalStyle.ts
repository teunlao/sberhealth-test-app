import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body, h1 {
    margin: 0;
    padding: 0;
    color: #C9D1D9;
  }
  body {
    min-height: 100vh;
  }
`;

export default GlobalStyle;
