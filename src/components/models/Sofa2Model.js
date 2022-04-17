import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useCylinder } from "@react-three/cannon"

export default function Sofa2Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/sofa2.glb");
  const [sofa2block] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[9.8,3.8,-2.5], args:[0.1,0.1,0.5]}))
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object484.geometry}
        material={materials["l2furn-cabinet"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object506.geometry}
        material={nodes.Object506.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object507.geometry}
        material={nodes.Object507.material}
      />
    </group>
  );
}

useGLTF.preload("/assets/sofa2.glb");