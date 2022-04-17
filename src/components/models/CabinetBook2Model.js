import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function CabinetBook2Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/cabinetbook2.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-31.44, 5.18, -8.6]} rotation={[0, -1.53, -0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0002.geometry}
          material={nodes.Book0002.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0002_1.geometry}
          material={materials["Book0_side_material.002"]}
        />
      </group>
      <group position={[-31.44, 5.18, -8.6]} rotation={[0, -1.53, -0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book1002.geometry}
          material={materials["Book1_material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book1002_1.geometry}
          material={materials["Book1_side_material.002"]}
        />
      </group>
      <group position={[-31.44, 5.18, -8.6]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book2002.geometry}
          material={nodes.Book2002.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book2002_1.geometry}
          material={materials["Book2_side_material.002"]}
        />
      </group>
      <group position={[-31.44, 5.18, -8.6]} rotation={[0, -1.53, -0.09]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book3002.geometry}
          material={nodes.Book3002.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book3002_1.geometry}
          material={materials["Book3_side_material.002"]}
        />
      </group>
      <group position={[-31.44, 5.18, -8.6]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book4002.geometry}
          material={nodes.Book4002.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book4002_1.geometry}
          material={nodes.Book4002_1.material}
        />
      </group>
      <group position={[-31.44, 5.18, -8.6]} rotation={[0, -1.53, -0.05]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book5001.geometry}
          material={materials["Book5_material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book5001_1.geometry}
          material={materials["Book5_side_material.001"]}
        />
      </group>
      <group position={[-31.44, 5.18, -8.6]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book6001.geometry}
          material={nodes.Book6001.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book6001_1.geometry}
          material={nodes.Book6001_1.material}
        />
      </group>
      <group position={[-31.44, 5.18, -8.6]} rotation={[0, -1.53, -0.03]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book7001.geometry}
          material={nodes.Book7001.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book7001_1.geometry}
          material={materials["Book7_side_material.001"]}
        />
      </group>
      <group position={[-31.44, 5.18, -8.6]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book8001.geometry}
          material={nodes.Book8001.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book8001_1.geometry}
          material={nodes.Book8001_1.material}
        />
      </group>
      <group position={[-31.44, 5.18, -8.6]} rotation={[0, -1.53, -0.1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book9001.geometry}
          material={nodes.Book9001.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book9001_1.geometry}
          material={nodes.Book9001_1.material}
        />
      </group>
      <group position={[-31.44, 5.18, -8.6]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book10001.geometry}
          material={nodes.Book10001.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book10001_1.geometry}
          material={materials["Book10_side_material.001"]}
        />
      </group>
      <group position={[-31.44, 5.18, -8.6]} rotation={[0, -1.53, -0.07]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book11001.geometry}
          material={materials["Book11_material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book11001_1.geometry}
          material={materials["Book11_side_material.001"]}
        />
      </group>
      <group position={[-31.44, 5.18, -8.6]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book12001.geometry}
          material={nodes.Book12001.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book12001_1.geometry}
          material={nodes.Book12001_1.material}
        />
      </group>
      <group position={[-31.44, 5.18, -8.6]} rotation={[0, -1.53, -0.02]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book13001.geometry}
          material={nodes.Book13001.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book13001_1.geometry}
          material={nodes.Book13001_1.material}
        />
      </group>
      <group position={[-31.44, 5.18, -8.6]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book14001.geometry}
          material={nodes.Book14001.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book14001_1.geometry}
          material={nodes.Book14001_1.material}
        />
      </group>
      <group position={[-31.44, 5.18, -8.6]} rotation={[0, -1.53, -0.09]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book15001.geometry}
          material={nodes.Book15001.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book15001_1.geometry}
          material={nodes.Book15001_1.material}
        />
      </group>
      <group position={[-31.44, 5.18, -8.6]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book16001.geometry}
          material={nodes.Book16001.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book16001_1.geometry}
          material={nodes.Book16001_1.material}
        />
      </group>
      <group position={[-31.44, 5.18, -8.6]} rotation={[0, -1.53, -0.04]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book17001.geometry}
          material={nodes.Book17001.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book17001_1.geometry}
          material={nodes.Book17001_1.material}
        />
      </group>
      <group position={[-31.44, 5.18, -8.6]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book18001.geometry}
          material={nodes.Book18001.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book18001_1.geometry}
          material={nodes.Book18001_1.material}
        />
      </group>
      <group position={[-31.44, 5.18, -8.6]} rotation={[0, -1.53, -0.06]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book19001.geometry}
          material={nodes.Book19001.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book19001_1.geometry}
          material={nodes.Book19001_1.material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/cabinetbook2.glb");