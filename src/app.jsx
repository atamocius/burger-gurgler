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
import StatusMessage from './components/status-message';

import * as food from './logic/food';

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
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function App() {
  const classes = useStyles();

  const [foodState, foodDispatch] = useReducer(food.reducer, food.initialState);

  const handleCheckout = () => {
    console.log('CHECKOUT!');
  };

  const handleItemAddToCart = itemName => {
    foodDispatch(food.addToCart(itemName));
  };

  // Initialize inventory
  useEffect(() => {
    foodDispatch(food.load());
  }, []);

  const keys = Object.keys(foodState.inventory);
  keys.forEach(key => {
    console.log(`${key}: ${foodState.inventory[key].units}`);
  });
  console.log(foodState);

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
        inventory={foodState.inventory}
        cart={foodState.cart}
        onItemAddToCart={handleItemAddToCart}
      />
      <Cart onCheckout={handleCheckout} />

      <StatusMessage msg={foodState.error} />
    </ThemeProvider>
  );
}
