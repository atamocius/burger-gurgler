import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { toPesoFormat } from '../../utils/formatting';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function calcTotal(rows) {
  return rows.reduce((acc, row) => acc + row.quantity * row.unitPrice, 0);
}

export default function CartContents({ rows, open, onClose, onCheckout }) {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const total = calcTotal(rows);

  return (
    <Dialog
      fullScreen={fullScreen}
      maxWidth='md'
      open={open}
      onClose={onClose}
      aria-labelledby='cart'
    >
      <DialogTitle id='cart'>Cart</DialogTitle>
      <DialogContent>
        <TableContainer>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align='right'>Unit&nbsp;Price</TableCell>
                <TableCell align='right'>Quantity</TableCell>
                <TableCell align='right'>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell align='right'>
                    {toPesoFormat(row.unitPrice)}
                  </TableCell>
                  <TableCell align='right'>{row.quantity}</TableCell>
                  <TableCell align='right'>
                    {toPesoFormat(row.quantity * row.unitPrice)}
                  </TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell colSpan={2} />
                <TableCell colSpan={1} align='right'>
                  Total
                </TableCell>
                <TableCell align='right'>{toPesoFormat(total)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose} color='primary' variant='outlined'>
          Close
        </Button>
        <Button
          autoFocus
          onClick={onCheckout}
          color='primary'
          variant='contained'
        >
          Checkout
        </Button>
      </DialogActions>
    </Dialog>
  );
}
