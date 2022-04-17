import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function DiningChair10Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/diningchair10.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object638.geometry}
        material={materials["furn-dining chair.001"]}
        position={[-32.71, 0.3, -5.78]}
        rotation={[0, 0, Math.PI]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object639.geometry}
        material={nodes.Object639.material}
        position={[-32.71, 0.3, -5.78]}
        rotation={[0, 0, Math.PI]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object640.geometry}
        material={nodes.Object640.material}
        position={[-32.71, 0.3, -5.78]}
        rotation={[0, 0, Math.PI]}
        scale={-1}
      />
    </group>
  );
}

useGLTF.preload("/assets/diningchair10.glb");
