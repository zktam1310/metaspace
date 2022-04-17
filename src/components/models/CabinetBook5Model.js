import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function CabinetBook5Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/cabinetbook5.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-31.44, 6.22, -6.72]} rotation={[0, -1.53, -0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0004.geometry}
          material={nodes.Book0004.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0004_1.geometry}
          material={materials["Book0_side_material.004"]}
        />
      </group>
      <group position={[-31.44, 6.22, -6.72]} rotation={[0, -1.53, -0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book1004.geometry}
          material={materials["Book1_material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book1004_1.geometry}
          material={materials["Book1_side_material.004"]}
        />
      </group>
      <group position={[-31.44, 6.22, -6.72]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book10003.geometry}
          material={nodes.Book10003.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book10003_1.geometry}
          material={materials["Book10_side_material.003"]}
        />
      </group>
      <group position={[-31.44, 6.22, -6.72]} rotation={[0, -1.53, -0.07]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book11003.geometry}
          material={materials["Book11_material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book11003_1.geometry}
          material={materials["Book11_side_material.003"]}
        />
      </group>
      <group position={[-31.44, 6.22, -6.72]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book12003.geometry}
          material={nodes.Book12003.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book12003_1.geometry}
          material={nodes.Book12003_1.material}
        />
      </group>
      <group position={[-31.44, 6.22, -6.72]} rotation={[0, -1.53, -0.02]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book13003.geometry}
          material={nodes.Book13003.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book13003_1.geometry}
          material={nodes.Book13003_1.material}
        />
      </group>
      <group position={[-31.44, 6.22, -6.72]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book14003.geometry}
          material={nodes.Book14003.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book14003_1.geometry}
          material={nodes.Book14003_1.material}
        />
      </group>
      <group position={[-31.44, 6.22, -6.72]} rotation={[0, -1.53, -0.09]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book15003.geometry}
          material={nodes.Book15003.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book15003_1.geometry}
          material={nodes.Book15003_1.material}
        />
      </group>
      <group position={[-31.44, 6.22, -6.72]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book16003.geometry}
          material={nodes.Book16003.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book16003_1.geometry}
          material={nodes.Book16003_1.material}
        />
      </group>
      <group position={[-31.44, 6.22, -6.72]} rotation={[0, -1.53, -0.04]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book17003.geometry}
          material={nodes.Book17003.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book17003_1.geometry}
          material={nodes.Book17003_1.material}
        />
      </group>
      <group position={[-31.44, 6.22, -6.72]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book18003.geometry}
          material={nodes.Book18003.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book18003_1.geometry}
          material={nodes.Book18003_1.material}
        />
      </group>
      <group position={[-31.44, 6.22, -6.72]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book2004.geometry}
          material={nodes.Book2004.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book2004_1.geometry}
          material={materials["Book2_side_material.004"]}
        />
      </group>
      <group position={[-31.44, 6.22, -6.72]} rotation={[0, -1.53, -0.09]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book3004.geometry}
          material={nodes.Book3004.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book3004_1.geometry}
          material={materials["Book3_side_material.004"]}
        />
      </group>
      <group position={[-31.44, 6.22, -6.72]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book4004.geometry}
          material={nodes.Book4004.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book4004_1.geometry}
          material={nodes.Book4004_1.material}
        />
      </group>
      <group position={[-31.44, 6.22, -6.72]} rotation={[0, -1.53, -0.05]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book5003.geometry}
          material={materials["Book5_material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book5003_1.geometry}
          material={materials["Book5_side_material.003"]}
        />
      </group>
      <group position={[-31.44, 6.22, -6.72]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book6003.geometry}
          material={nodes.Book6003.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book6003_1.geometry}
          material={nodes.Book6003_1.material}
        />
      </group>
      <group position={[-31.44, 6.22, -6.72]} rotation={[0, -1.53, -0.03]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book7003.geometry}
          material={nodes.Book7003.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book7003_1.geometry}
          material={materials["Book7_side_material.003"]}
        />
      </group>
      <group position={[-31.44, 6.22, -6.72]} rotation={[0, -1.53, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book8003.geometry}
          material={nodes.Book8003.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book8003_1.geometry}
          material={nodes.Book8003_1.material}
        />
      </group>
      <group position={[-31.44, 6.22, -6.72]} rotation={[0, -1.53, -0.1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book9003.geometry}
          material={nodes.Book9003.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book9003_1.geometry}
          material={nodes.Book9003_1.material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/cabinetbook5.glb");
