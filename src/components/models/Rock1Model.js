import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Rock1Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/rock1.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object083.geometry}
        material={nodes.Object083.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object084.geometry}
        material={nodes.Object084.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object085.geometry}
        material={nodes.Object085.material}
      />
    </group>
  );
}

useGLTF.preload("/assets/rock1.glb");