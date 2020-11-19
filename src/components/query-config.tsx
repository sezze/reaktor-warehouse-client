import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import categories from '../constants/categories';
import productQueryState from '../store/productQueryState';
import Category from '../types/Category';
import { Select, TextInput } from '../styles/input';
import SelectionArea from './selection-area';
import useLazyCallback from '../hooks/useLazyCallback';
import displayOptions from '../constants/display-options';
import Availability from '../types/Availability';

const Grid = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr 1fr;
  position: relative;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`;

interface CellProps {
  small?: boolean;
}

const Cell = styled.div<CellProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  grid-column: auto / span ${({ small }) => (small ? 1 : 2)};
  gap: 1ch;
`;

const QueryConfig: React.FC = React.memo(() => {
  const [searchInput, setSearchInput] = useState('');
  const [config, setConfig] = useRecoilState(productQueryState);

  const handleCategoryChange = (category: string) => {
    setConfig((config) => ({ ...config, category: category as Category }));
  };

  const handleAvailabilityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setConfig((config) => ({
      ...config,
      availability: e.currentTarget.value as Availability,
      page: 0,
    }));
  };

  const handleDisplayCountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setConfig((config) => ({
      ...config,
      displayCount: parseInt(e.currentTarget.value),
      page: 0,
    }));
  };

  const lazilySetSearch = useLazyCallback((value: string | undefined) => {
    setConfig((config) => ({ ...config, search: value, page: 0 }));
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.currentTarget.value);
    lazilySetSearch(e.currentTarget.value || undefined);
  };

  const handleClearingFocus = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') e.currentTarget.blur();
  };

  return (
    <Grid>
      <Cell small>
        <label>Availability</label>
        <Select value={config.availability} onChange={handleAvailabilityChange}>
          <option value="INSTOCK">all</option>
          <option value="LESSTHAN10">&lt; 10 in stock</option>
          <option value="OUTOFSTOCK">out of stock</option>
        </Select>
      </Cell>
      <Cell small>
        <label>Display count</label>
        <Select value={config.displayCount} onChange={handleDisplayCountChange}>
          {displayOptions.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </Select>
      </Cell>
      <Cell>
        <TextInput
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={handleSearch}
          onKeyUp={handleClearingFocus}
        />
      </Cell>
      <Cell>
        <SelectionArea
          options={categories}
          value={config.category}
          onChange={handleCategoryChange}
        />
      </Cell>
    </Grid>
  );
});

export default QueryConfig;
