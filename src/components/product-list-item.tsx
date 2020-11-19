import React from 'react';
import styled from 'styled-components';
import sizes from '../constants/sizes';
import colorPreviewPalette from '../constants/color-preview-palette';
import { formatCurrency } from '../utils/formatUtils';
import Availability from '../types/Availability';
import Product from '../types/Product';
import Alert from './alert';

interface ProductListItemProps {
  product: Product;
}

const ListItem = styled.li`
  display: grid;
  align-items: center;
  height: 2rem;
  padding: 0;
  margin: 0;
  gap: 1ch;
  grid-template-columns: 1rem 100px 1fr;
  box-sizing: border-box;
  border-bottom: solid 2px transparent;

  &:hover {
    border-color: ${({ theme }) => theme.component.normal};
  }

  @media ${sizes.medium} {
    grid-template-columns: 1rem 100px 3fr 1fr;
  }

  @media ${sizes.large} {
    grid-template-columns: 1rem 120px 3fr 100px 1fr;
  }

  @media ${sizes.extraLarge} {
    grid-template-columns: 1rem 120px 4fr 100px 1fr 80px;
  }
`;

const ColorPreview = styled.div`
  width: 0.75rem;
  height: 1rem;
  &:first-child:last-child {
    width: 1rem;
  }
`;

const ColorList = styled.div`
  display: inline-flex;
  width: fit-content;
  box-shadow: ${({ theme }) => theme.shadow(2)};
  background-color: ${({ theme }) => theme.shadowColor};
  border-radius: 99px;
  overflow: hidden;
  gap: 0px;
`;

const AvailabilityColumn = styled.div``;

const NameColumn = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AlertColumn = styled.div`
  display: flex;
  justify-content: center;
`;

const CurrencyColumn = styled.div`
  display: none;
  @media ${sizes.large} {
    display: block;
  }
`;

const ManufacturerColumn = styled.div`
  display: none;
  @media ${sizes.medium} {
    display: block;
  }
`;

const ColorColumn = styled.div`
  display: none;
  @media ${sizes.extraLarge} {
    display: flex;
  }
  justify-content: center;
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
    <AvailabilityColumn>{availabilityLabels[product.availability]}</AvailabilityColumn>
    <NameColumn>{product.name}</NameColumn>
    <CurrencyColumn>{formatCurrency(product.price)}</CurrencyColumn>
    <ManufacturerColumn>{product.manufacturer}</ManufacturerColumn>
    <ColorColumn>
      <ColorList>
        {product.color.map((c) => (
          <ColorPreview
            key={c}
            title={c}
            style={{ backgroundColor: colorPreviewPalette[c] ?? c }}
          />
        ))}
      </ColorList>
    </ColorColumn>
  </ListItem>
);

export default ProductListItem;
