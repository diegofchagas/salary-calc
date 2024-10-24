import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
      -webkit-appearance: none;
    margin: 0;
  } 

  input, button, a{
    font-family: "Inter", sans-serif;
  }

  body{
    font-family: "Inter", sans-serif;
    background: #F4F5FB;
    -webkit-font-smoothing: antialiased;
    
  }

`;
