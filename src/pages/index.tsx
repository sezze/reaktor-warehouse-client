import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Content from '../styles/content';
import ProductList from '../components/product-list';
import QueryConfig from '../components/query-config';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Content>
        <QueryConfig />
        <ProductList />
      </Content>
    </Layout>
  );
};

export default IndexPage;
