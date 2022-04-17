import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useCylinder } from "@react-three/cannon";

const modelUrl = process.env.REACT_APP_MODELPATH+"bedroomtable.glb";

export default function BedroomTableModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(modelUrl);

  const [lwall19] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[8,3.5,-5.5], args:[.5,.5,6]}))
  const [lwall20] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[8.5,3.5,-5.5], args:[.5,.5,6]}))
  const [lwall21] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[9,3.5,-5.5], args:[.5,.5,6]}))

  const [lwall22] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[9.5,3.5,-5.5], args:[.5,.5,6]}))
  const [lwall23] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[10,3.5,-5.5], args:[.5,.5,6]}))
  const [lwall24] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[10.5,3.5,-5.5], args:[.5,.5,6]}))
  const [lwall25] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[11,3.5,-5.5], args:[.5,.5,6]}))
  const [lwall26] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[11.5,3.5,-5.5], args:[.5,.5,6]}))


  const [lwall27] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[12,3.5,-5.5], args:[.5,.5,6]}))
  const [lwall28] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[12.5,3.5,-5.5], args:[.5,.5,6]}))
  const [lwall29] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[13,3.5,-5.5], args:[.5,.5,6]}))
  const [lwall30] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[13.5,3.5,-5.5], args:[.5,.5,6]}))
  const [lwall31] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[14,3.5,-5.5], args:[.5,.5,6]}))
  const [lwall32] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[14.5,3.5,-5.5], args:[.5,.5,6]}))
  const [lwall33] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[15,-6], args:[.5,.5,6]}))
  const [lwall34] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[15.5,3.5,-5.5], args:[.5,.5,6]}))
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object414.geometry}
        material={materials["l2furn-steel"]}
      />
    </group>
  );
}

useGLTF.preload(modelUrl);