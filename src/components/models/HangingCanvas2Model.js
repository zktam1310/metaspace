import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function HangingCanvas2Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/hangingcanvas2.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3835png"].geometry}
        material={materials["3835"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["2951png"].geometry}
        material={materials["2951"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3663png"].geometry}
        material={materials["3663"]}
      />
    </group>
  );
}

useGLTF.preload("/assets/hangingcanvas2.glb");