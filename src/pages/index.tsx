import React from 'react';
import { useRecoilState } from 'recoil';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Content from '../components/content';
import ProductList from '../components/product-list';
import SelectionArea from '../components/selection-area';
import productQueryState from '../store/productQueryState';
import categories from '../constants/categories';
import Category from '../types/Category';

const IndexPage: React.FC = () => {
  const [config, setQueryConfig] = useRecoilState(productQueryState);

  const setCategory = (category: string) =>
    setQueryConfig({ category: category as Category });

  return (
    <Layout>
      <SEO title="Home" />
      <Content>
        <SelectionArea options={categories} onChange={setCategory} />
        <ProductList />
      </Content>
    </Layout>
  );
};

export default IndexPage;
