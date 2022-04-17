import { usePlane, useCylinder } from "@react-three/cannon"

export const Ground = (props) => {
  const [ground] = usePlane(() => ({ mass: 1, type: "Static", rotation: [-Math.PI / 2, 0, 0], ...props }))
  const [wall_entrance] = usePlane(() => ({ mass: 1, type: "Static", position:[-1,0,-2], rotation: [Math.PI*2, Math.PI/2, 0], ...props }))
  const [wall_back] = usePlane(() => ({ mass: 1, type: "Static", position:[16,0,-2], rotation: [Math.PI*2, -Math.PI/2, 0], ...props }))


  //Kitchen Height
  const [kheight1] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[9,0,1], args:[1,1,0.3]}))
  const [kheight2] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[9,0,0.4], args:[1,1,0.3]}))
  const [kheight3] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[9,0,-0.2], args:[1,1,0.3]}))
  const [kheight4] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[9,0,-0.6], args:[1,1,0.3]}))
  const [kheight5] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[9,0,-1], args:[1,1,0.3]}))
  const [kheight6] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[9,0,-1.4], args:[1,1,0.3]}))

  const [kheight7] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[13,0,1], args:[1,1,0.3]}))
  const [kheight8] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[13,0,0.4], args:[1,1,0.3]}))
  const [kheight9] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[13,0,-0.2], args:[1,1,0.3]}))
  const [kheight10] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[13,0,-0.6], args:[1,1,0.3]}))
  const [kheight11] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[13,0,-1], args:[1,1,0.3]}))
  const [kheight12] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[13,0,-1.4], args:[1,1,0.3]}))

  const [kheight13] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[14,0,1], args:[1,1,0.3]}))
  const [kheight14] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[14,0,0.4], args:[1,1,0.3]}))
  const [kheight15] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[14,0,-0.2], args:[1,1,0.3]}))
  const [kheight16] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[14,0,-0.6], args:[1,1,0.3]}))
  const [kheight17] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[14,0,-1], args:[1,1,0.3]}))
  const [kheight18] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[14,0,-1.4], args:[1,1,0.3]}))

  return (
    null
    // <group>
    //   <mesh ref={ref} receiveShadow>
    //     <planeGeometry args={[100000, 100000]} />
    //     <meshLambertMaterial attach="material" color="#00ecff" opacity={0} transparent/>
    //   </mesh>
    //   <mesh ref={wall_right} receiveShadow>
    //     <planeGeometry args={[100000, 100000]} />
    //     <meshLambertMaterial attach="material" color="#00ecff" opacity={0} transparent/>
    //   </mesh>
    //   <mesh ref={wall_left} receiveShadow>
    //     <planeGeometry args={[100000, 100000]} />
    //     <meshLambertMaterial attach="material" color="#00ecff" opacity={0} transparent/>
    //   </mesh>
    //   <mesh ref={wall_entrance} receiveShadow>
    //     <planeGeometry args={[100000, 100000]} />
    //     <meshLambertMaterial attach="material" color="#00ecff" opacity={0} transparent/>
    //   </mesh>
    // </group>
  )
}