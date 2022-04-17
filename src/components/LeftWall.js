import { useCylinder } from "@react-three/cannon"

export const LeftWall = (props) => {
    const [lwall1] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[0,0,-2.8], args:[1,1,20]}))
    const [lwall2] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[.5,0,-2.8], args:[1,1,20]}))
    const [lwall3] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[1,0,-2.8], args:[1,1,20]}))
    const [lwall4] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[1.5,0,-2.8], args:[1,1,20]}))
    const [lwall5] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[2,0,-2.8], args:[1,1,20]}))

    const [lwall6] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[2.5,0,-3], args:[.5,.5,20]}))
    const [lwall7] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[3,0,-3], args:[.5,.5,20]}))
    const [lwall8] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[3.5,0,-3], args:[.5,.5,20]}))
    const [lwall9] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[4,0,-3], args:[.5,.5,20]}))
    const [lwall10] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[4.5,0,-3], args:[.5,.5,20]}))
    const [lwall11] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[5,0,-3], args:[.5,.5,20]}))
    const [lwall12] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[5.5,0,-3], args:[.5,.5,20]}))
    const [lwall13] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[6,0,-3], args:[.5,.5,20]}))
    const [lwall14] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[6.5,0,-3], args:[.5,.5,20]}))

    //Bridge & Garden Boundary to Pool
    const [lwall15] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[7,0,-2], args:[.5,.5,20]}))
    const [lwall16] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[7,0,-3], args:[.5,.5,20]}))
    const [lwall17] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[7,0,-4], args:[.5,.5,20]}))
    const [lwall18] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[7,0,-5], args:[.5,.5,20]}))

    //Left Wall of Garden
    const [lwall19] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[8,0,-6], args:[.5,.5,20]}))
    const [lwall20] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[8.5,0,-6], args:[.5,.5,20]}))
    const [lwall21] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[9,0,-6], args:[.5,.5,20]}))

    const [lwall22] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[9.5,0,-6], args:[.5,.5,20]}))
    const [lwall23] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[10,0,-6], args:[.5,.5,20]}))
    const [lwall24] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[10.5,0,-6], args:[.5,.5,20]}))
    const [lwall25] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[11,0,-6], args:[.5,.5,20]}))
    const [lwall26] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[11.5,0,-6], args:[.5,.5,20]}))


    const [lwall27] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[12,0,-6], args:[.5,.5,20]}))
    const [lwall28] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[12.5,0,-6], args:[.5,.5,20]}))
    const [lwall29] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[13,0,-6], args:[.5,.5,20]}))
    const [lwall30] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[13.5,0,-6], args:[.5,.5,20]}))
    const [lwall31] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[14,0,-6], args:[.5,.5,20]}))
    const [lwall32] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[14.5,0,-6], args:[.5,.5,20]}))
    const [lwall33] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[15,-6], args:[.5,.5,20]}))
    const [lwall34] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[15.5,0,-6], args:[.5,.5,20]}))

  return (
    null
  )
}