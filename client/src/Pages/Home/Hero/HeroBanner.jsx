import React, {useRef, useState} from 'react';
import {Model} from './Model';

const HeroBanner = () => {
  const SPEED = 0.006;
  const modelRef = useRef ();

  let mouseX = useState (0);

  //   useFrame (() => {
  //     if (modelRef.current) {
  //   modelRef.current.rotation.y += SPEED;
  //     }
  //   });

  document.addEventListener ('mousemove', event => {
    mouseX = event.clientX / window.innerWidth * 2 - 1;

    if (modelRef.current) {
      modelRef.current.rotation.y = mouseX * 0.5;
    }
  });

  return (
    <Model
      ref={modelRef}
      scale={0.08}
      position={[0, 0.1, 0]}
      rotation={[Math.PI / 6, 0, 0]}
      receiveShadow
    />
  );
};

export default HeroBanner;
