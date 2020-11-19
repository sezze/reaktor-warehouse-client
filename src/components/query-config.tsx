import React, { useState } from 'react';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import styled from 'styled-components';
import categories from '../constants/categories';
import productQueryState from '../store/productQueryState';
import Category from '../types/Category';
import { Select, TextInput } from '../styles/input';
import SelectionArea from './selection-area';
import Pagination from './pagination';
import pageCountState from '../store/pageCountState';
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

const Label = styled.label`
  /* line-height: 1.5rem; */
`;

const QueryConfig: React.FC = React.memo(() => {
  const [searchInput, setSearchInput] = useState('');
  const [config, setConfig] = useRecoilState(productQueryState);
  const pageCount = useRecoilValueLoadable(pageCountState);

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

  const handleSetPage = (page: number) => {
    setConfig((config) => ({ ...config, page }));
  };

  return (
    <Grid>
      <Cell small>
        <Label>Availability</Label>
        <Select>
          <option>all</option>
          <option>&lt; 10 in stock</option>
          <option>out of stock</option>
        </Select>
      </Cell>
      <Cell small>
        <Label>Display count</Label>
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
      <Cell>
        {pageCount.state === 'hasValue' ? (
          <Pagination
            page={config.page}
            pageCount={pageCount.contents}
            onChange={handleSetPage}
          />
        ) : (
          <Pagination page={config.page} pageCount={99999} dummy />
        )}
      </Cell>
    </Grid>
  );
});

export default QueryConfig;
