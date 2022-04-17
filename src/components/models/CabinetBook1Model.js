import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function CabinetBook1Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/cabinetbook1.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-31.42, 5.52, -8.76]} rotation={[3.08, -0.93, 1.52]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book12004.geometry}
          material={nodes.Book12004.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book12004_1.geometry}
          material={nodes.Book12004_1.material}
        />
      </group>
      <group position={[-31.42, 5.52, -8.76]} rotation={[3.08, -0.93, 1.5]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book13004.geometry}
          material={nodes.Book13004.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book13004_1.geometry}
          material={materials["Book6_side_material.004"]}
        />
      </group>
      <group position={[-31.42, 5.52, -8.76]} rotation={[3.08, -0.93, 1.52]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book14004.geometry}
          material={nodes.Book14004.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book14004_1.geometry}
          material={materials["Book8_side_material.004"]}
        />
      </group>
      <group position={[-31.42, 5.52, -8.76]} rotation={[3.08, -0.93, 1.43]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book15004.geometry}
          material={nodes.Book15004.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book15004_1.geometry}
          material={nodes.Book15004_1.material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/cabinetbook1.glb");