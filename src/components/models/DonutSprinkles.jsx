/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/donutSprinkles.glb');
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_donutSprinkles.geometry}
        material={materials.brownLight}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_donutSprinkles_1.geometry}
        material={materials.purpleLight}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_donutSprinkles_2.geometry}
        material={materials.orange}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_donutSprinkles_3.geometry}
        material={materials.yellow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_donutSprinkles_4.geometry}
        material={materials.green}
      />
    </group>
  );
}

useGLTF.preload('/donutSprinkles.glb');
