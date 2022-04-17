import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useCylinder } from "@react-three/cannon";

export default function Rock2Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/rock2.glb");
  const [Rockblock1] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[10,0,-4], args:[0.1,0.1,0.5]}))
  const [Rockblock2] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[11.8,0,-2.6], args:[0.2,0.2,0.5]}))
  const [Rockblock3] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[14.1,0,-3.5], args:[0.5,0.5,0.8]}))
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object086.geometry}
        material={nodes.Object086.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object087.geometry}
        material={nodes.Object087.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object088.geometry}
        material={nodes.Object088.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object089.geometry}
        material={nodes.Object089.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object090.geometry}
        material={nodes.Object090.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object091.geometry}
        material={nodes.Object091.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object092.geometry}
        material={nodes.Object092.material}
      />
    </group>
  );
}

useGLTF.preload("/assets/rock2.glb");
