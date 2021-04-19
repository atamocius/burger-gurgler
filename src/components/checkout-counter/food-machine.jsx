import React, { Suspense, useState, useEffect } from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

import SceneLighting from './scene-lighting';
import Floor from './floor';

import PhysicalFood from './physical-food';

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
    >
      <SceneLighting />

      <Suspense fallback={null}>
        <Physics>
          <Floor />
          {items}
        </Physics>
      </Suspense>

      <OrbitControls target={[0, 3, 0]} />
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
