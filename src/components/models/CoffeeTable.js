import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function CoffeeTableModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/coffeetable.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object478.geometry}
        material={nodes.Object478.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object479.geometry}
        material={nodes.Object479.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object480.geometry}
        material={nodes.Object480.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object481.geometry}
        material={nodes.Object481.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object482.geometry}
        material={nodes.Object482.material}
      />
    </group>
  );
}

useGLTF.preload("/assets/coffeetable.glb");