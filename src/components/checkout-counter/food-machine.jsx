import React, { Suspense } from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

import SceneLighting from './scene-lighting';
import Floor from './floor';

import PhysicalFood from './physical-food';
import Burger from '../models/Burger';

function PhysBurger({ position, rotation, debug }) {
  return (
    <PhysicalFood
      debug={debug}
      model={Burger}
      modelScale={3.7}
      modelPosition={[0, -0.5, 0]}
      collider='cylinder'
      colliderArgs={[0.62, 0.62, 0.93]}
      position={position}
      rotation={rotation}
    />
  );
}

export default function FoodMachine({}) {
  return (
    <Canvas
      shadows
      gl={{ alpha: false }}
      camera={{ fov: 90, position: [0, 7, 10] }}
      // camera={{ fov: 50, position: [0, 0, 1] }}
    >
      <SceneLighting />

      <Suspense fallback={null}>
        <Physics>
          <Floor />

          <PhysicalFood
            model={Burger}
            modelScale={3.7}
            modelPosition={[0, -0.5, 0]}
            collider='cylinder'
            colliderArgs={[0.62, 0.62, 0.93]}
          />
          <PhysBurger position={[0, 10, -2]} debug />
          <PhysBurger position={[0, 20, -2]} />
        </Physics>
      </Suspense>

      <OrbitControls />
    </Canvas>
  );
}
