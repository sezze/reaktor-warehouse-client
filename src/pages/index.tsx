import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Content from '../styles/content';
import ProductList from '../components/product-list';
import QueryConfig from '../components/query-config';
import styled from 'styled-components';

const MainContent = styled(Content)`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  > :not(:last-child) {
    margin-bottom: 16px;
  }
`;

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <MainContent>
        <QueryConfig />
        <ProductList />
      </MainContent>
    </Layout>
  );
};

export default IndexPage;
