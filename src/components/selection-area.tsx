import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface SelecitonAreaProps {
  options: Readonly<string[]>;
  onChange?: (option: string) => void;
}

const Container = styled.div`
  display: inline-flex;
  position: relative;
`;

const Selection = styled.div`
  position: absolute;
  height: 100%;
  width: 50%;
  z-index: -1;
  transition-duration: 0.2s;
  border-bottom: solid 2px ${({ theme }) => theme.palette.accent.alt.bg}; ;
`;

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  padding: 0.25rem 0.75rem;
  font-size: 1rem;
`;

const SelectionArea: React.FC<SelecitonAreaProps> = ({
  options,
  onChange = () => {},
}) => {
  const [region, setRegion] = useState([0, 20]);
  const firstButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setRegion([
      firstButton.current?.offsetLeft || 0,
      firstButton.current?.clientWidth || 0,
    ]);
  }, []);

  const handleOnClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onChange(e.currentTarget.value);
      setRegion([e.currentTarget.offsetLeft, e.currentTarget.clientWidth]);
    },
    [],
  );

  return (
    <Container>
      <Selection style={{ left: region[0], width: region[1] }} />
      {options.map((o, i) => (
        <Button
          ref={i === 0 ? firstButton : undefined}
          key={o}
          value={o}
          onClick={handleOnClick}
        >
          {o}
        </Button>
      ))}
    </Container>
  );
};

export default SelectionArea;
