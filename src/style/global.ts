import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, b, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

body, input, select, button, textarea {
  font-family: var(--tipographyMontserrat);
}

:root {
  --tipographyMontserrat: "Montserrat", sans-serif;
  --tipographyOpenSans: "Open Sans", sans-serif;
  
  --text-5xl: 3rem;
  --text-4xl: 2.25rem;
  --text-3xl: 1.875rem;
  --text-2xl: 1.5rem;
  --text-xl: 1.25rem;
  --text-lg: 1.125rem;
  --text-md: 1rem;
  --text-sm: 0.875rem;
  --text-xs: 0.75rem;

  --line-height-5xl: 1;
  --line-height-4xl: 2.5rem;
  --line-height-3xl: 2.25rem;
  --line-height-2xl: 2rem;
  --line-height-xl: 1.75rem;
  --line-height-lg: 1.75rem;
  --line-height-md: 1.5rem;
  --line-height-sm: 1.25rem;
  --line-height-xs: 1rem;

  --black: black;
  --white: white;

  --primary-color: #3DD947;
  --secondary-color: #151826;

  --green-300: #1A4024;
  --green-200: #267331;
  --green-100: #32A639;

  --gray-500: #2C2E2E;
  --gray-400: #3B3D3D;
  --gray-300: #A6ADAD;
  --gray-200: #C4CCCC;
  --gray-100: #DCE5E5;
}
`;
