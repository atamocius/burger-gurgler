import React, { useRef } from 'react';

import { useFrame } from '@react-three/fiber';

export default function RotatingModel({ children, animate = false }) {
  const group = useRef();

  useFrame(() => {
    if (!animate) {
      group.current.rotation.y = 0;
      return;
    }

    group.current.rotation.y += 0.015;
  });

  return <group ref={group}>{children}</group>;
}
