import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  borderRadius: '4px',
  shadow: (offset) => `0 ${offset}px ${offset * 2}px ${lightTheme.shadowColor}`,
  shadowColor: 'rgba(0,0,0,0.2)',
  accent: '#00ffc3',
  surface: '#ffffff',
  text: '#000000',
  placeholderColor: 'rgba(90,90,90,0.2)',
  component: {
    normal: '#ededed',
    hover: '#e3e3e3',
    active: '#d4d4d4',
    text: '#000000',
  },
};

export default lightTheme;
