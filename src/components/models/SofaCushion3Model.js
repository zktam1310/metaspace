import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function SofaCushion3Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/sofacushion3.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object537.geometry}
        material={materials["Custom (2)"]}
      />
    </group>
  );
}

useGLTF.preload("/assets/sofacushion3.glb");