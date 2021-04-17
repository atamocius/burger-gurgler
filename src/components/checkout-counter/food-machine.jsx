import React, { Suspense } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Burder from '../models/Burger';

const useStyles = makeStyles(theme => ({
  root: {},
}));

export default function FoodMachine({}) {
  return (
    <Canvas camera={{ fov: 50, position: [0, 0, 1] }}>
      <spotLight intensity={2.0} position={[10, 20, 20]} />
      <spotLight intensity={1.0} position={[0, 0, 10]} />

      <Suspense fallback={null}>
        {/* <group position={position} scale={scale} rotation={rotation}> */}
        <Burder />
        {/* </group> */}
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
