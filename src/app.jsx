import React, { useState, useReducer, useEffect } from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { red, orange } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';

import TitleBar from './components/title-bar';
import Gallery from './components/gallery';
import Cart from './components/cart';
import StatusMessage from './components/status-message';
import CheckoutCounter from './components/checkout-counter';

import { Stats } from '@react-three/drei';

import data from './data/items';
import * as food from './logic/food';

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
  const [checkooutOpen, setCheckoutOpen] = useState(false);
  const [foodState, foodDispatch] = useReducer(food.reducer, food.initialState);

  const handleCheckout = () => {
    console.log('CHECKOUT!');
    setCheckoutOpen(true);
  };

  const handleExitCheckout = () => {
    console.log('DONE!');
    setCheckoutOpen(false);
  };

  const handleItemAddToCart = itemName => {
    foodDispatch(food.addToCart(itemName));
  };

  const handleAddUnitToCart = itemName => {
    foodDispatch(food.addToCart(itemName));
  };

  const handleRemoveUnitFromCart = itemName => {
    foodDispatch(food.removeFromCart(itemName));
  };

  // Initialize data
  useEffect(() => {
    foodDispatch(food.load(data));
  }, []);

  const { inventory, cart, error } = foodState;

  // const keys = Object.keys(foodState.inventory);
  // keys.forEach(key => {
  //   console.log(`${key}: ${foodState.inventory[key].units}`);
  // });
  // console.log(foodState);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <TitleBar />

      <Gallery
        inventory={inventory}
        cart={cart}
        onItemAddToCart={handleItemAddToCart}
      />
      <Cart
        items={cart}
        onCheckout={handleCheckout}
        onAddUnit={handleAddUnitToCart}
        onRemoveUnit={handleRemoveUnitFromCart}
      />
      <CheckoutCounter
        cart={cart}
        open={checkooutOpen}
        onExit={handleExitCheckout}
      />

      <StatusMessage msg={error} />

      <Stats showPanel={0} />
    </ThemeProvider>
  );
}
