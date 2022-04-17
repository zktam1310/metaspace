import { useCylinder } from "@react-three/cannon"

export const RightWall = (props) => {
    const [rwall1] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[0,0,2.5], args:[1,1,20]}))
    const [rwall2] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[.5,0,2.5], args:[1,1,20]}))
    const [rwall3] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[1,0,2.5], args:[1,1,20]}))
    const [rwall4] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[1.5,0,2.5], args:[1,1,20]}))
    const [rwall5] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[2,0,2.5], args:[1,1,20]}))
    const [rwall6] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[2.5,0,2.5], args:[1,1,20]}))
    const [rwall7] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[3,0,2.5], args:[1,1,20]}))
    const [rwall8] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[3.5,0,2.5], args:[1,1,20]}))
    const [rwall9] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[3.5,0,2.5], args:[1,1,20]}))
    const [rwall10] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[3.5,0,4.5], args:[1,1,20]}))
    const [rwall11] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[3.5,0,5], args:[1,1,20]}))
    const [rwall12] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[4,0,5.5], args:[1,1,20]}))
    const [rwall13] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[4.5,0,5.5], args:[1,1,20]}))
    const [rwall14] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[5,0,5.5], args:[1,1,20]}))
    const [rwall15] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[5.5,0,6], args:[1,1,20]}))
    const [rwall16] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[6,0,6], args:[1,1,20]}))
    const [rwall17] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[6.5,0,6.5], args:[1,1,20]}))
    const [rwall18] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[7,0,6.5], args:[1,1,20]}))
    const [rwall19] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[7.5,0,6.5], args:[1,1,20]}))
    const [rwall20] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[8,0,6.5], args:[1,1,20]}))
    const [rwall21] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[8.5,0,6.5], args:[1,1,20]}))
    const [rwall22] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[9,0,6.5], args:[1,1,20]}))
    const [rwall23] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[9.5,0,6.5], args:[1,1,20]}))
    const [rwall24] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[11,0,6], args:[1,1,20]}))
    const [rwall25] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[11,0,5.5], args:[1,1,20]}))

    const [rwall26] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[10,0,5], args:[0.005,0.005,10]}))
    const [rwall27] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[10,0,4.5], args:[0.005,0.005,10]}))
    const [rwall28] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[10,0,4], args:[0.005,0.005,10]}))
    const [rwall29] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[10.3,0,3.5], args:[0.01,0.01,10]}))
    const [rwall30] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[10.3,0,3], args:[0.01,0.01,10]}))

    const [rwall26a] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[10.3,0,2.5], args:[0.01,0.01,10]}))
    const [rwall27a] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[10.3,0,2], args:[0.01,0.01,10]}))

    // const [rwall26] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[11,0,5], args:[1,1,10]}))
    // const [rwall27] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[11,0,4.5], args:[1,1,10]}))
    // const [rwall28] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[11,0,4], args:[1,1,10]}))
    // const [rwall29] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[11,0,4], args:[1,1,10]}))
    // const [rwall30] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[11,0,3.5], args:[1,1,10]}))

    const [rwall31] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[11,0,3], args:[1,1,6.7]}))
    const [rwall32] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[11,0,2.85], args:[1,1,6.7]}))
    const [rwall33] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[11.5,0,2.85], args:[1,1,6.7]}))
    const [rwall34] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[12,0,2.85], args:[1,1,6.7]}))
    const [rwall35] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[12.5,0,2.85], args:[1,1,6.7]}))
    const [rwall36] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[13,0,2.85], args:[1,1,6.7]}))
    const [rwall37] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[13.5,0,2.85], args:[1,1,6.7]}))
    const [rwall38] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[14,0,2.85], args:[1,1,6.7]}))
    const [rwall39] = useCylinder(() => ({ mass: 0, collisionResponse:true, position:[14.5,0,2.85], args:[1,1,6.7]}))

  return (
    null
  )
}