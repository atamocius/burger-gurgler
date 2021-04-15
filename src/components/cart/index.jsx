import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import CartContents from './cart-contents';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function Cart({ onCheckout }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheckout = () => {
    setOpen(false);
    onCheckout();
  };

  return (
    <>
      <Fab
        className={classes.fab}
        variant='extended'
        color='primary'
        onClick={handleClickOpen}
      >
        <ShoppingCartIcon className={classes.extendedIcon} />
        View Cart (3)
      </Fab>

      <CartContents
        open={open}
        onClose={handleClose}
        onCheckout={handleCheckout}
      />
    </>
  );
}
