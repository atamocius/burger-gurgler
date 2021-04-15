import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Gallery from './components/gallery';

import items from './data/items';

const useStyles = makeStyles({
  root: {},
});

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

      <Gallery items={items} />
    </>
  );
}
