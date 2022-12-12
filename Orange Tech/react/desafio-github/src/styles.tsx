import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    box-sizing:border-box;
    margin:0;
    padding:0;
  }

  body{
    background:#22272e;
    color:#fff;
    font-family:sans-serif;
  }

  .octicon{
    fill:#fff;
  }
`;