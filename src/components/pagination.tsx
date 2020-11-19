import React from 'react';
import styled from 'styled-components';
import { Button } from '../styles/input';
import { range } from '../utils/mathUtils';

interface PaginationProps {
  dummy?: boolean;
  page: number;
  pageCount: number;
  maxButtonCount?: number;
  onChange?: (page: number) => void;
}

const Container = styled.div`
  height: 2rem;
  display: inline-flex;
  justify-content: center;
`;

const ListButton = styled(Button)`
  position: relative;
  border-radius: 0;

  &:first-child {
    border-radius: ${({ theme }) => theme.borderRadius} 0 0
      ${({ theme }) => theme.borderRadius};
  }

  &:last-child {
    border-radius: 0 ${({ theme }) => theme.borderRadius}
      ${({ theme }) => theme.borderRadius} 0;
  }

  &:hover,
  &:active {
    z-index: 2;
  }
`;

const Pagination: React.FC<PaginationProps> = React.memo(
  ({ page, pageCount, maxButtonCount = 7, onChange = () => {}, dummy }) => {
    const buttonCount = Math.min(pageCount, maxButtonCount);
    const leftCount = Math.ceil(buttonCount / 2) - 1;
    const rightCount = Math.floor(buttonCount / 2);

    // Center at current page unless user is close to the
    // left or right edge, then clamp to those
    const center =
      page - leftCount < 0
        ? leftCount
        : page + rightCount > pageCount - 1
        ? pageCount - rightCount - 1
        : page;

    const leftLimit = center - leftCount;
    const rightLimit = center + rightCount;
    const buttons = [...range(leftLimit, rightLimit)];

    const handleSelection = (e: React.MouseEvent<HTMLButtonElement>) => {
      const pageString = e.currentTarget.dataset.page;
      if (!pageString) return;
      const page = parseInt(pageString);
      onChange(page);
    };

    return (
      <Container>
        {leftLimit > 0 ? (
          <ListButton disabled={dummy} data-page={1} onClick={handleSelection}>
            &lt;&lt;
          </ListButton>
        ) : null}
        {buttons.map((n) => (
          <ListButton
            data-page={n}
            onClick={handleSelection}
            disabled={n === page || dummy}
            key={n}
          >
            {n + 1}
          </ListButton>
        ))}
        {rightLimit < pageCount - 1 ? (
          <ListButton
            disabled={dummy}
            data-page={pageCount - 1}
            onClick={handleSelection}
          >
            &gt;&gt;
          </ListButton>
        ) : null}
      </Container>
    );
  },
);

export default Pagination;
