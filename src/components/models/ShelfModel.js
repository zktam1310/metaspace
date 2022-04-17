import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useCylinder } from "@react-three/cannon";

const modelUrl = process.env.REACT_APP_MODELPATH+"shelf.glb";

export default function ShelfModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(modelUrl);
  const [sofa1block] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[11.7,3.8,-2], args:[0.05,0.05,4]}))
  const [sofa1block2] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[11.7,3.8,-1.5], args:[0.05,0.05,4]}))
  const [sofa1block3] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[11.7,3.8,-1], args:[0.05,0.05,4]}))
  const [sofa1block4] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[11.7,3.8,-0.5], args:[0.05,0.05,4]}))
  const [sofa1block5] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[11.7,3.8,-0.2], args:[0.05,0.05,4]}))
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object452.geometry}
        material={nodes.Object452.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object453.geometry}
        material={nodes.Object453.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object454.geometry}
        material={nodes.Object454.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object455.geometry}
        material={nodes.Object455.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object456.geometry}
        material={nodes.Object456.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object457.geometry}
        material={nodes.Object457.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object458.geometry}
        material={nodes.Object458.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object459.geometry}
        material={nodes.Object459.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object460.geometry}
        material={nodes.Object460.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object461.geometry}
        material={nodes.Object461.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object462.geometry}
        material={nodes.Object462.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object463.geometry}
        material={nodes.Object463.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object464.geometry}
        material={nodes.Object464.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object465.geometry}
        material={nodes.Object465.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object466.geometry}
        material={nodes.Object466.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object467.geometry}
        material={nodes.Object467.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object468.geometry}
        material={nodes.Object468.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object469.geometry}
        material={nodes.Object469.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object470.geometry}
        material={nodes.Object470.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object534.geometry}
        material={nodes.Object534.material}
      />
    </group>
  );
}

useGLTF.preload(modelUrl);