import { createGlobalStyle } from 'styled-components';

// padding & margins

// 0: 0
// 1: 4px
// 2: 8px
// 3: 16px;
// 4: 24px;
// 5: 48px

// in rems
const spacers = [0, 0.25, 0.5, 1, 1.5, 3];

const breakpoints = [
  {
    prefix: '',
    width: 0,
  },
  {
    prefix: 'sm-',
    width: 576,
  },
  {
    prefix: 'md-',
    width: 768,
  },
  {
    prefix: 'lg-',
    width: 992,
  },
  {
    prefix: 'xl-',
    width: 1200,
  },
];

/* eslint-disable indent */

// padding, margin

// attribute is padding, margin
// shortcut is p, m
// breakpoint is md, lg...

// generate all variations eg .p-0, .lg-mt-4

const createSpacing = (attribute, shortcut, breakpoint) =>
  `
${Object.keys(spacers)
  .map(i => `.${breakpoint}${shortcut}-${i}{ ${attribute}: ${spacers[i]}rem;}`)
  .join(' ')}
${Object.keys(spacers)
  .map(
    i =>
      `.${breakpoint}${shortcut}t-${i}{ ${attribute}-top: ${spacers[i]}rem;}`,
  )
  .join(' ')}
${Object.keys(spacers)
  .map(
    i =>
      `.{breakpoint}${shortcut}b$-${i}{ ${attribute}-bottom: ${spacers[i]}rem;}`,
  )
  .join(' ')}
${Object.keys(spacers)
  .map(
    i =>
      `.${breakpoint}${shortcut}l-${i}{ ${attribute}-left: ${spacers[i]}rem;}`,
  )
  .join(' ')}
${Object.keys(spacers)
  .map(
    i =>
      `.${breakpoint}${shortcut}r-${i}{ ${attribute}-right: ${spacers[i]}rem;}`,
  )
  .join(' ')}
${Object.keys(spacers)
  .map(
    i =>
      `.${breakpoint}${shortcut}x-${i}{ ${attribute}-left: ${spacers[i]}rem; ${attribute}-right: ${spacers[i]}rem;}`,
  )
  .join(' ')}
${Object.keys(spacers)
  .map(
    i =>
      `.${breakpoint}${shortcut}y-${i}{ ${attribute}-top: ${spacers[i]}rem; ${attribute}-bottom: ${spacers[i]}rem;}`,
  )
  .join(' ')}
`;

// flex

const createFlex = breakpoint =>
  `
  .${breakpoint}d-flex {
    display: flex
  }

  .${breakpoint}d-block {
    display: block
  }

  .${breakpoint}d-inline {
    display: inline
  }

  .${breakpoint}d-inline-block {
    display: inline-block
  }

  .${breakpoint}flex-row {
    flex-direction: row;
  }

  .${breakpoint}flex-column {
    flex-direction: column;
  }

  .${breakpoint}flex-row-reverse {
    flex-direction: row-reverse;
  }

  .${breakpoint}flex-column-reverse {
    flex-direction: column-reverse;
  }

  .${breakpoint}flex-wrap {
    flex-wrap: wrap;
  }

  .${breakpoint}flex-nowrap {
    flex-wrap: nowrap;
  }

  .${breakpoint}justify-content-between {
    justify-content:space-between;
  }

  .${breakpoint}justify-content-start {
    justify-content:flex-start;
  }

  .${breakpoint}justify-content-end {
    justify-content:flex-end;
  }

  .${breakpoint}align-content-start {
    align-content:flex-start;
  }

  .${breakpoint}align-content-center {
    align-content:center;
  }
  .${breakpoint}align-content-end {
    align-content:flex-end;
  }

  .${breakpoint}align-items-start {
    align-items:flex-start;
  }

  .${breakpoint}align-items-center {
    align-items:center;
  }
  .${breakpoint}align-items-end {
    align-items:flex-end;
  }

  .${breakpoint}align-self-start {
    align-self:flex-start;
  }

  .${breakpoint}align-self-center {
    align-self:center;
  }
  .${breakpoint}align-self-end {
    align-self:flex-end;
  }
`;

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

  // utility classes

  ${breakpoints.map(
    b => `@media (min-width: ${b.width}px) {
      ${createSpacing('padding', 'p', b.prefix)}
      ${createSpacing('margin', 'm', b.prefix)}
      ${createFlex(b.prefix)}
    }`,
  )}

  // forms

  input {
    padding: 0.5rem;
  }
`;
