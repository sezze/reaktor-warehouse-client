import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import productQueryState from '../store/productQueryState';
import productListState from '../store/productListState';
import ProductListItem from './product-list-item';
import Placeholder from '../styles/placeholder';
import { range } from '../utils/mathUtils';
import Product from '../types/Product';

const Container = styled.div`
  max-width: 100%;
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
  const config = useRecoilValue(productQueryState);
  const products = useRecoilValueLoadable(productListState);

  useEffect(() => {
    if (products.state === 'hasValue') {
      setCachedProducts(products.contents.products);
    }
  }, [products]);

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

  return <Container>{renderList()}</Container>;
});

export default ProductList;
