
import React, { useRef, useMemo } from "react";
import * as THREE from 'three'
import { useGLTF } from "@react-three/drei";

export default function NavMesh(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/navmesh.glb");
  // console.log(nodes.SampleScene_Exported_NavMesh001.geometry)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SampleScene_Exported_NavMesh001.geometry}
        material={materials["Default OBJ.002"]}
        position={[-33.74, 1.66, -6.02]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-1, 1, 1]}
      >
        <meshStandardMaterial
          transparent
          opacity={0}/>
      </mesh>
    </group>
  );
}

useGLTF.preload("/assets/navmesh.glb");