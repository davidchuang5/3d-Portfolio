import { useRef, useEffect } from 'react';
import planeScene from '../assets/3d/plane.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  // useEffect(() => {
  //   if (isRotating) {
  //     actions['Take 001'].play();
  //   } else {
  //     actions['Take 001'].stop();
  //   }
  // }, [actions, isRotating]);
  return (
    <mesh {...props}>
      <primitive object={scene} position={[3, -1, 2]} scale={[0.003, 0.003, 0.003]} />
    </mesh>
  );
};

export default Plane;
