import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function DiningChair5Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/diningchair5.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object665.geometry}
        material={materials["furn-dining chair.001"]}
        position={[-30.36, 0.3, -7.4]}
        rotation={[0, -Math.PI / 9, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object666.geometry}
        material={nodes.Object666.material}
        position={[-30.36, 0.3, -7.4]}
        rotation={[0, -Math.PI / 9, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object667.geometry}
        material={nodes.Object667.material}
        position={[-30.36, 0.3, -7.4]}
        rotation={[0, -Math.PI / 9, 0]}
      />
    </group>
  );
}

useGLTF.preload("/assets/diningchair5.glb");