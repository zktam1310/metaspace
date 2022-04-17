import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function CabinetBook4Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/cabinetbook4.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-31.44, 5.7, -7.77]} rotation={[0, -1.53, -0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0003.geometry}
          material={nodes.Book0003.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0003_1.geometry}
          material={materials["Book0_side_material.003"]}
        />
      </group>
      <group position={[-31.44, 5.7, -7.77]} rotation={[0, -1.53, -0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book1003.geometry}
          material={materials["Book1_material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book1003_1.geometry}
          material={materials["Book1_side_material.003"]}
        />
      </group>
      <group position={[-31.44, 5.7, -7.77]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book10002.geometry}
          material={nodes.Book10002.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book10002_1.geometry}
          material={materials["Book10_side_material.002"]}
        />
      </group>
      <group position={[-31.44, 5.7, -7.77]} rotation={[0, -1.53, -0.07]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book11002.geometry}
          material={materials["Book11_material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book11002_1.geometry}
          material={materials["Book11_side_material.002"]}
        />
      </group>
      <group position={[-31.44, 5.7, -7.77]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book12002.geometry}
          material={nodes.Book12002.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book12002_1.geometry}
          material={nodes.Book12002_1.material}
        />
      </group>
      <group position={[-31.44, 5.7, -7.77]} rotation={[0, -1.53, -0.02]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book13002.geometry}
          material={nodes.Book13002.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book13002_1.geometry}
          material={nodes.Book13002_1.material}
        />
      </group>
      <group position={[-31.44, 5.7, -7.77]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book14002.geometry}
          material={nodes.Book14002.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book14002_1.geometry}
          material={nodes.Book14002_1.material}
        />
      </group>
      <group position={[-31.44, 5.7, -7.77]} rotation={[0, -1.53, -0.09]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book15002.geometry}
          material={nodes.Book15002.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book15002_1.geometry}
          material={nodes.Book15002_1.material}
        />
      </group>
      <group position={[-31.44, 5.7, -7.77]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book16002.geometry}
          material={nodes.Book16002.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book16002_1.geometry}
          material={nodes.Book16002_1.material}
        />
      </group>
      <group position={[-31.44, 5.7, -7.77]} rotation={[0, -1.53, -0.04]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book17002.geometry}
          material={nodes.Book17002.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book17002_1.geometry}
          material={nodes.Book17002_1.material}
        />
      </group>
      <group position={[-31.44, 5.7, -7.77]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book18002.geometry}
          material={nodes.Book18002.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book18002_1.geometry}
          material={nodes.Book18002_1.material}
        />
      </group>
      <group position={[-31.44, 5.7, -7.77]} rotation={[0, -1.53, -0.06]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book19002.geometry}
          material={nodes.Book19002.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book19002_1.geometry}
          material={nodes.Book19002_1.material}
        />
      </group>
      <group position={[-31.44, 5.7, -7.77]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book2003.geometry}
          material={nodes.Book2003.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book2003_1.geometry}
          material={materials["Book2_side_material.003"]}
        />
      </group>
      <group position={[-31.44, 5.7, -7.77]} rotation={[0, -1.53, -0.09]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book3003.geometry}
          material={nodes.Book3003.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book3003_1.geometry}
          material={materials["Book3_side_material.003"]}
        />
      </group>
      <group position={[-31.44, 5.7, -7.77]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book4003.geometry}
          material={nodes.Book4003.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book4003_1.geometry}
          material={nodes.Book4003_1.material}
        />
      </group>
      <group position={[-31.44, 5.7, -7.77]} rotation={[0, -1.53, -0.05]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book5002.geometry}
          material={materials["Book5_material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book5002_1.geometry}
          material={materials["Book5_side_material.002"]}
        />
      </group>
      <group position={[-31.44, 5.7, -7.77]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book6002.geometry}
          material={nodes.Book6002.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book6002_1.geometry}
          material={nodes.Book6002_1.material}
        />
      </group>
      <group position={[-31.44, 5.7, -7.77]} rotation={[0, -1.53, -0.03]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book7002.geometry}
          material={nodes.Book7002.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book7002_1.geometry}
          material={materials["Book7_side_material.002"]}
        />
      </group>
      <group position={[-31.44, 5.7, -7.77]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book8002.geometry}
          material={nodes.Book8002.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book8002_1.geometry}
          material={nodes.Book8002_1.material}
        />
      </group>
      <group position={[-31.44, 5.7, -7.77]} rotation={[0, -1.53, -0.1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book9002.geometry}
          material={nodes.Book9002.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book9002_1.geometry}
          material={nodes.Book9002_1.material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/cabinetbook4.glb");