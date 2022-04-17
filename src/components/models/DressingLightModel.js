
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function DressingLightModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("assets/dressinglight.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object545.geometry}
        material={materials.light}
      />
    </group>
  );
}

useGLTF.preload("assets/dressinglight.glb");