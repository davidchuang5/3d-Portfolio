import React from 'react';
import planeScene from '../assets/3d/bird.glb';
import { useGLTF } from '@react-three/drei';

const Plane = ({ isRotating, ...props }) => {
  const { scene, animation } = useGLTF(planeScene);
  return (
    <mesh {...props}>
      <primitive object={scene} position={[3, -1, 2]} scale={[0.003, 0.003, 0.003]} />
    </mesh>
  );
};

export default Plane;
