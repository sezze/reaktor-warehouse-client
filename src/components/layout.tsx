import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './header';
import '../styles/reset.css';
import { useRecoilValue } from 'recoil';
import themeState from '../store/themeState';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    overflow-y: scroll;
    background-color: ${({ theme }) => theme.surface};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.5s, color 0.2s;
  }
  button {
    font-family: inherit;
  }
`;

const Main = styled.main`
  margin-top: 5rem;
`;

const Layout: React.FC = ({ children }) => {
  const theme = useRecoilValue(themeState);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

export default Layout;
