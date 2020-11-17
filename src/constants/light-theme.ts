import { DefaultTheme } from 'styled-components';

const darkText = '#1a1a1a';

const theme: DefaultTheme = {
  borderRadius: '4px',
  shadow: (offset) => `0 ${offset}px ${offset * 2}px ${theme.shadowColor}`,
  shadowColor: 'rgba(0,0,0,0.2)',
  accent: '#42ffdf',
  surface: '#ffffff',
  component: {
    normal: '#ededed',
    hover: '#e3e3e3',
    active: '#d4d4d4',
  },
};

export default theme;
