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
    prefix: 'sm:',
    width: 576,
  },
  {
    prefix: 'md:',
    width: 768,
  },
  {
    prefix: 'lg:',
    width: 992,
  },
  {
    prefix: 'xl:',
    width: 1200,
  },
];

/* eslint-disable indent */

// padding, margin

// attribute is padding, margin
// shortcut is p, m
// breakpoint is md, lg...

// generate all variations eg .p-0, .lg-mt-4, .mt-n4

const createSpacingSigned = (
  attribute,
  shortcut,
  breakpoint,
  sign,
  signPrefix,
) =>
  `
${Object.keys(spacers)
  .map(
    i =>
      `.${breakpoint}${shortcut}-${signPrefix}${i}{ ${attribute}: ${sign *
        spacers[i]}rem;}`,
  )
  .join(' ')}

${Object.keys(spacers)
  .map(
    i =>
      `.${breakpoint}${shortcut}t-${signPrefix}${i}{ ${attribute}-top: ${sign *
        spacers[i]}rem;}`,
  )
  .join(' ')}

${Object.keys(spacers)
  .map(
    i =>
      `.${breakpoint}${shortcut}b-${signPrefix}${i}{ ${attribute}-bottom: ${sign *
        spacers[i]}rem;}`,
  )
  .join(' ')}

${Object.keys(spacers)
  .map(
    i =>
      `.${breakpoint}${shortcut}l-${signPrefix}${i}{ ${attribute}-left: ${sign *
        spacers[i]}rem;}`,
  )
  .join(' ')}

${Object.keys(spacers)
  .map(
    i =>
      `.${breakpoint}${shortcut}r-${signPrefix}${i}{ ${attribute}-right: ${sign *
        spacers[i]}rem;}`,
  )
  .join(' ')}

${Object.keys(spacers)
  .map(
    i =>
      `.${breakpoint}${shortcut}x-${signPrefix}${i}{ ${attribute}-left: ${sign *
        spacers[i]}rem; ${attribute}-right: ${sign * spacers[i]}rem;}`,
  )
  .join(' ')}

${Object.keys(spacers)
  .map(
    i =>
      `.${breakpoint}${shortcut}y-${signPrefix}${i}{ ${attribute}-top: ${sign *
        spacers[i]}rem; ${attribute}-bottom: ${sign * spacers[i]}rem;}`,
  )
  .join(' ')}
`;

const createSpacingAuto = (attribute, shortcut, breakpoint) =>
  `
    .${breakpoint}${shortcut}-auto{ ${attribute}: auto;}
    .${breakpoint}${shortcut}t-auto{ ${attribute}-top: auto;}
    .${breakpoint}${shortcut}b-auto{ ${attribute}-bottom: auto;}
    .${breakpoint}${shortcut}l-auto{ ${attribute}-left: auto;}
    .${breakpoint}${shortcut}r-auto{ ${attribute}-right: auto;}
    .${breakpoint}${shortcut}x-auto{ ${attribute}-left: auto;${attribute}-right: auto;}
    .${breakpoint}${shortcut}y-auto{ ${attribute}-top: auto;${attribute}-bottom: auto;}
    `;

const createSpacing = (attribute, shortcut, breakpoint) => `
  ${createSpacingSigned(attribute, shortcut, breakpoint, 1, '')}
  ${createSpacingSigned(attribute, shortcut, breakpoint, -1, 'n')}
  ${createSpacingAuto(attribute, shortcut, breakpoint)}
  `;

// flex

const createFlex = breakpoint =>
  `
  .${breakpoint}d-none {
    display: none;
  }

  .${breakpoint}d-flex {
    display: flex;
  }

  .${breakpoint}d-block {
    display: block;
  }

  .${breakpoint}d-inline {
    display: inline;
  }

  .${breakpoint}d-inline-block {
    display: inline-block;
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

  .${breakpoint}justify-between {
    justify-content:space-between;
  }

  .${breakpoint}justify-start {
    justify-content:flex-start;
  }

  .${breakpoint}justify-end {
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

  .${breakpoint}align-items-stretch {
    align-items:stretch;
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

// images

const createImages = breakpoint =>
  `
  .${breakpoint}img-responsive {
    max-width: 100%;
  }

  .${breakpoint}img-height-full {
    height: 100%;
  }

  .${breakpoint}img-height-auto {
    height: auto;
  }

  .${breakpoint}img-cover {
    object-fit: cover;
  }

  .${breakpoint}img-contain {
    object-fit: contain;
  }
`;

// width & height

const createDimensions = breakpoint =>
  `
  .${breakpoint}w-25 {
    width: 25%;
  }

  .${breakpoint}w-33 {
    width: 33.33333%;
  }

  .${breakpoint}w-50 {
    width: 50%;
  }

  .${breakpoint}w-66 {
    width: 66.666667%;
  }

  .${breakpoint}w-75 {
    width: 75%;
  }

  .${breakpoint}w-100 {
    width: 100%;
  }

  .${breakpoint}mw-25 {
    max-width: 25%;
  }

  .${breakpoint}mw-33 {
    max-width: 33.33333%;
  }

  .${breakpoint}mw-50 {
    max-width: 50%;
  }

  .${breakpoint}mw-66 {
    max-width: 66.666667%;
  }

  .${breakpoint}mw-75 {
    max-width: 75%;
  }

  .${breakpoint}mw-100 {
    max-width: 100%;
  }

  .${breakpoint}h-25 {
    height 25%;
  }

  .${breakpoint}h-33 {
    height 33.33333%;
  }

  .${breakpoint}h-50 {
    height 50%;
  }

  .${breakpoint}h-66 {
    height 66.666667%;
  }

  .${breakpoint}h-75 {
    height 75%;
  }

  .${breakpoint}h-100 {
    height 100%;
  }

  .${breakpoint}mh-25 {
    max-height: 25%;
  }

  .${breakpoint}mh-33 {
    max-height: 33.33333%;
  }

  .${breakpoint}mh-50 {
    max-height: 50%;
  }

  .${breakpoint}mh-66 {
    max-height: 66.666667%;
  }

  .${breakpoint}mh-75 {
    max-height: 75%;
  }

  .${breakpoint}mh-100 {
    max-height: 100%;
  }

`;

// typography

const createTypography = breakpoint =>
  `
  .${breakpoint}text-left {
    text-align: left;
  }

  .${breakpoint}text-center {
    text-align: center;
  }

  .${breakpoint}text-right {
    text-align: right;
  }

  .${breakpoint}text-bold {
    font-weight: bold;
  }

  .${breakpoint}text-normal {
    font-weight: normal;
  }

  .${breakpoint}text-lowercase {
    text-transform: lowercase;
  }

  .${breakpoint}text-uppercase {
    text-transform: uppercase;
  }

`;

// styles

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
      ${createImages(b.prefix)}
      ${createDimensions(b.prefix)}
      ${createTypography(b.prefix)}
    }`,
  )}

  // forms

  input {
    padding: 0.5rem;
  }

`;
