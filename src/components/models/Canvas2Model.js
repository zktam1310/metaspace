
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Canvas2Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/canvas2.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object345.geometry}
        material={materials.Plaster}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["87png"].geometry}
        material={materials["87"]}
      />
    </group>
  );
}

useGLTF.preload("/assets/canvas2.glb");