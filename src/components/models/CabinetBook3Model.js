import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function CabinetBook3Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/cabinetbook3.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-31.44, 5.71, -9.78]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book10004.geometry}
          material={materials["Book2_material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book10004_1.geometry}
          material={materials["Book10_side_material.004"]}
        />
      </group>
      <group position={[-31.44, 5.71, -9.78]} rotation={[0, -1.53, -0.07]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book11004.geometry}
          material={materials["Book11_material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book11004_1.geometry}
          material={materials["Book11_side_material.004"]}
        />
      </group>
      <group position={[-31.44, 5.71, -9.78]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book12005.geometry}
          material={nodes.Book12005.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book12005_1.geometry}
          material={nodes.Book12005_1.material}
        />
      </group>
      <group position={[-31.44, 5.71, -9.78]} rotation={[0, -1.53, -0.02]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book13005.geometry}
          material={nodes.Book13005.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book13005_1.geometry}
          material={materials["Book6_side_material.005"]}
        />
      </group>
      <group position={[-31.44, 5.71, -9.78]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book14005.geometry}
          material={nodes.Book14005.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book14005_1.geometry}
          material={materials["Book8_side_material.005"]}
        />
      </group>
      <group position={[-31.44, 5.71, -9.78]} rotation={[0, -1.53, -0.09]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book15005.geometry}
          material={nodes.Book15005.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book15005_1.geometry}
          material={nodes.Book15005_1.material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/cabinetbook3.glb");
