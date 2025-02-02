import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    max-width: 1500px;
    width: 100%;
    margin: 0 auto;
    border: 2px solid red;
  }

  ul {
    list-style: none;

    li {
      margin: 0;
      padding: 0;
    }
  }

  a {
    text-decoration: none;
    color: #000;
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
    :focus {
      outline: none;
    }
  }

  input {
  outline: none;
  border: none;
}
`;
