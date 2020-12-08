import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    font-family: 'Montserrat', sans-serif !important;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  body {
    color: rgb(210, 210, 210);
    background-color: #1f1f1f;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
  
  .Toastify__toast-body {
    white-space: pre-line;
  }

  .p-0 {
    padding: 0;
  }

  .p-1 {
    padding: 1rem;
  }
  
  .p-2 {
    padding: 2rem;
  }

  .p-3 {
    padding: 3rem;
  }

  .p-4 {
    padding: 4rem;
  }

  .p-b-0 {
    padding-bottom: 0;
  }

  .p-b-1 {
    padding-bottom: 1rem;
  }
  
  .p-b-2 {
    padding-bottom: 2rem;
  }

  .p-b-3 {
    padding-bottom: 3rem;
  }

  .p-b-4 {
    padding-bottom: 4rem;
  }

  .p-t-0 {
    padding-top: 0;
  }

  .p-t-1 {
    padding-top: 1rem;
  }
  
  .p-t-2 {
    padding-top: 2rem;
  }

  .p-t-3 {
    padding-top: 3rem;
  }

  .p-t-4 {
    padding-top: 4rem;
  }

  /* html, body {
    background: #F2F2F3;
  } */

`;
