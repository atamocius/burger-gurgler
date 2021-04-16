import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  toast: {
    [theme.breakpoints.down('xs')]: {
      bottom: 90,
    },
  },
}));

export default function StatusMessage({ msg }) {
  const classes = useStyles();

  const [toast, setToast] = useState({
    open: false,
    text: '',
  });

  useEffect(() => {
    if (msg) {
      setToast({ open: true, text: msg.text });
    }
  }, [msg]);

  const handleCloseError = () => {
    setToast({ ...toast, open: false });
  };

  return (
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
  );
}
