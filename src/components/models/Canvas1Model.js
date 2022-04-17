import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Canvas1Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/canvas1.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object346.geometry}
        material={materials.Plaster}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4png"].geometry}
        material={materials["4"]}
      />
    </group>
  );
}

useGLTF.preload("/assets/canvas1.glb");