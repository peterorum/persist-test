import { createGlobalStyle } from 'styled-components';

const spacers = [0, 0.25, 0.5, 1, 1.5, 3];

// 0: 0
// 1: 4px
// 2: 8px
// 3: 16px;
// 4: 24px;
// 5: 48px

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

  // debug
  .ou {
    outline: 1px solid red;
  }

  // padding eg p-3

  ${Object.keys(spacers).map(i => `.p-${i}{ padding: ${spacers[i]}rem;}`)}
  ${Object.keys(spacers).map(i => `.pt-${i}{ padding-top: ${spacers[i]}rem;}`)}
  ${Object.keys(spacers).map(
    i => `.pb-${i}{ padding-bottom: ${spacers[i]}rem;}`,
  )}
  ${Object.keys(spacers).map(i => `.pl-${i}{ padding-left: ${spacers[i]}rem;}`)}
  ${Object.keys(spacers).map(
    i => `.pr-${i}{ padding-right: ${spacers[i]}rem;}`,
  )}
  ${Object.keys(spacers).map(
    i =>
      `.px-${i}{ padding-left: ${spacers[i]}rem; padding-right: ${spacers[i]}rem;}`,
  )}
  ${Object.keys(spacers).map(
    i =>
      `.py-${i}{ padding-top: ${spacers[i]}rem; padding-bottom: ${spacers[i]}rem;}`,
  )}

  // margin

  ${Object.keys(spacers).map(i => `.m-${i}{ margin: ${spacers[i]}rem;}`)}
  ${Object.keys(spacers).map(i => `.mt-${i}{ margin-top: ${spacers[i]}rem;}`)}
  ${Object.keys(spacers).map(
    i => `.mb-${i}{ margin-bottom: ${spacers[i]}rem;}`,
  )}
  ${Object.keys(spacers).map(i => `.ml-${i}{ margin-left: ${spacers[i]}rem;}`)}
  ${Object.keys(spacers).map(i => `.mr-${i}{ margin-right: ${spacers[i]}rem;}`)}
  ${Object.keys(spacers).map(
    i =>
      `.mx-${i}{ margin-left: ${spacers[i]}rem; margin-right: ${spacers[i]}rem;}`,
  )}
  ${Object.keys(spacers).map(
    i =>
      `.my-${i}{ margin-top: ${spacers[i]}rem; margin-bottom: ${spacers[i]}rem;}`,
  )}

  // forms

  input {
    padding: 0.5rem;
  }
`;
