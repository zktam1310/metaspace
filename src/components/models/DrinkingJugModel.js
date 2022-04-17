import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function DrinkingJugModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/drinkingjug.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object699.geometry}
        material={materials.Glass}
        position={[-31.43, 1.1, -6.46]}
      />
    </group>
  );
}

useGLTF.preload("/assets/drinkingjug.glb");