/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/resources/frappe.glb');
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_frappe.geometry}
        material={materials.brownDark}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_frappe_1.geometry}
        material={materials._defaultMat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_frappe_2.geometry}
        material={materials.brownLight}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.straw.geometry}
        material={materials.brownDarkest}
        position={[0, 0.4, 0]}
      />
    </group>
  );
}

useGLTF.preload('/resources/frappe.glb');
