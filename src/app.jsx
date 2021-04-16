import React, { useReducer, useEffect } from 'react';

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

import * as inventory from './logic/inventory';
import * as cart from './logic/cart';

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

  const [inventoryState, inventoryDispatch] = useReducer(
    inventory.reducer,
    inventory.initialState
  );
  const [cartState, cartDispatch] = useReducer(cart.reducer, cart.initialState);

  const handleCheckout = () => {
    console.log('CHECKOUT!');
  };

  const handleItemAddToCart = itemName => {
    // console.log(itemName);

    inventoryDispatch(inventory.removeStock(itemName));

    if (inventoryState.error) {
      // TODO: Move error snackbar/toast here!
      console.log('boom');
      return;
    }

    const { unitPrice } = inventoryState.items[itemName];

    cartDispatch(cart.addUnit(itemName, unitPrice));

    // console.log(inventoryState.error);
  };

  // Initialize inventory
  useEffect(() => {
    inventoryDispatch(inventory.load());
  }, []);

  const keys = Object.keys(inventoryState.items);
  keys.forEach(key => {
    console.log(`${key}: ${inventoryState.items[key].units}`);
  });
  console.log(cartState);

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

      <Gallery
        inventory={inventoryState}
        cart={cartState}
        onItemAddToCart={handleItemAddToCart}
      />
      <Cart onCheckout={handleCheckout} />
    </ThemeProvider>
  );
}
