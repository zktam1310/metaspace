import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useCylinder } from "@react-three/cannon"

export default function Sofa1Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/sofa1.glb");
  const [sofa1block] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[10.7,3.8,-1.5], args:[0.1,0.1,0.5]}))
  const [sofa1block2] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[10.7,3.8,-1.3], args:[0.1,0.1,0.5]}))
  const [sofa1block3] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[10.7,3.8,-1.1], args:[0.1,0.1,0.5]}))
  const [sofa1block4] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[10.7,3.8,-0.9], args:[0.1,0.1,0.5]}))
  const [sofa1block5] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[10.7,3.8,-0.7], args:[0.1,0.1,0.5]}))
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object477.geometry}
        material={materials["l2furn-cabinet"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object508.geometry}
        material={nodes.Object508.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object509.geometry}
        material={nodes.Object509.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object510.geometry}
        material={nodes.Object510.material}
      />
    </group>
  );
}

useGLTF.preload("/assets/sofa1.glb");