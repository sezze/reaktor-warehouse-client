import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import lightTheme from '../constants/light-theme';
import Header from './header';
import '../reset.css';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    overflow-y: scroll;
  }
  button {
    font-family: inherit;
  }
`;

const Main = styled.main`
  margin-top: 5rem;
`;

const Layout: React.FC = ({ children }) => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyle />
    <Header />
    <Main>{children}</Main>
  </ThemeProvider>
);

export default Layout;
