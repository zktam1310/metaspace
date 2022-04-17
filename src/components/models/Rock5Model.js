import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Rock5Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/rock5.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object093.geometry}
        material={nodes.Object093.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object094.geometry}
        material={nodes.Object094.material}
      />
    </group>
  );
}

useGLTF.preload("/assets/rock5.glb");