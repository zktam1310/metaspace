
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function DrinkingGlass1Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/drinkingglass1.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object696.geometry}
        material={materials.Glass}
        position={[-32.56, 1.1, -6.24]}
      />
    </group>
  );
}

useGLTF.preload("/assets/drinkingglass1.glb");