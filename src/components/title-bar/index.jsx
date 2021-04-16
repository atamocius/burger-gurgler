import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';

const useStyles = makeStyles(theme => ({
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function TitleBar() {
  const classes = useStyles();
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <FastfoodRoundedIcon
          color='secondary'
          fontSize='large'
          className={classes.extendedIcon}
        />
        <Typography variant='h6'>burgerGURGLER</Typography>
      </Toolbar>
    </AppBar>
  );
}
