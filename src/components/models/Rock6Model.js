import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Rock6Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/rock6.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object095.geometry}
        material={nodes.Object095.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object096.geometry}
        material={nodes.Object096.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object097.geometry}
        material={nodes.Object097.material}
      />
    </group>
  );
}

useGLTF.preload("/assets/rock6.glb");