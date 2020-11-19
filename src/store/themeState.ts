import { atom } from 'recoil';
import { DefaultTheme } from 'styled-components';
import lightTheme from '../constants/light-theme';

const themeState = atom<DefaultTheme>({
  key: 'themeState',
  default: lightTheme,
});

export default themeState;
