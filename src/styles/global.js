import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font: 16px 'Nunito', sans-serif;
}

button {
  cursor: pointer;
}

h1 {
  font-weight: 700;
}

a {
  text-decoration: none;
}

:root {
  --font-family-primary: 'Nunito', 'sans-serif';
  --color-primary: #000;
  --color-secondary: #fff;

  --color-secondary-cards: #808080;

  --bg-input: #E5E5E5;
  --color-placeholder: #808080;

  --bg-button: #D6B92D;
  --color-button: #312e38;

  --bg-button-aceitar: #1CD141;
  --bg-button-recusar: #FF7539;

}
`;
