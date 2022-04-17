import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const modelUrl = process.env.REACT_APP_MODELPATH+"shoecabinet.glb";

export default function ShoeCabinetModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(modelUrl);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object332.geometry}
        material={nodes.Object332.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object333.geometry}
        material={nodes.Object333.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object334.geometry}
        material={nodes.Object334.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object335.geometry}
        material={nodes.Object335.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object336.geometry}
        material={nodes.Object336.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object337.geometry}
        material={nodes.Object337.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object338.geometry}
        material={nodes.Object338.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object339.geometry}
        material={nodes.Object339.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object342.geometry}
        material={nodes.Object342.material}
      />
    </group>
  );
}

useGLTF.preload(modelUrl);