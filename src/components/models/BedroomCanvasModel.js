import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function BedroomCanvasModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/bedroomcanvas.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["165png"].geometry}
        material={materials["165"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["87png001"].geometry}
        material={materials["87 (2)"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["151png"].geometry}
        material={materials["151"]}
      />
    </group>
  );
}

useGLTF.preload("/assets/bedroomcanvas.glb");