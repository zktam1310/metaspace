/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/staircasecanvas.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object572.geometry}
        material={materials.Plaster}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["747png"].geometry}
        material={materials["747"]}
      />
    </group>
  );
}

useGLTF.preload("/assets/staircasecanvas.glb");
