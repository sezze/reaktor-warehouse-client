import React, { useState } from 'react';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import styled from 'styled-components';
import categories from '../constants/categories';
import productQueryState from '../store/productQueryState';
import Category from '../types/Category';
import ProductQueryConfg from '../types/ProductQueryConfig';
import { Select, TextInput } from '../styles/input';
import SelectionArea from './selection-area';
import Pagination from './pagination';
import pageCountState from '../store/pageCountState';

const Grid = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr 1fr;
`;

const QueryConfig: React.FC = () => {
  const [config, setConfig] = useRecoilState(productQueryState);
  const pageCount = useRecoilValueLoadable(pageCountState);
  const [newConfig, setNewConfig] = useState<ProductQueryConfg>(config);

  const setCategory = (category: string) => {
    setConfig({ ...config, category: category as Category });
    setNewConfig({ ...newConfig, category: category as Category });
  };

  const setSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewConfig({ ...newConfig, search: e.currentTarget.value });

  const setPage = (page: number) => {
    setConfig({ ...config, page });
  };

  return (
    <Grid>
      <Select>
        <option>all</option>
        <option>&lt; 10 in stock</option>
        <option>out of stock</option>
      </Select>
      <label>
        Display count
        <Select>
          <option>25</option>
          <option>50</option>
          <option>100</option>
          <option>250</option>
          <option>500</option>
          <option>1000</option>
        </Select>
      </label>
      <TextInput
        type="text"
        placeholder="Search"
        value={config.search}
        onChange={setSearch}
      />
      <SelectionArea
        options={categories}
        value={config.category}
        onChange={setCategory}
      />
      {pageCount.state === 'hasValue' ? (
        <Pagination
          page={config.page}
          pageCount={pageCount.contents}
          onChange={setPage}
        />
      ) : (
        <Pagination page={config.page} pageCount={99999} dummy />
      )}
    </Grid>
  );
};

export default QueryConfig;
