import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    fontSize: '14px',

    position: 'fixed',
    top: '0.6em',
    right: '0.8em',
    zIndex: 9999,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  link: {
    textDecoration: 'none',
    color: 'rgb(224, 113, 113)',
  },
});

export default function GitHubLink() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <a
        className={classes.link}
        href='https://github.com/atamocius/burger-gurgler'
      >
        github
      </a>
    </div>
  );
}
