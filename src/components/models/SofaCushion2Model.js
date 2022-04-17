import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function SofaCushion2Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/sofacushion2.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object536.geometry}
        material={materials["Custom (1)"]}
      />
    </group>
  );
}

useGLTF.preload("/assets/sofacushion2.glb");