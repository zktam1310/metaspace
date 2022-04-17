import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function CanvasLogoModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/canvaslogo.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object538.geometry}
        material={materials.Plaster}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logopng.geometry}
        material={materials.logo}
      />
    </group>
  );
}

useGLTF.preload("/assets/canvaslogo.glb");