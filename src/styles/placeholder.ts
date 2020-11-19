import styled, { keyframes } from 'styled-components';

interface PlaceholderProps {
  width?: number | string;
  height?: number | string;
  margin?: string;
}

const toPropValue = (v?: number | string) =>
  typeof v === 'number' ? v + 'px' : typeof v === 'string' ? v : 'auto';

const LoadAnimation = keyframes`
  from {
    opacity 0.7;
  }

  to {
    opacity 1;
  }
`;

const Placeholder = styled.div<PlaceholderProps>`
  width: ${({ width }) => toPropValue(width)};
  height: ${({ height }) => toPropValue(height)};
  margin: ${({ margin }) => margin ?? '0'};
  background-color: ${({ theme }) => theme.placeholderColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-sizing: border-box;
  animation: ${LoadAnimation} 0.5s infinite alternate ease-in-out;
`;

export default Placeholder;
