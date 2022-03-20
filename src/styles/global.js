import { createGlobalStyle } from "styled-components";
import styled from "styled-components"

export const GlobalStyle = createGlobalStyle`

/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

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
/* HTML5 display-role reset for older browsers */
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
  font-family: var(--poppins);
}

:root {
  --poppins: 'Outfit', sans-serif;
  --heading-1: 30px;
  --heading-2: calc(var(--heading-1) - 30%);
  --heading-3: calc(var(--heading-2) - 50%);
  --headline: 0.75rem;
  --body: 1rem;

  /* BTN CONFIGS */
  --background-btn: green;
  --color-btn: white;

  /* GRAYSCALE */
  --gray-4: #121214;
  --gray-3: #212529;
  --gray-2: #343B41;
  --gray-1: #868E96;
  --gray-0: #F8F9FA;

  /* INPUTS CONFIGS */
  --bordercolor: green;
}`

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 80vw;
  margin: 0 auto;
  padding: 0;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
  }
`