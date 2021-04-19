import React from 'react';

import { useBox, useSphere, useCylinder } from '@react-three/cannon';

export default function PhysicalFood({
  collider,
  colliderArgs,
  mass = 1,
  position = [0, 12, 0],
  rotation = [0.4, Math.PI * 2 * Math.random(), 0.5],
  model: Model,
  modelScale = 4,
  modelPosition,
  debug,
}) {
  let boundingType;

  switch (collider) {
    case 'box':
      // args: [x, y, z]
      boundingType = useBox;
      break;
    case 'sphere':
      // args: radius
      boundingType = useSphere;
      break;
    case 'cylinder':
      // args: [radiusTop, radiusBottom, height, numSegments]
      boundingType = useCylinder;
      break;
    default:
      throw new Error(`Unsupported PhysicsModel type '${collider}'`);
  }

  const [ref] = boundingType(() => ({
    mass,
    args: colliderArgs,
    position,
    rotation,
  }));

  const wf = debug ? (
    <WireframeMesh collider={collider} colliderArgs={colliderArgs} noDepth />
  ) : null;

  return (
    <group ref={ref}>
      <Model scale={modelScale} position={modelPosition} />
      {wf}
    </group>
  );
}

function WireframeMesh({ collider, colliderArgs, noDepth }) {
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
      bufferGeom = null;
  }

  return (
    <mesh renderOrder={1}>
      {bufferGeom}
      <meshStandardMaterial
        wireframe
        attach='material'
        color='blue'
        depthTest={!noDepth}
      />
    </mesh>
  );
}
