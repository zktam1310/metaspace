import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Canvas3Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/canvas3.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object344.geometry}
        material={materials.Plaster}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["25png"].geometry}
        material={materials["25"]}
      />
    </group>
  );
}

useGLTF.preload("/assets/canvas3.glb");