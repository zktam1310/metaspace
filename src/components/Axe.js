import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

export default function Model(props) {
  const axeUrl = './assets/axe.obj'
  const group = useRef()
  const obj = useLoader(OBJLoader, axeUrl)
  // const { nodes, materials } = useGLTF(axeUrl)
  return (
    // <group ref={group} dispose={null} {...props}>
    //   <group rotation={[0, Math.PI / 1.8, -0.3]} scale={0.5}>
    //     <mesh geometry={nodes.Mesh_1001_1.geometry} material={materials.material_2} />
    //     <mesh geometry={nodes.Mesh_1001_2.geometry} material={materials.material_3} />
    //   </group>
    // </group>

    <primitive ref={group} object={obj} rotation={[0, Math.PI / 1.8, -0.3]} scale={0.5}  {...props} />
  )
}

useGLTF.preload("/axe.glb")