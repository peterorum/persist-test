import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  body {
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

`;
