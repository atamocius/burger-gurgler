import React from 'react';

import { usePlane } from '@react-three/cannon';

export default function Floor(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach='geometry' args={[1000, 1000]} />
      <meshStandardMaterial attach='material' color='#ffebcf' />
    </mesh>
  );
}
