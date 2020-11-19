import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface SelecitonAreaProps {
  options: Readonly<string[]>;
  value?: string;
  onChange?: (option: string) => void;
}

const Wrapper = styled.div`
  display: inline-flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  position: relative;
`;

const Selection = styled.div`
  position: absolute;
  height: 100%;
  width: 50%;
  z-index: -1;
  transition-duration: 0.2s;
  border-bottom: solid 2px ${({ theme }) => theme.accent}; ;
`;

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  padding: 0.25rem 0.75rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.component.text};
`;

const SelectionArea: React.FC<SelecitonAreaProps> = ({
  options,
  onChange = () => {},
  value = options[0],
}) => {
  const [region, setRegion] = useState([0, 20]);
  const selectedButton = useRef<HTMLButtonElement>(null);

  // Update underline effect
  useEffect(() => {
    setRegion([
      selectedButton.current?.offsetLeft || 0,
      selectedButton.current?.clientWidth || 0,
    ]);
  }, [value]);

  const handleOnClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onChange(e.currentTarget.value);
    },
    [onChange],
  );

  return (
    <Wrapper>
      <Container>
        <Selection style={{ left: region[0], width: region[1] }} />
        {options.map((o) => (
          <Button
            ref={o === value ? selectedButton : undefined}
            key={o}
            value={o}
            onClick={handleOnClick}
          >
            {o}
          </Button>
        ))}
      </Container>
    </Wrapper>
  );
};

export default SelectionArea;
