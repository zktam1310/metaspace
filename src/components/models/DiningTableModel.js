import React, { useRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
// import { useBox } from "@react-three/cannon";
// import { threeToCannon, ShapeType } from 'three-to-cannon';
import { Physics, useConvexPolyhedron, useBox, useCylinder, useTrimesh } from "@react-three/cannon";
import { Geometry } from "three-stdlib";

const modelUrl = process.env.REACT_APP_MODELPATH+"diningtable.glb";

function toConvexProps(bufferGeometry) {
    const geo = new Geometry().fromBufferGeometry(bufferGeometry);
    // Merge duplicate vertices resulting from glTF export.
    // Cannon assumes contiguous, closed meshes to work
    geo.mergeVertices();
    return [geo.vertices.map((v) => [v.x, v.y, v.z]), geo.faces.map((f) => [f.a, f.b, f.c]), []]; // prettier-ignore
}

export default function DiningTableModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(modelUrl);
  const [table1] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[11,0.5,-0.3], args:[0.2,0,4]}))
  const [table2] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[11.2,0.5,-0.3], args:[0.2,0,4]}))
  const [table3] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[11.4,0.5,-0.3], args:[0.2,0,4]}))
  const [table4] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[11.6,0.5,-0.3], args:[0.2,0,4]}))
  const [table5] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[11.8,0.5,-0.3], args:[0.2,0,4]}))
  const [table6] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[12,0.5,-0.3], args:[0.2,0,4]}))
  const [table7] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[12.2,0.5,-0.3], args:[0.2,0,4]}))

  //Chair physics
  const [chair1] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[10,0.5,-0.3], args:[0.2,0,4]}))
  const [chair2] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[11,0.5,-1], args:[0.2,0,4]}))
  const [chair3] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[11,0.5,0.5], args:[0.2,0,4]}))
  const [chair4] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[12,0.5,-1], args:[0.2,0,4]}))
  const [chair5] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[12,0.5,0.5], args:[0.2,0,4]}))
  const [chair6] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[13,0.5,-1], args:[0.2,0,4]}))
  const [chair7] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[13,0.5,0.5], args:[0.2,0,4]}))
  const [chair8] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[13.5,0.5,-0.3], args:[0.2,0,4]}))
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object305.geometry}
        material={nodes.Object305.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object306.geometry}
        material={nodes.Object306.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object311.geometry}
        material={nodes.Object311.material}
      />
    </group>
  );
}

useGLTF.preload(modelUrl);
