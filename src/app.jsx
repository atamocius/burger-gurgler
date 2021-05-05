import React from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { red, orange } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';

import TitleBar from './components/title-bar';
import GitHubLink from './components/github-link';

import FoodMenu from './pages/food-menu';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  palette: {
    background: {
      default: '#ffebcf',
    },
    primary: {
      main: red[700],
    },
    secondary: {
      main: orange[400],
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <TitleBar />
      <FoodMenu />

      <GitHubLink />
    </ThemeProvider>
  );
}
