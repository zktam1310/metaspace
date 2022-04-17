import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function DinignChair7Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/diningchair7.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object629.geometry}
        material={materials["furn-dining chair.001"]}
        position={[-30.36, 0.3, -5.84]}
        rotation={[0, Math.PI / 9, -Math.PI]}
        scale={[-1, -1, -1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object630.geometry}
        material={nodes.Object630.material}
        position={[-30.36, 0.3, -5.84]}
        rotation={[0, Math.PI / 9, -Math.PI]}
        scale={[-1, -1, -1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object631.geometry}
        material={nodes.Object631.material}
        position={[-30.36, 0.3, -5.84]}
        rotation={[0, Math.PI / 9, -Math.PI]}
        scale={[-1, -1, -1]}
      />
    </group>
  );
}

useGLTF.preload("/assets/diningchair7.glb");