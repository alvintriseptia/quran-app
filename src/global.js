import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  .card{
    border: ${({ theme }) => theme.border};
  }
    a.card{
      background: ${({ theme }) => theme.gradient};
      color: ${({ theme }) => theme.text};
    }
    .number{
      border:2px solid ${({ theme }) => theme.text};
    }
  `;
