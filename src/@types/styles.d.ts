import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  // allow configuration using `createGlobalStyle`
  export type DefaultTheme = ThemeType
}