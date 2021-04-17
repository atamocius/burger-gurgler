import React from 'react';

const mainColor = '#ffebcf';
const keyColor = '#ffffff';
const fillColor = '#ffe6e8';
const rimColor = '#fffad1';

export default function SceneLighting() {
  return (
    <>
      <color attach='background' args={[mainColor]} />
      <fog attach='fog' args={[mainColor, 0, 100]} />

      <hemisphereLight intensity={0.35} />

      {/* Key */}
      <spotLight
        intensity={2.0}
        position={[8, 10, 2]}
        penumbra={1}
        castShadow
        color={keyColor}
      />

      {/* Fill */}
      <spotLight
        intensity={1.0}
        position={[-8, 4, 10]}
        penumbra={1}
        color={fillColor}
      />

      {/* Rim */}
      <spotLight
        intensity={1.0}
        position={[9, 4, -28]}
        penumbra={1}
        color={rimColor}
      />
    </>
  );
}
