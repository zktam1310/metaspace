import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useCylinder } from "@react-three/cannon";

export default function BathtubModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/bathtub.glb");
  const [physics] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[15.5,3.5,4], args:[1,1,4]}))
  const [physics2] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[15.5,3.5,2.7], args:[1,1,4]}))
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object520.geometry}
        material={materials["l2furn-bath"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object495.geometry}
        material={materials["l2furn-steel"]}
      />
    </group>
  );
}

useGLTF.preload("/assets/bathtub.glb");