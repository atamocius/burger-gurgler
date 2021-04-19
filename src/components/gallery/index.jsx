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

export default function Gallery({ inventory, cart, onItemAddToCart }) {
  const classes = useStyles();

  const cards = Object.values(inventory).map(x => {
    const cartItem = cart[x.name];
    const quantity = cartItem ? cartItem.quantity : 0;
    const data = { ...x, quantity };
    return (
      <Grid key={x.name} item>
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
