
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function DiningChair4Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/diningchair4.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object683.geometry}
        material={materials["furn-dining chair.001"]}
        position={[-31.09, 0.3, -7.47]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object684.geometry}
        material={nodes.Object684.material}
        position={[-31.09, 0.3, -7.47]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object685.geometry}
        material={nodes.Object685.material}
        position={[-31.09, 0.3, -7.47]}
      />
    </group>
  );
}

useGLTF.preload("/assets/diningchair4.glb");