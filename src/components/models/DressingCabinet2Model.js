

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function DressingCabinet2Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/dressingcabinet2.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object436.geometry}
        material={nodes.Object436.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object437.geometry}
        material={nodes.Object437.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object438.geometry}
        material={nodes.Object438.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object439.geometry}
        material={nodes.Object439.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object440.geometry}
        material={nodes.Object440.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object441.geometry}
        material={nodes.Object441.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object431.geometry}
        material={materials["l2furn-cabinet"]}
      />
    </group>
  );
}

useGLTF.preload("/assets/dressingcabinet2.glb");
