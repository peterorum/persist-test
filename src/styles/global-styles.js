import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  body {
    font-family: Arial;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .debug {
    outline: 1px solid red;
  }

  // forms

  input {
    padding: 0.5rem;
  }
`;
