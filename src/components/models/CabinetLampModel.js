import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function CabinetLampModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/cabinetlamp.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object010.geometry}
        material={materials["light.001"]}
        position={[-31.52, 6.22, -8.2]}
        rotation={[0, 1.57, 0]}
      />
    </group>
  );
}

useGLTF.preload("/assets/cabinetlamp.glb");