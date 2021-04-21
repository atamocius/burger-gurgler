import React, { useState, useReducer, useEffect } from 'react';

import Gallery from '~/components/gallery';
import Cart from '~/components/cart';
import StatusMessage from '~/components/status-message';
import CheckoutCounter from '~/components/checkout-counter';

import data from '~/data/items';
import * as food from '~/logic/food';

export default function FoodMenu() {
  const [checkooutOpen, setCheckoutOpen] = useState(false);
  const [foodState, foodDispatch] = useReducer(food.reducer, food.initialState);

  const handleCheckout = () => {
    setCheckoutOpen(true);
  };

  const handleExitCheckout = () => {
    setCheckoutOpen(false);
    // Reset everything
    foodDispatch(food.load(data));
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

  return (
    <>
      <Gallery
        inventory={inventory}
        cart={cart}
        onItemAddToCart={handleAddUnitToCart}
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
    </>
  );
}
