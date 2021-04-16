import React, { Suspense, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

import { Canvas } from '@react-three/fiber';

import RotatingModel from './rotating-model';

import { toPesoFormat } from '../../utils/formatting';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 260,
  },
  media: {
    height: 220,
  },
  name: {
    marginRight: theme.spacing(1),
  },
  addToCartBtn: {
    width: '100%',
  },
}));

const defaults = {
  position: [0, 0, 0],
  scale: 1,
  rotation: [Math.PI * 0.1, Math.PI * 0.3, Math.PI * 0.07],
};

export default function ItemCard({ data, onAddToCart }) {
  const {
    name,
    unitPrice,
    quantity,
    view: {
      model: Model,
      position = defaults.position,
      scale = defaults.scale,
      rotation = defaults.rotation,
    },
  } = data;

  const quantityView =
    quantity > 0 ? <Chip color='secondary' label={`x ${quantity}`} /> : null;

  const classes = useStyles();

  const [hovered, setHover] = useState(false);

  return (
    <Card
      className={classes.root}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      raised={hovered}
    >
      <CardActionArea onClick={onAddToCart}>
        <CardMedia className={classes.media} title={name}>
          <Canvas camera={{ fov: 50, position: [0, 0, 1] }}>
            <spotLight intensity={2.0} position={[10, 20, 20]} />
            <spotLight intensity={1.0} position={[0, 0, 10]} />

            <Suspense fallback={null}>
              <RotatingModel animate={hovered}>
                <group position={position} scale={scale} rotation={rotation}>
                  <Model />
                </group>
              </RotatingModel>
            </Suspense>
          </Canvas>
        </CardMedia>

        <CardContent>
          <Grid container direction='row' alignItems='center'>
            <Typography className={classes.name} variant='h5' component='h2'>
              {name}
            </Typography>
            {quantityView}
          </Grid>
          <Typography variant='body2' color='textSecondary' component='p'>
            {toPesoFormat(unitPrice)}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button
          className={classes.addToCartBtn}
          size='small'
          color='primary'
          variant='outlined'
          onClick={onAddToCart}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
