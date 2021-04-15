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

export default function Gallery({ items, onItemAddToCart }) {
  const classes = useStyles();

  const cards = items.map(x => (
    <Grid key={x.name} item xl>
      <ItemCard data={x} onAddToCart={() => onItemAddToCart(x.name)} />
    </Grid>
  ));

  return (
    <Grid className={classes.root} container spacing={2} justify='center'>
      {cards}
    </Grid>
  );
}
