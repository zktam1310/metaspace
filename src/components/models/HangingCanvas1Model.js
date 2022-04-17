import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function HangingCanvas1Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/hangingcanvas1.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["595png"].geometry}
        material={materials["595"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["220png"].geometry}
        material={materials["220"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["535png"].geometry}
        material={materials["535"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["233png"].geometry}
        material={materials["233"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["839png"].geometry}
        material={materials["839"]}
      />
    </group>
  );
}

useGLTF.preload("/assets/hangingcanvas1.glb");
