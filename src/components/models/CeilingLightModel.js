import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function CeilingLightModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/ceilinglight.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object065.geometry}
        material={nodes.Object065.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object067.geometry}
        material={nodes.Object067.material}
      />
    </group>
  );
}

useGLTF.preload("/assets/ceilinglight.glb");