import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import ItemCard from '../item-card';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: 0,
    padding: theme.spacing(1),
  },
}));

export default function CardGrid({ items, cartItems, onItemAddToCart }) {
  const classes = useStyles();

  const keys = Object.keys(items);
  const itemList = keys.map(key => items[key]);

  const cards = itemList.map(x => {
    const cartItem = cartItems[x.name];
    const quantity = cartItem ? cartItem.quantity : 0;
    const data = { ...x, quantity };
    return (
      <Grid key={x.name} item xl>
        <ItemCard data={data} onAddToCart={() => onItemAddToCart(x.name)} />
      </Grid>
    );
  });

  return (
    <Grid className={classes.root} container spacing={2} justify='center'>
      {cards}
    </Grid>
  );
}
