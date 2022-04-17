
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useCylinder } from "@react-three/cannon"

export default function Rock7Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/rock7.glb");
  const [Rockblock1] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[9.7,3.6,-4], args:[0.07,0.07,0.5]}))
  const [Rockblock2] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[13,3.6,-4], args:[0.2,0.2,0.5]}))
  const [Rockblock3] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[15,3.6,-4], args:[0.05,0.05,0.5]}))
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object486.geometry}
        material={nodes.Object486.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object487.geometry}
        material={nodes.Object487.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object488.geometry}
        material={nodes.Object488.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object489.geometry}
        material={nodes.Object489.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object490.geometry}
        material={nodes.Object490.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object491.geometry}
        material={nodes.Object491.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object492.geometry}
        material={nodes.Object492.material}
      />
    </group>
  );
}

useGLTF.preload("/assets/rock7.glb");