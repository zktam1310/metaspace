import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Rock4Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/rock4.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object098.geometry}
        material={nodes.Object098.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object099.geometry}
        material={nodes.Object099.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object100.geometry}
        material={nodes.Object100.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object101.geometry}
        material={nodes.Object101.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object102.geometry}
        material={nodes.Object102.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object103.geometry}
        material={nodes.Object103.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object104.geometry}
        material={nodes.Object104.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object105.geometry}
        material={nodes.Object105.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object106.geometry}
        material={nodes.Object106.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object107.geometry}
        material={nodes.Object107.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object108.geometry}
        material={nodes.Object108.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object284.geometry}
        material={nodes.Object284.material}
      />
    </group>
  );
}

useGLTF.preload("/assets/rock4.glb");
