import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function DiningChair6Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/diningchair6.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object611.geometry}
        material={materials["furn-dining chair.001"]}
        position={[-29.74, 0.3, -6.88]}
        rotation={[0, 1.31, -Math.PI]}
        scale={[-1, -1, -1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object612.geometry}
        material={nodes.Object612.material}
        position={[-29.74, 0.3, -6.88]}
        rotation={[0, 1.31, -Math.PI]}
        scale={[-1, -1, -1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object613.geometry}
        material={nodes.Object613.material}
        position={[-29.74, 0.3, -6.88]}
        rotation={[0, 1.31, -Math.PI]}
        scale={[-1, -1, -1]}
      />
    </group>
  );
}

useGLTF.preload("/assets/diningchair6.glb");
