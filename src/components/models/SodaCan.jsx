/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/resources/sodaCan.glb');
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_sodaCan.geometry}
          material={materials.greyDark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_sodaCan_1.geometry}
          material={materials.greyLight}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_sodaCan_2.geometry}
          material={materials.red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_sodaCan_3.geometry}
          material={materials.brownDarkest}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/resources/sodaCan.glb');
