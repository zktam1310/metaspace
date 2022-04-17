import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function EntranceLampModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/entrancelamp.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object571.geometry}
        material={materials.light}
      />
      <group position={[-44.79, 1, -8.37]}>
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes["Mesh_3bb95047-7e64-438d-bcfe-73f755214d60001"].geometry
          }
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes["Mesh_3bb95047-7e64-438d-bcfe-73f755214d60001_1"].geometry
          }
          material={materials["Steel.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/entrancelamp.glb");