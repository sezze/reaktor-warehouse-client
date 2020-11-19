import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import sizes from '../constants/sizes';

const HeaderContainer = styled.header`
  padding: 1rem;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 100;
`;

const GithubLink = styled.a`
  display: block;
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  width: 1em;
  height: 1em;
  padding: 4px;
  background-color: ${({ theme }) => theme.surface};
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadow(8)};
  transition: box-shadow 0.2s;

  @media ${sizes.medium} {
    box-shadow: ${({ theme }) => theme.shadow(0)};

    &:hover {
      box-shadow: ${({ theme }) => theme.shadow(8)};
    }
  }
`;

const Header: React.FC = () => (
  <HeaderContainer>
    <GithubLink href="https://github.com/sezze/reaktor-warehouse-client">
      <FaGithub />
    </GithubLink>
  </HeaderContainer>
);

export default Header;
