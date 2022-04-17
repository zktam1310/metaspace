
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function EntranceCanvasModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/entrancecanvas.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object343.geometry}
        material={materials.Plaster}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["2425png"].geometry}
        material={materials["2425"]}
      />
    </group>
  );
}

useGLTF.preload("/assets/entrancecanvas.glb");