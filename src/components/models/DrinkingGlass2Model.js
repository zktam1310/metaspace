import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function DrinkingGlass2Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/drinkingglass2.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object697.geometry}
        material={materials.Glass}
        position={[-31.29, 1.1, -7.08]}
      />
    </group>
  );
}

useGLTF.preload("/assets/drinkingglass2.glb");