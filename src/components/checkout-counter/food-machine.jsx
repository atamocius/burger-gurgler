import React, { Suspense } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Burder from '../models/Burger';

const useStyles = makeStyles(theme => ({
  root: {},
}));

function Lighting() {
  return (
    <>
      <ambientLight intensity={1.35} />

      {/* Key */}
      <spotLight intensity={1.0} position={[-2, 0, 5]} color='#ffa4ad' />
      {/* Fill */}
      <spotLight intensity={1.6} position={[2, 1, 4]} color='#ffdee1' />
      {/* Rim */}
      <spotLight intensity={1.8} position={[1, 4, -2]} color='#fff5ab' />
    </>
  );
}

export default function FoodMachine({}) {
  return (
    <Canvas camera={{ fov: 50, position: [0, 0, 1] }}>
      <color attach='background' args={['#ffebcf']} />

      {/* <hemisphereLight intensity={0.35} />
      <spotLight intensity={2.0} position={[10, 20, 20]} />
      <spotLight intensity={1.0} position={[0, 0, 10]} /> */}

      <Lighting />

      <Suspense fallback={null}>
        {/* <group position={position} scale={scale} rotation={rotation}> */}
        <Burder />
        {/* </group> */}
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
