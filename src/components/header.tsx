import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaMoon, FaSun } from 'react-icons/fa';
import sizes from '../constants/sizes';
import ThemeToggle from './theme-toggle';
import { useRecoilState } from 'recoil';
import themeState from '../store/themeState';
import lightTheme from '../constants/light-theme';
import darkTheme from '../constants/dark-theme';

const HeaderContainer = styled.header`
  padding: 1rem;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  box-sizing: border-box;
  z-index: 100;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.div`
  border: none;
  font-size: 2rem;
  width: 3rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.surface};
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadow(8)};
  transition: box-shadow 0.2s, background-color 0.5s, color 0.2s;
  user-select: none;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media ${sizes.medium} {
    box-shadow: ${({ theme }) => theme.shadow(0)};

    &:hover {
      box-shadow: ${({ theme }) => theme.shadow(8)};
    }
  }
`;

const Link = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
`;

const Header: React.FC = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  const isLight = theme === lightTheme;

  const handleThemeToggle = () => {
    setTheme(isLight ? darkTheme : lightTheme);
  };

  return (
    <HeaderContainer>
      <Button>
        <Link href="https://github.com/sezze/reaktor-warehouse-client">
          <FaGithub />
        </Link>
      </Button>
      <Button onClick={handleThemeToggle}>{isLight ? <FaMoon /> : <FaSun />}</Button>
    </HeaderContainer>
  );
};

export default Header;
