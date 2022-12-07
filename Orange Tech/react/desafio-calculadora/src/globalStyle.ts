import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --color-1:#263238;
    --color-2:#37474f;
    --color-3:#455a64;
    --color-4:#546e7a;
  }

  *{
    box-sizing:border-box;
  }

  body{
    font-family:arial, sans-serif;
    background:#455a64;
    margin:0;
    padding:0;
  }
`

export default GlobalStyle;