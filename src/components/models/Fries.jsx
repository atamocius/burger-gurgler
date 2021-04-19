/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/fries.glb');
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fries.geometry}
        material={materials.red}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.fries_1.geometry}
          material={materials.yellow}
          position={[0, 0.16, 0]}
          scale={[1.18, 1.52, 1.18]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('/fries.glb');
