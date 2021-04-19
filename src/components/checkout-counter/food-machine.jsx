import React, { Suspense } from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

import SceneLighting from './scene-lighting';
import Floor from './floor';
import OrderQueue from './order-queue';

export default function FoodMachine({ cart, claim }) {
  return (
    <Canvas
      shadows
      gl={{ alpha: false }}
      camera={{ fov: 65, position: [0, 7, 10] }}
    >
      <SceneLighting />

      <Suspense fallback={null}>
        <Physics>
          <Floor />
          <OrderQueue cart={cart} claim={claim} />
        </Physics>
      </Suspense>

      <OrbitControls target={[0, 3, 0]} />
    </Canvas>
  );
}
