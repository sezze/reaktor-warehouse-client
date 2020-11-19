import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import productQueryState from '../store/productQueryState';
import productListState from '../store/productListState';
import ProductListItem from './product-list-item';
import Placeholder from '../styles/placeholder';
import { range } from '../utils/mathUtils';
import Product from '../types/Product';
import Pagination from './pagination';
import pageCountState from '../store/pageCountState';

const Container = styled.div`
  max-width: 100%;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

const GhostContainer = styled.div`
  user-select: none;
  pointer-events: none;
  opacity: 0.7;
`;

const renderProductList = (products: Product[]) => (
  <List>
    {products.map((p) => (
      <ProductListItem key={p.id} product={p} />
    ))}
  </List>
);

const renderPlaceholderList = (count: number) => (
  <List>
    {range(count).map((i) => (
      <Placeholder
        key={i}
        height="1rem"
        width="calc(90% - 1rem)"
        margin="0.5rem 0 0.5rem calc(1rem + 1ch)"
      />
    ))}
  </List>
);

const ProductList: React.FC = React.memo(() => {
  const [cachedProducts, setCachedProducts] = useState<Product[] | undefined>();
  const [config, setConfig] = useRecoilState(productQueryState);
  const products = useRecoilValueLoadable(productListState);
  const pageCount = useRecoilValueLoadable(pageCountState);

  useEffect(() => {
    if (products.state === 'hasValue') {
      setCachedProducts(products.contents.products);
    }
  }, [products]);

  const handleSetPage = (page: number) => {
    setConfig((config) => ({ ...config, page }));
  };

  const renderPagination = () => (
    <PaginationContainer>
      {pageCount.state === 'hasValue' ? (
        <Pagination
          page={config.page}
          pageCount={pageCount.contents}
          onChange={handleSetPage}
        />
      ) : (
        <Pagination page={config.page} pageCount={99999} dummy />
      )}
    </PaginationContainer>
  );

  const renderList = () => {
    switch (products.state) {
      case 'hasValue':
        return products.contents.products.length > 0 ? (
          renderProductList(products.contents.products)
        ) : (
          <span>🕵️‍♀️ No products matched your search criteria</span>
        );
      case 'loading':
        return cachedProducts && cachedProducts.length > 0 ? (
          <GhostContainer>{renderProductList(cachedProducts)}</GhostContainer>
        ) : (
          renderPlaceholderList(config.displayCount)
        );
      case 'hasError':
        return <div>😢 An error occurred.</div>;
    }
  };

  return (
    <Container>
      {renderPagination()}
      {renderList()}
      {renderPagination()}
    </Container>
  );
});

export default ProductList;
