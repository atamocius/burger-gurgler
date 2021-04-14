import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import ItemCard from './components/item-card';

import * as models from './components/models';

const useStyles = makeStyles({
  root: {},
});

const pizzaData = {
  name: 'Pizza',
  model: models.Pizza,
  position: [0, 0, 0],
  scale: 1,
  rotation: [Math.PI * 0.1, Math.PI * 0.3, Math.PI * 0.07],
};

const tacoData = {
  name: 'Taco',
  model: models.Taco,
  position: [0, -0.15, 0],
  scale: 1.7,
  rotation: [Math.PI * 0.1, Math.PI * 0.35, Math.PI * 0.07],
};

const burgerData = {
  name: 'Burger',
  model: models.Burger,
  position: [0, -0.2, 0],
  scale: 1.7,
  rotation: [Math.PI * 0.05, Math.PI * 0.3, Math.PI * 0.0],
};

export default function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />

      <AppBar position='sticky'>
        <Toolbar>
          <Typography variant='h6'>Burger Gurgler</Typography>
        </Toolbar>
      </AppBar>

      <ItemCard data={pizzaData} />
      <ItemCard data={tacoData} />
      <ItemCard data={burgerData} />
    </>
  );
}
