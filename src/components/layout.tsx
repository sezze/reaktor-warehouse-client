import React, { useEffect } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import cookies from 'js-cookie';
import Header from './header';
import '../styles/reset.css';
import { useRecoilState } from 'recoil';
import themeState from '../store/themeState';
import darkTheme from '../constants/dark-theme';
import lightTheme from '../constants/light-theme';

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

let firstRun = true;

const Layout: React.FC = ({ children }) => {
  const [theme, setTheme] = useRecoilState(themeState);

  // Load stored theme
  useEffect(() => {
    const storedTheme = cookies.get('theme');
    if (storedTheme === 'dark') setTheme(darkTheme);
  }, []);

  // Store current theme
  useEffect(() => {
    cookies.set('theme', theme === lightTheme ? 'light' : 'dark');
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

export default Layout;
