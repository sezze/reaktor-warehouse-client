import React from 'react';
import styled, { keyframes } from 'styled-components';

interface AlertProps {
  color?: string;
}

interface ContainerProps {
  bgcolor: string;
}

interface CircleProps {
  delay: number;
}

const Animation = keyframes`
  from {
    transform: scale(0);
    opacity: 1;
  }

  to {
    transform: scale(1.25);
    opacity: 0;
  }
`;

const Circle = styled.div<CircleProps>`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: ${Animation} 1.5s ${({ delay }) => delay}s linear infinite;
`;

const Container = styled.div<ContainerProps>`
  display: inline-block;
  width: 1em;
  height: 1em;
  position: relative;
  > ${Circle} {
    background-color: ${({ bgcolor }) => bgcolor};
  }
`;

const Alert: React.FC<AlertProps> = ({ color = 'red' }) => (
  <Container bgcolor={color}>
    <Circle delay={0} />
    <Circle delay={-0.5} />
    <Circle delay={-1} />
  </Container>
);

export default Alert;
