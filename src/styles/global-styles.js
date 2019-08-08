import { createGlobalStyle } from 'styled-components';

const levels = [0, 1, 2, 3, 4, 5];
const factors = [0, 0.25, 0.5, 1, 1.5, 3];

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

  ${levels.map(i => `.p-${i}{ padding: ${factors[i]}rem;}`)}
  ${levels.map(i => `.pt-${i}{ padding-top: ${factors[i]}rem;}`)}
  ${levels.map(i => `.pb-${i}{ padding-bottom: ${factors[i]}rem;}`)}
  ${levels.map(i => `.pl-${i}{ padding-left: ${factors[i]}rem;}`)}
  ${levels.map(i => `.pr-${i}{ padding-right: ${factors[i]}rem;}`)}
  ${levels.map(
    i =>
      `.px-${i}{ padding-left: ${factors[i]}rem; padding-right: ${factors[i]}rem;}`,
  )}
  ${levels.map(
    i =>
      `.py-${i}{ padding-top: ${factors[i]}rem; padding-bottom: ${factors[i]}rem;}`,
  )}

  // margin

  ${levels.map(i => `.m-${i}{ margin: ${factors[i]}rem;}`)}
  ${levels.map(i => `.mt-${i}{ margin-top: ${factors[i]}rem;}`)}
  ${levels.map(i => `.mb-${i}{ margin-bottom: ${factors[i]}rem;}`)}
  ${levels.map(i => `.ml-${i}{ margin-left: ${factors[i]}rem;}`)}
  ${levels.map(i => `.mr-${i}{ margin-right: ${factors[i]}rem;}`)}
  ${levels.map(
    i =>
      `.mx-${i}{ margin-left: ${factors[i]}rem; margin-right: ${factors[i]}rem;}`,
  )}
  ${levels.map(
    i =>
      `.my-${i}{ margin-top: ${factors[i]}rem; margin-bottom: ${factors[i]}rem;}`,
  )}

`;
