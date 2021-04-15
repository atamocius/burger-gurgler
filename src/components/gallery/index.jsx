import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import ItemCard from '../item-card';

const useStyles = makeStyles(theme => ({
  root: () => ({
    width: '100%',
    margin: 0,
    padding: theme.spacing(),
  }),
}));

export default function Gallery({ items }) {
  const classes = useStyles();

  const cards = items.map(x => (
    <Grid item xl>
      <ItemCard key={x.name} data={x} />
    </Grid>
  ));

  return (
    <Grid className={classes.root} container spacing={2} justify='center'>
      {cards}
    </Grid>
  );
}
