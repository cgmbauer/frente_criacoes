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
  --color-cards-admin: #A18900;

  --color-secondary-cards: #808080;
  --color-box-cards-green: #1a842f;
  --color-box-cards-gold: #D6B92D;

  --bg-input: #E5E5E5;
  --color-placeholder: #808080;
  --bg-button: #D6B92D;
  --bg-buttonDir: #F25E74;
  --color-button: #312e38;

  --bg-button-aceitar: #47B500;
  --bg-button-recusar: #ff0000;

}
`;
