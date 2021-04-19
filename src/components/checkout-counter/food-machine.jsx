import React, { Suspense, useState, useEffect } from 'react';

import { Vector3 } from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

import SceneLighting from './scene-lighting';
import Floor from './floor';

import PhysicalFood from './physical-food';
// import MMM from '../models/Salad';

// function PhysBurger({ position, rotation, debug }) {
//   return (
//     <PhysicalFood
//       debug={debug}
//       model={MMM}
//       position={position}
//       rotation={rotation}
//       /////
//       mass={1}
//       collider='cylinder'
//       colliderArgs={[1.12, 0.82, 0.94]}
//       modelScale={4}
//       modelPosition={[0, -0.48, 0]}
//       modelRotation={[0, 0, 0]}
//     />
//   );
// }

const DEBUG = false;

export default function FoodMachine({ cart, drop }) {
  const [items, setItems] = useState([]);

  useEffect(async () => {
    if (!drop) {
      return;
    }

    for (let value of orderSequence(cart)) {
      setItems(prevItems => [...prevItems, value]);
      await new Promise(resolve => setTimeout(resolve, 600));
    }
  }, [drop]);

  return (
    <Canvas
      shadows
      gl={{ alpha: false }}
      camera={{ fov: 65, position: [0, 7, 10] }}
      // camera={{ fov: 50, position: [0, 0, 1] }}
    >
      <SceneLighting />

      <Suspense fallback={null}>
        <Physics>
          <Floor />

          {/* <PhysBurger debug={DEBUG} position={[0, 2, 0]} rotation={[0, 0, 0]} /> */}

          {items}
        </Physics>
      </Suspense>

      <OrbitControls target={new Vector3(0, 3, 0)} />
      {/* <OrbitControls /> */}
    </Canvas>
  );
}

function* orderSequence(cart) {
  const items = Object.values(cart).flatMap(({ name, quantity, physics }) =>
    Array.from({ length: quantity }, (_, i) => (
      <PhysicalFood key={`${name}_${i}`} debug={DEBUG} {...physics} />
    ))
  );

  for (let i = 0; i <= items.length; i++) {
    yield items[i];
  }
}
