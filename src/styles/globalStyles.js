import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  // RESET
  *, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  
  html, body {
    font-family: "Roboto", sans-serif;
    scroll-behavior: smooth;
    width: 100%;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }

${
  "" /* Fixes issue where buttons, svg, a tags would lag behind the rest of transitions */
}
  button,svg,a {
    transition: all 0.50s linear;
  }
`;
