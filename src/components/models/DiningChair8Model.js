import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function DiningChair8Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/diningchair8.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object647.geometry}
        material={materials["furn-dining chair.001"]}
        position={[-31.09, 0.3, -5.78]}
        rotation={[0, 0, Math.PI]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object648.geometry}
        material={nodes.Object648.material}
        position={[-31.09, 0.3, -5.78]}
        rotation={[0, 0, Math.PI]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object649.geometry}
        material={nodes.Object649.material}
        position={[-31.09, 0.3, -5.78]}
        rotation={[0, 0, Math.PI]}
        scale={-1}
      />
    </group>
  );
}

useGLTF.preload("/assets/diningchair8.glb");
