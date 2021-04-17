import React from 'react';

import { useBox, useSphere, useCylinder } from '@react-three/cannon';

export default function PhysicalFood({
  collider,
  colliderArgs,
  mass = 1,
  position = [0, 7, 0],
  rotation = [0.4, 0.2, 0.5],
  model: Model,
  modelScale,
  modelPosition,
  debug,
}) {
  let boundingType;

  switch (collider) {
    case 'box':
      boundingType = useBox;
      break;
    case 'sphere':
      boundingType = useSphere;
      break;
    case 'cylinder':
      boundingType = useCylinder;
      break;
    default:
      new Error(`Unsupported PhysicsModel type ${collider}`);
  }

  const [ref] = boundingType(() => ({
    mass,
    args: colliderArgs,
    position,
    rotation,
  }));

  if (!debug) {
    return (
      <group ref={ref}>
        <Model scale={modelScale} position={modelPosition} />
      </group>
    );
  }

  let bufferGeom;

  switch (collider) {
    case 'box':
      bufferGeom = <boxBufferGeometry attach='geometry' args={colliderArgs} />;
      break;
    case 'sphere':
      bufferGeom = (
        <sphereBufferGeometry attach='geometry' args={colliderArgs} />
      );
      break;
    case 'cylinder':
      bufferGeom = (
        <cylinderBufferGeometry attach='geometry' args={colliderArgs} />
      );
      break;
    default:
      new Error(`Unsupported PhysicsModel type ${collider}`);
  }

  return (
    <group ref={ref}>
      <Model renderOrder={0} scale={modelScale} position={modelPosition} />
      <mesh renderOrder={1}>
        {bufferGeom}
        <meshStandardMaterial
          wireframe
          attach='material'
          color='blue'
          depthTest={false}
        />
      </mesh>
    </group>
  );
}
