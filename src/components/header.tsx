import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.palette.surface.alt.bg};
  box-shadow: ${({ theme }) => theme.shadow(2)};
  padding: 1rem;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 100;
`;

const Header: React.FC = () => (
  <HeaderContainer>
    <span>Client</span>
    <a href="">
      <FaGithub />
    </a>
    <span>Server</span>
    <a href="">
      <FaGithub />
    </a>
  </HeaderContainer>
);

export default Header;
