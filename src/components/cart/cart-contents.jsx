import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { toPesoFormat } from '~/utils/formatting';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
  },
  quantity: {
    marginRight: theme.spacing(2),
  },
}));

export default function CartContents({
  rows,
  open,
  onClose,
  onCheckout,
  onAddUnit,
  onRemoveUnit,
}) {
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
                  <TableCell>
                    <QuantitySpinner
                      classes={classes}
                      name={row.name}
                      quantity={row.quantity}
                      onAddUnit={onAddUnit}
                      onRemoveUnit={onRemoveUnit}
                    />
                  </TableCell>
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
        <Button autoFocus onClick={onClose} color='primary'>
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

function calcTotal(rows) {
  return rows.reduce((acc, row) => acc + row.quantity * row.unitPrice, 0);
}

function QuantitySpinner({ classes, name, quantity, onAddUnit, onRemoveUnit }) {
  return (
    <Grid container justify='flex-end' alignItems='center'>
      <span className={classes.quantity}>{quantity}</span>
      <ButtonGroup color='primary' aria-label='outlined primary button group'>
        <Button onClick={() => onRemoveUnit(name)}>
          <RemoveIcon fontSize='small' />
        </Button>
        <Button onClick={() => onAddUnit(name)}>
          <AddIcon fontSize='small' />
        </Button>
      </ButtonGroup>
    </Grid>
  );
}
