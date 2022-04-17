import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function HangingCanvas3Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/hangingcanvas3.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["2891png"].geometry}
        material={materials["2891"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["6714png"].geometry}
        material={materials["6714"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["6851png"].geometry}
        material={materials["6851"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["2141png"].geometry}
        material={materials["2141"]}
      />
    </group>
  );
}

useGLTF.preload("/assets/hangingcanvas3.glb");
