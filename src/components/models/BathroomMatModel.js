import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function BathroomMatModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/bathroommat.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object549.geometry}
        material={materials["Custom (3)"]}
      />
    </group>
  );
}

useGLTF.preload("/assets/bathroommat.glb");