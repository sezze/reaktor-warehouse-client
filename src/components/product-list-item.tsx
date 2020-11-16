import React from 'react';
import styled from 'styled-components';
import Availability from '../types/Availability';
import Product from '../types/Product';

const availabilityColors: Record<Availability, string> = {
  INSTOCK: '#00f23d',
  LESSTHAN10: '#f2a500',
  OUTOFSTOCK: '#f24500',
  UNKNOWN: '#8b8b8b',
};

interface ProductListItemProps {
  product: Product;
}

const ListItem = styled.li`
  display: flex;
  align-items: center;
  height: 1.5rem;
  padding: 2px 0;
  gap: 1ch;
`;

const NameSpan = styled.span`
  flex-grow: 1fr;
`;

const AvailabilitySpan = styled.span`
  flex-grow: 1fr;
  border-radius: ${({ theme }) => theme.borderRadius};

  &::before {
    content: '';
    padding: 0.4em;
    border-radius: 50%;
    display: inline-block;
    background-color: ${availabilityColors.INSTOCK};
    margin-right: 0.5ch;
  }
`;

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => (
  <ListItem>
    <NameSpan>{product.name}</NameSpan>
    <AvailabilitySpan>{product.availability}</AvailabilitySpan>
  </ListItem>
);

export default ProductListItem;
