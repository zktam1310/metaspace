import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function DressingCabinet1Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/dressingcabinet1.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object446.geometry}
        material={nodes.Object446.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object447.geometry}
        material={nodes.Object447.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object448.geometry}
        material={nodes.Object448.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object449.geometry}
        material={nodes.Object449.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object442.geometry}
        material={nodes.Object442.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object444.geometry}
        material={nodes.Object444.material}
      />
    </group>
  );
}

useGLTF.preload("/assets/dressingcabinet1.glb");