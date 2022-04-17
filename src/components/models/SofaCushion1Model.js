import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function SofaCushion1Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/sofacushion1.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object535.geometry}
        material={materials.Custom}
      />
    </group>
  );
}

useGLTF.preload("/assets/sofacushion1.glb");
