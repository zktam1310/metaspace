import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function HangingCanvas4Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/hangingcanvas4.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["33png"].geometry}
        material={materials["33"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["6673png"].geometry}
        material={materials["6673"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["6857png"].geometry}
        material={materials["6857"]}
      />
    </group>
  );
}

useGLTF.preload("/assets/hangingcanvas4.glb");