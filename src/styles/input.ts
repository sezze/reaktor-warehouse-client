import styled from 'styled-components';
import { componentBase, inputBase } from './base';

export const TextInput = styled.input`
  ${componentBase}
  ${inputBase}
  padding: 0.25rem 0.5rem;
  &:focus {
    background-color: ${({ theme }) => theme.surface};
  }
`;

export const Select = styled.select`
  ${componentBase}
  ${inputBase}
  padding: 0.25rem 0.5rem;
  @media (pointer: fine) {
    &:focus {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`;
