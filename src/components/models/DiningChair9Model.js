import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function DiningChair9Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/diningchair9.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object620.geometry}
        material={materials["furn-dining chair.001"]}
        position={[-31.81, 0.3, -5.7]}
        rotation={[0, -0.26, -Math.PI]}
        scale={[-1, -1, -1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object621.geometry}
        material={nodes.Object621.material}
        position={[-31.81, 0.3, -5.7]}
        rotation={[0, -0.26, -Math.PI]}
        scale={[-1, -1, -1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object622.geometry}
        material={nodes.Object622.material}
        position={[-31.81, 0.3, -5.7]}
        rotation={[0, -0.26, -Math.PI]}
        scale={[-1, -1, -1]}
      />
    </group>
  );
}

useGLTF.preload("/assets/diningchair9.glb");