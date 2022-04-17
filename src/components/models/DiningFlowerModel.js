import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function DiningFlowerModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/diningflower.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-31.77, 1.1, -6.47]}>
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes["Mesh_f1017880-ea05-4bc1-b839-fe3a0b7284ae001"].geometry
          }
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes["Mesh_f1017880-ea05-4bc1-b839-fe3a0b7284ae001_1"].geometry
          }
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes["Mesh_f1017880-ea05-4bc1-b839-fe3a0b7284ae001_2"].geometry
          }
          material={materials["Material.003"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/diningflower.glb");