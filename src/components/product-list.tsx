import React from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { addTransitionEndListerner } from '../utils/animationUtils';
import productQueryState from '../store/productQueryState';
import productListState from '../store/productListState';
import ProductListItem from './product-list-item';
import Pagination from './pagination';

const Container = styled.div`
  max-width: 100%;
  margin: 1rem 0;

  transition-duration: 2s;
  &.fade-enter {
    opacity: 0;
    transform: translateX(-32px);
  }
  &.fade-enter-active {
    opacity: 1;
    transform: translateX(0%);
  }
  &.fade-exit {
    opacity: 1;
    transform: translateX(0%);
  }
  &.fade-exit-active {
    opacity: 0;
    transform: translateX(32px);
  }
  &.fade-enter-active,
  &.fade-exit-active {
    transition: opacity 200ms, transform 200ms;
  }
`;

const List = styled.ul``;

const ProductList: React.FC = React.memo(() => {
  const [config, setConfig] = useRecoilState(productQueryState);
  const products = useRecoilValueLoadable(productListState);

  const handlePageSelection = (page: number) => {
    setConfig({ ...config, page });
  };

  const renderList = () => {
    switch (products.state) {
      case 'hasValue':
        return products.contents.products.length > 0 ? (
          <div>
            <List>
              {products.contents.products.map((p) => (
                <ProductListItem key={p.id} product={p} />
              ))}
            </List>
          </div>
        ) : (
          <span>🕵️‍♀️ No products matched your search criteria</span>
        );
      case 'loading':
        return <div>Loading...</div>;
      case 'hasError':
        return <div>😢 An error occurred.</div>;
    }
  };

  return (
    <SwitchTransition>
      <CSSTransition
        key={products.state + config.category + config.page}
        addEndListener={addTransitionEndListerner}
        classNames="fade"
      >
        <Container>{renderList()}</Container>
      </CSSTransition>
    </SwitchTransition>
  );
});

export default ProductList;
