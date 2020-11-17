import React from 'react';
import styled from 'styled-components';
import Availability from '../types/Availability';
import Product from '../types/Product';
import { formatCurrency } from '../utils/formatUtils';
import Alert from './alert';

interface ProductListItemProps {
  product: Product;
}

const ListItem = styled.li`
  display: grid;
  grid-template-columns: 32px 2fr 4fr 1fr 1fr 2fr;
  align-items: center;
  height: 1.5rem;
  padding: 2px 0;
  gap: 1ch;
`;

const ColorPreview = styled.div`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: solid 2px ${({ theme }) => theme.palette.component.main.bg};
  transition: border-radius 0.1s, transform 0.1s;
  &:hover {
    border-radius: ${({ theme }) => theme.borderRadius};
    transform: scale(1.1);
  }
`;

const ColorList = styled.div``;

const Column = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AlertColumn = styled(Column)`
  display: flex;
  justify-content: center;
`;

const CurrencyColumn = styled(Column)`
  text-align: right;
`;

const availabilityColors: Record<Availability, string> = {
  INSTOCK: 'green',
  LESSTHAN10: 'orange',
  OUTOFSTOCK: 'red',
  UNKNOWN: 'purple',
};

const availabilityLabels: Record<Availability, string> = {
  INSTOCK: 'in stock',
  LESSTHAN10: '< 10 in stock',
  OUTOFSTOCK: 'out of stock',
  UNKNOWN: 'unknown',
};

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => (
  <ListItem>
    <AlertColumn>
      {product.availability !== 'INSTOCK' ? (
        <Alert color={availabilityColors[product.availability]} />
      ) : null}
    </AlertColumn>
    <Column>{availabilityLabels[product.availability]}</Column>
    <Column>{product.name}</Column>
    <CurrencyColumn>{formatCurrency(product.price)}</CurrencyColumn>
    <Column>{product.manufacturer}</Column>
    <ColorList>
      {product.color.map((c) => (
        <ColorPreview title={c} style={{ backgroundColor: c }} />
      ))}
    </ColorList>
  </ListItem>
);

export default ProductListItem;
