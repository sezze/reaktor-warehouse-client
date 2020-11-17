import styled from 'styled-components';
import sizes from '../constants/sizes';

const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 0.5rem;
  box-sizing: border-box;

  @media ${sizes.medium} {
    width: 600px;
    padding: 0;
  }

  @media ${sizes.large} {
    width: 800px;
  }

  @media ${sizes.extraLarge} {
    width: 1000px;
  }
`;

export default Content;
