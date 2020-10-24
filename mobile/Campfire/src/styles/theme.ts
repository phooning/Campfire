import { createTheme } from '@shopify/restyle';
import {
  DefaultTheme,
  DarkTheme,
  Theme as NavigationTheme,
} from '@react-navigation/native';

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  black: '#0B0B0B',
  white: '#F0F2f3',
  absWhite: '#FFFFFF',
  absBlack: '#000000',
  faded: '#7e7e7e',
  fadedBackground: '#303030',
};

const theme = createTheme({
  isDarkMode: false,
  colors: {
    primary: palette.purplePrimary,
    text: palette.black,
    mainBackground: palette.white,
    mainForeground: palette.absWhite,
    cardPrimaryBackground: palette.purplePrimary,
    faded: palette.faded,
    fadedBackground: palette.fadedBackground,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
    largeTablet: 1024,
  },
  textVariants: {
    header: {
      // fontFamily: 'ShopifySans-Bold',
      fontWeight: 'bold',
      fontSize: 34,
      lineHeight: 42.5,
      color: 'text',
    },
    subheader: {
      // fontFamily: 'ShopifySans-SemiBold',
      fontWeight: '600',
      fontSize: 28,
      lineHeight: 36,
      color: 'text',
    },
    body: {
      // fontFamily: 'ShopifySans',
      fontSize: 16,
      lineHeight: 24,
      color: 'text',
    },
  },
  iconVariants: {
    header: {
      size: 20,
    }
  }
});

export type Theme = typeof theme;

export const darkTheme: Theme = {
  ...theme,
  isDarkMode: true,
  colors: {
    ...theme.colors,
    primary: palette.purplePrimary,
    text: palette.white,
    mainBackground: palette.absBlack,
    mainForeground: palette.black,
  },
};

// Colors for react-navigation. Dependent on Restyling above.
export const navigationTheme: NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.mainBackground,
    card: theme.colors.mainForeground,
    primary: theme.colors.primary,
    text: theme.colors.text,
  },
};

export const navigationDarkTheme: NavigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: darkTheme.colors.mainBackground,
    card: darkTheme.colors.mainForeground,
    primary: darkTheme.colors.primary,
    text: darkTheme.colors.text,
  },
};

export default theme;
