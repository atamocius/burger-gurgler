import React, { useState, forwardRef } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Fab from '@material-ui/core/Fab';

import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';

import FoodMachine from './food-machine';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    flex: 1,
  },
  counter: {
    position: 'relative',
    height: '100%',
  },
  fabContainer: {
    position: 'absolute',
    top: theme.spacing(2),
    left: '50%',
  },
  fab: {
    left: '-50%',
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function CheckoutCounter({ open, onExit }) {
  const classes = useStyles();

  const handleClaimOrder = () => {
    console.log('CLAIM ORDER!!');
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onExit}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Checkout
          </Typography>
          <IconButton
            edge='start'
            color='inherit'
            onClick={onExit}
            aria-label='close'
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <div className={classes.counter}>
        <FoodMachine />
        <div className={classes.fabContainer}>
          <Fab
            className={classes.fab}
            variant='extended'
            color='secondary'
            onClick={handleClaimOrder}
          >
            <FastfoodRoundedIcon className={classes.extendedIcon} />
            Claim Order
          </Fab>
        </div>
      </div>
    </Dialog>
  );
}

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});
