import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function DoorModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/door.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object128.geometry}
        material={nodes.Object128.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object329.geometry}
        material={nodes.Object329.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object330.geometry}
        material={nodes.Object330.material}
      />
    </group>
  );
}

useGLTF.preload("/assets/door.gltf");