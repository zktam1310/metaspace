import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function CabinetBox2Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("assets/cabinetbox2.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-31.48, 6.22, -7.12]} rotation={[0, 1.57, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Mesh_2c9685fc-faea-4fd2-962c-dda66ffb41e8"].geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes["Mesh_2c9685fc-faea-4fd2-962c-dda66ffb41e8_1"].geometry
          }
          material={materials["Material.006"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/cabinetbox2.glb");