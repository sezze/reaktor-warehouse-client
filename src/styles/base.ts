import { css } from 'styled-components';

export const componentBase = css`
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.component.normal};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.component.hover};
  }

  &:active {
    background-color: ${({ theme }) => theme.component.active};
  }
`;
