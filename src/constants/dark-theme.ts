import { DefaultTheme } from 'styled-components';

const darkTheme: DefaultTheme = {
  borderRadius: '4px',
  shadow: (offset) => `0 ${offset}px ${offset * 2}px ${darkTheme.shadowColor}`,
  shadowColor: 'rgba(0,0,0,0.7)',
  accent: '#00ffc3',
  surface: '#171717',
  text: '#ededed',
  placeholderColor: 'rgba(70,70,70,0.2)',
  component: {
    normal: '#2e2e2e',
    hover: '#333333',
    active: '#383838',
    text: '#ededed',
  },
};

export default darkTheme;
