import { useCylinder } from "@react-three/cannon"

export const Stairs = (props) => {
    const [stair1] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[5.5,0,3.5], args:[0.7,0.7,0.5]}))
    const [stair2] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[5.8,0.3,4], args:[0.7,0.7,0.5]}))
    const [stair3] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[6.1,0.5,4.5], args:[0.7,0.7,0.5]}))
    const [stair4] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[6.7,0.6,4.5], args:[0.7,0.7,0.5]}))
    const [stair5] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[7,0.8,4.5], args:[0.7,0.7,0.5]}))
    const [stair6] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[7.3,1,4.5], args:[0.7,0.7,0.5]}))
    const [stair7] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[7.7,1.2,4.5], args:[0.7,0.7,0.5]}))
    const [stair8] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[8,1.4,4.5], args:[0.7,0.7,0.5]}))
    const [stair9] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[8.2,1.6,4.2], args:[0.7,0.7,0.5]}))
    const [stair10] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[8.4,1.8,4], args:[0.7,0.7,0.5]}))
    const [stair11] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[8.6,2,3.8], args:[0.7,0.7,0.5]}))
    const [stair12] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[8.8,2.2,3.6], args:[0.7,0.7,0.5]}))
    const [stair13] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[9,2.4,3.4], args:[0.7,0.7,0.5]}))
    const [stair14] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[9,2.6,3], args:[0.7,0.7,0.5]}))
    const [stair15] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[9,2.8,2.6], args:[0.7,0.7,0.5]}))
    const [stair16] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[9,3,2.4], args:[0.7,0.7,0.5]}))
    const [stair17] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[9,3.1,2.2], args:[0.7,0.7,0.5]}))
    const [stair18] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[9,3.1,2], args:[0.7,0.7,0.5]}))

    const [handrail1] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[6.8,2,3], args:[0.05,0.05,4]}))
    const [handrail2] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[7,2.5,3.15], args:[0.05,0.05,4]}))
    const [handrail3] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[7.3,3,3.2], args:[0.05,0.05,4]}))
    const [handrail4] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[7.5,3.5,3.15], args:[0.05,0.05,4]}))
    const [handrail5] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[7.8,4,3], args:[0.05,0.05,4]}))
    const [handrail6] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[7.8,4.5,2.7], args:[0.05,0.05,4]}))
    const [handrail7] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[7.8,5,2.3], args:[0.05,0.05,4]}))
    const [handrail8] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[7.8,5.3,2], args:[0.05,0.05,4]}))
    const [handrail9] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[7.8,5.6,1.5], args:[0.05,0.05,4]}))


  return (
    null
  )
}