import { Link } from 'gatsby';
import React from 'react';
import Content from '../styles/content';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Content>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>😮 Oops!</h1>
      <p style={{ fontSize: '1.25rem' }}>
        This page doesn't exist! <Link to="/">Click here to go back.</Link>
      </p>
    </Content>
  </Layout>
);

export default NotFoundPage;
