import type { Preview } from "@storybook/react";

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import theme from '../src/util/theme'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;  
  }
`;

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [withThemeFromJSXProvider({
    themes: {
      theme
    },
    defaultTheme: 'theme',
    Provider: ThemeProvider,
    GlobalStyles,
  })]
};

export default preview;
