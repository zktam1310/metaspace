import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useCylinder } from "@react-three/cannon"

const modelUrl = process.env.REACT_APP_MODELPATH+"bedroomlamp1.glb";

export default function BedroomLampModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(modelUrl);
  const [BedroomLamp1block] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[15,3.8,-2.6], args:[0.05,0.05,2.5]}))
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object005.geometry}
        material={materials["light.001"]}
        position={[0, 0, -3.94]}
      />
      <group position={[-27.55, 4.4, -9.54]} rotation={[0, 1.57, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Mesh_df535dd1-24c7-4c50-883f-6ea7d5e224af"].geometry}
          material={materials.Steel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes["Mesh_df535dd1-24c7-4c50-883f-6ea7d5e224af_1"].geometry
          }
          material={materials["Material.004"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(modelUrl);