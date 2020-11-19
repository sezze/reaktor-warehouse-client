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

  const setCategory = (category: string) => {
    setConfig({ ...config, category: category as Category });
  };

  const lazilySetSearch = useLazyCallback((value: string) => {
    setConfig((config) => ({ ...config, search: value }));
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.currentTarget.value);
    lazilySetSearch(e.currentTarget.value);
  };

  return (
    <Grid>
      <Cell small>
        <label>Availability</label>
        <Select>
          <option>all</option>
          <option>&lt; 10 in stock</option>
          <option>out of stock</option>
        </Select>
      </Cell>
      <Cell small>
        <label>Display count</label>
        <Select>
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
        />
      </Cell>
      <Cell>
        <SelectionArea
          options={categories}
          value={config.category}
          onChange={setCategory}
        />
      </Cell>
    </Grid>
  );
});

export default QueryConfig;
