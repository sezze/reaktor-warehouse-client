import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import categories from '../constants/categories';
import productQueryState from '../store/productQueryState';
import Category from '../types/Category';
import SelectionArea from './selection-area';

const Grid = styled.div`
  display: grid;
`;

const QueryConfig: React.FC = () => {
  const [config, setConfig] = useRecoilState(productQueryState);

  const setCategory = (category: string) =>
    setConfig({ ...config, category: category as Category });

  return (
    <Grid>
      <SelectionArea
        options={categories}
        value={config.category}
        onChange={setCategory}
      />
    </Grid>
  );
};

export default QueryConfig;
