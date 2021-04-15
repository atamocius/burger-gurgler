import React, { useReducer } from 'react';

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import { red, orange } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';

import Gallery from './components/gallery';
import Cart from './components/cart';

import items from './data/items';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  palette: {
    primary: {
      main: red[700],
    },
    secondary: {
      main: orange[400],
    },
  },
});

const useStyles = makeStyles(theme => ({
  root: {},
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function App() {
  const classes = useStyles();

  const handleCheckout = () => {
    console.log('CHECKOUT!');
  };

  const handleItemAddToCart = itemName => {
    console.log(itemName);
  };

  // const metaItems = items.map(x => ({ quantity: 0, ...x }));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppBar position='sticky'>
        <Toolbar>
          <FastfoodRoundedIcon
            color='secondary'
            fontSize='large'
            className={classes.extendedIcon}
          />
          <Typography variant='h6'>burgerGURGLER</Typography>
        </Toolbar>
      </AppBar>

      <Gallery items={items} onItemAddToCart={handleItemAddToCart} />
      <Cart onCheckout={handleCheckout} />
    </ThemeProvider>
  );
}
