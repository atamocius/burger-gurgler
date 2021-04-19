/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/plateDinner.glb');
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_plateDinner.geometry}
        material={materials.brownDark}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_plateDinner_1.geometry}
        material={materials._defaultMat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_plateDinner_2.geometry}
        material={materials.brown}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_plateDinner_3.geometry}
        material={materials.green}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_plateDinner_4.geometry}
        material={materials.brownLight}
      />
    </group>
  );
}

useGLTF.preload('/plateDinner.glb');
