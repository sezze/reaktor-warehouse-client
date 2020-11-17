import React, { useCallback, useMemo, useState } from 'react';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import styled from 'styled-components';
import categories from '../constants/categories';
import manufacturersState from '../store/manufacturersState';
import productQueryState from '../store/productQueryState';
import Category from '../types/Category';
import ProductQueryConfg from '../types/ProductQueryConfig';
import { Select, TextInput } from '../styles/input';
import SelectionArea from './selection-area';

const Grid = styled.div`
  display: grid;
`;

const QueryConfig: React.FC = () => {
  const [config, setConfig] = useRecoilState(productQueryState);
  const [newConfig, setNewConfig] = useState<ProductQueryConfg>(config);

  const setCategory = (category: string) => {
    setConfig({ ...config, category: category as Category });
    setNewConfig({ ...newConfig, category: category as Category });
  };

  const setSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewConfig({ ...newConfig, search: e.currentTarget.value });

  return (
    <Grid>
      <Select>
        <option>all</option>
        <option>&lt; 10 in stock</option>
        <option>out of stock</option>
      </Select>
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
    </Grid>
  );
};

export default QueryConfig;
