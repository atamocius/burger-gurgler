import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';

import CardGrid from './card-grid';

const useStyles = makeStyles(theme => ({
  toast: {
    [theme.breakpoints.down('xs')]: {
      bottom: 90,
    },
  },
}));

export default function Gallery({ inventory, cart, onItemAddToCart }) {
  const classes = useStyles();

  const [toast, setToast] = useState({
    open: false,
    text: '',
  });

  const { items, error } = inventory;
  const { items: cartItems } = cart;

  useEffect(() => {
    if (error) {
      setToast({ open: true, text: error.msg });
    }
  }, [error]);

  const handleCloseError = () => {
    setToast({ ...toast, open: false });
  };

  return (
    <>
      <CardGrid
        items={items}
        cartItems={cartItems}
        onItemAddToCart={onItemAddToCart}
      />
      <Snackbar
        className={classes.toast}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={toast.open}
        autoHideDuration={6000}
        onClose={handleCloseError}
        message={toast.text}
        action={
          <Button color='secondary' size='small' onClick={handleCloseError}>
            Dismiss
          </Button>
        }
      />
    </>
  );
}
