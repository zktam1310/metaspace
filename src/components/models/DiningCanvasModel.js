import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function DiningCanvasModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/diningcanvas.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["960x640png"].geometry}
        material={materials["960x640"]}
      />
    </group>
  );
}

useGLTF.preload("/assets/diningcanvas.glb");