
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useCylinder } from "@react-three/cannon"

const modelUrl = process.env.REACT_APP_MODELPATH+"bed.glb";

export default function BedModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(modelUrl);
  const [Bedblock] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[15,3.8,-1.3], args:[0.2,0.2,0.5]}))
  const [Bedblock1] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[15,3.8,-0.9], args:[0.2,0.2,0.5]}))
  const [Bedblock2] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[14.6,3.8,-1.3], args:[0.2,0.2,0.5]}))
  const [Bedblock3] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[14.6,3.8,-0.9], args:[0.2,0.2,0.5]}))

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object435.geometry}
        material={materials["l2furn-wood"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object533.geometry}
        material={materials["l2furn-steel"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object512.geometry}
        material={nodes.Object512.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object513.geometry}
        material={nodes.Object513.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object514.geometry}
        material={nodes.Object514.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object515.geometry}
        material={nodes.Object515.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object516.geometry}
        material={nodes.Object516.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object511.geometry}
        material={materials["downstairs cushion"]}
      />
    </group>
  );
}

useGLTF.preload(modelUrl);