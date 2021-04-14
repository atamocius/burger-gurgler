import React, { Suspense, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Canvas } from '@react-three/fiber';

import RotatingModel from './rotating-model';

const useStyles = makeStyles({
  root: {
    maxWidth: 260,
  },
  media: {
    height: 220,
  },
});

export default function ItemCard({ data }) {
  const { name, model: Model, position, scale, rotation } = data;

  const classes = useStyles();

  const [hovered, setHover] = useState(false);

  return (
    <Card
      className={classes.root}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <CardActionArea>
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
          <Typography gutterBottom variant='h5' component='h2'>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size='small' color='primary'>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
