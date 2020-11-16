import { DefaultTheme } from 'styled-components';

const darkText = '#1a1a1a';

const theme: DefaultTheme = {
  borderRadius: '4px',
  shadow: (offset) => `0 ${offset}px ${offset * 2}px ${theme.palette.shadow}`,
  palette: {
    shadow: 'rgba(0,0,0,0.2)',
    accent: {
      main: {
        bg: '#42ffdf',
        text: darkText,
      },
      alt: {
        bg: '#00f5cc',
        text: darkText,
      },
    },
    surface: {
      main: {
        bg: '#ffffff',
        text: darkText,
      },
      alt: {
        bg: '#f7f7f7',
        text: darkText,
      },
    },
    component: {
      main: {
        bg: '#ededed',
        text: darkText,
      },
      alt: {
        bg: '#e0e0e0',
        text: darkText,
      },
    },
  },
};

export default theme;
