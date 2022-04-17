
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function DiningChair3Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/diningchair3.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object656.geometry}
        material={materials["furn-dining chair.001"]}
        position={[-31.81, 0.3, -7.55]}
        rotation={[0, 0.26, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object657.geometry}
        material={nodes.Object657.material}
        position={[-31.81, 0.3, -7.55]}
        rotation={[0, 0.26, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object658.geometry}
        material={nodes.Object658.material}
        position={[-31.81, 0.3, -7.55]}
        rotation={[0, 0.26, 0]}
      />
    </group>
  );
}

useGLTF.preload("/assets/diningchair3.glb");