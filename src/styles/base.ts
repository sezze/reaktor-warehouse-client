import { css } from 'styled-components';

export const componentBase = css`
  background-color: ${({ theme }) => theme.component.normal};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  transition: background-color 0.15s, box-shadow 0.15s;
  color: ${({ theme }) => theme.component.text};
  box-shadow: ${({ theme }) => theme.shadow(1)};

  &:disabled {
    opacity: 0.65;
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.component.hover};
    box-shadow: ${({ theme }) => theme.shadow(2)};
  }

  &:not(:disabled):active {
    background-color: ${({ theme }) => theme.component.active};
    box-shadow: ${({ theme }) => theme.shadow(0)};
  }
`;

export const inputBase = css`
  border: none;
  outline: none;
  &:not(:disabled):focus {
    box-shadow: ${({ theme }) => theme.shadow(4)};
  }
`;
