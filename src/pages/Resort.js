import React, { useRef, Suspense, useEffect } from "react";
import * as THREE from "three"
import { useRecoilState } from "recoil";
import { pauseAtom as pauseState, physicDebuggerAtom as physicDebuggerState } from "../atom";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { softShadows, PointerLockControls, Sky, useProgress } from '@react-three/drei'
import { Physics, Debug } from "@react-three/cannon"
import { Player } from "../components/Player";
import { Ground } from "../components/Ground";
import { RightWall } from "../components/RightWall";
import { LeftWall } from "../components/LeftWall";
import { Stairs } from "../components/Stairs";
import { SecondFloor } from "../components/SecondFloor";
import Pause from '../components/Pause'
import logo from '../assets/img/logo.png';
import ResortModel from '../components/models/ResortModel'
import NavMeshModel from '../components/models/NavMesh'
import WaterLightModel from '../components/models/WaterLightModel'
import WaterLight2Model from '../components/models/WaterLight2Model'
import DiningTableModel from "../components/models/DiningTableModel";
import BathtubModel from "../components/models/BathtubModel";
import BedModel from "../components/models/BedModel";
import BedroomLampModel from "../components/models/BedroomLampModel";
import BedroomLamp2Model from "../components/models/BedroomLamp2Model";
import BedroomTableModel from "../components/models/BedroomTableModel";
import CabinetBook1Model from "../components/models/CabinetBook1Model";
import CabinetBook2Model from "../components/models/CabinetBook2Model";
import CabinetBook3Model from "../components/models/CabinetBook3Model";
import CabinetBook4Model from "../components/models/CabinetBook4Model";
import CabinetBook5Model from "../components/models/CabinetBook5Model";
import CabinetBox1Model from "../components/models/CabinetBox1Model";
import CabinetBox2Model from "../components/models/CabinetBox2Model";
import CabinetLampModel from "../components/models/CabinetLampModel";
import CeilingLightModel from "../components/models/CeilingLightModel";
import CoffeeTableModel from "../components/models/CoffeeTable";
import DiningChair1Model from "../components/models/DiningChair1Model";
import DiningChair2Model from "../components/models/DiningChair2Model";
import DiningChair3Model from "../components/models/DiningChair3Model";
import DiningChair4Model from "../components/models/DiningChair4Model";
import DiningChair5Model from "../components/models/DiningChair5Model";
import DiningChair6Model from "../components/models/DiningChair6Model";
import DiningChair7Model from "../components/models/DiningChair7Model";
import DiningChair8Model from "../components/models/DiningChair8Model";
import DiningChair9Model from "../components/models/DiningChair9Model";
import DiningChair10Model from "../components/models/DiningChair10Model";
import DiningFlowerModel from "../components/models/DiningFlowerModel";
import DressingCabinetModel from "../components/models/DressingCabinetModel";
import DressingCabinet1Model from "../components/models/DressingCabinet1Model";
import DressingCabinet2Model from "../components/models/DressingCabinet2Model";
import DressingLightModel from "../components/models/DressingLightModel";
import DrinkingGlass1Model from "../components/models/DrinkingGlass1Model";
import DrinkingGlass2Model from "../components/models/DrinkingGlass2Model";
import DrinkingJugModel from "../components/models/DrinkingJugModel";
import EntranceLampModel from "../components/models/EntranceLampModel";
import GardenBenchModel from "../components/models/GardenBenchModel";
import KitchenCountertopModel from "../components/models/KitchenCountertopModel";
import Rock1Model from "../components/models/Rock1Model";
import Rock2Model from "../components/models/Rock2Model";
import Rock3Model from "../components/models/Rock3Model";
import Rock4Model from "../components/models/Rock4Model";
import Rock5Model from "../components/models/Rock5Model";
import Rock6Model from "../components/models/Rock6Model";
import Rock7Model from "../components/models/Rock7Model";
import ShelfModel from "../components/models/ShelfModel";
import ShoeCabinetModel from "../components/models/ShoeCabinetModel";
import SideTableEntranceModel from "../components/models/SideTableEntranceModel";
import Sofa1Model from "../components/models/Sofa1Model";
import Sofa2Model from "../components/models/Sofa2Model";
import SofaCushion1Model from "../components/models/SofaCushion1Model";
import SofaCushion2Model from "../components/models/SofaCushion2Model";
import SofaCushion3Model from "../components/models/SofaCushion3Model";

// R3f

const objectPosition = [37, 0, 5]
const model_scale = 0.8

softShadows()

function Loader() {
  const { progress } = useProgress()
  let progressDisplay = Number(progress).toFixed(2);

  useEffect(() => {
  })

  if (progress < 100) {
    return (
      <div className="progress-text">
        {progressDisplay} % loaded
      </div>
    )
  } else {
    return (
      null
    )
  }
}

function Resort() {

  const [isPause, setPause] = useRecoilState(pauseState);
  const [isPhysicDebugger, setPhysicDebugger] = useRecoilState(physicDebuggerState);
  const threeScene = useRef(null)

  useEffect(() => {
    if (!isPause) {
      setTimeout(() => {
        threeScene.current.click()
      }, 700)
    }

  }, [isPause]);

  function triggerMenu(val) {
    setPause (val)
  }

  document.onkeypress = function (e) {
    e = e || window.event
    if (e.keyCode == 96) {
      setPhysicDebugger (!isPhysicDebugger)
    }
  };


  return (
    <div className="sceneWrapper">
      <img src={logo} className="overlay-logo" alt="logo" />
      <Loader />
      <Pause />
      <Suspense fallback={<div>Loading... </div>}>
        <Canvas
          camera={{ fov:90, near: 0.1, far: 2000, aspect: 1.77, position: [0,0,10], rotation:[0,-1.6,0] }} ref={threeScene}>
          {!isPause && <PointerLockControls onUnlock={() => triggerMenu(true)} makeDefault/>}
          {/* This light makes things look pretty */}
          <ambientLight intensity={0.4} />
          {/* Our main source of light, also casting our shadow */}
          <directionalLight
            castShadow
            position={[100, 100, 100]}
            intensity={0.4}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}y
            shadow-camera-bottom={-10}
          />
          {/* A light to help illumnate the models */}
          <pointLight castShadow position={[100, 100, 100]} intensity={0.5} />
          <Sky sunPosition={[0, 100, -400]}/>
          <fog attach="fog" color="white" near={2} far={100} />
          {/* <primitive object={new THREE.AxesHelper(10)} /> */}
          <Physics gravity={[0, -25, 0]}>
           {/* <Debug color="white"> */}
            <Player isPause={isPause}/>
            <Ground/>
            <LeftWall/>
            <RightWall/>
            <Stairs/>
            <SecondFloor/>
            <ResortModel
              position={objectPosition}
              scale={model_scale}
              castShadow/>
            <WaterLightModel
              position={objectPosition}
              scale={model_scale}/>
            <WaterLight2Model
              position={objectPosition}
              scale={model_scale}/>
            <DiningTableModel
              position={objectPosition}
              scale={model_scale}/>
            <BathtubModel
              position={objectPosition}
              scale={model_scale}/>
            <BedModel
              position={objectPosition}
              scale={model_scale}/>
            <BedroomLampModel
              position={objectPosition}
              scale={model_scale}/>
            <BedroomLamp2Model
              position={objectPosition}
              scale={model_scale}/>
            <BedroomTableModel
              position={objectPosition}
              scale={model_scale}/>
            <CabinetBook1Model
              position={objectPosition}
              scale={model_scale}/>
            <CabinetBook2Model
              position={objectPosition}
              scale={model_scale}/>
            <CabinetBook3Model
              position={objectPosition}
              scale={model_scale}/>
            <CabinetBook4Model
              position={objectPosition}
              scale={model_scale}/>
            <CabinetBook5Model
              position={objectPosition}
              scale={model_scale}/>
            <CabinetBox1Model
              position={objectPosition}
              scale={model_scale}/>
            <CabinetBox2Model
              position={objectPosition}
              scale={model_scale}/>
            <CabinetLampModel
              position={objectPosition}
              scale={model_scale}/>
            <CeilingLightModel
              position={objectPosition}
              scale={model_scale}/>
            <CoffeeTableModel
              position={objectPosition}
              scale={model_scale}/>
            <DiningChair1Model
              position={objectPosition}
              scale={model_scale}/>
            <DiningChair2Model
              position={objectPosition}
              scale={model_scale}/>
            <DiningChair3Model
              position={objectPosition}
              scale={model_scale}/>
            <DiningChair4Model
              position={objectPosition}
              scale={model_scale}/>
            <DiningChair5Model
              position={objectPosition}
              scale={model_scale}/>
            <DiningChair6Model
              position={objectPosition}
              scale={model_scale}/>
            <DiningChair7Model
              position={objectPosition}
              scale={model_scale}/>
            <DiningChair8Model
              position={objectPosition}
              scale={model_scale}/>
            <DiningChair9Model
              position={objectPosition}
              scale={model_scale}/>
            <DiningChair10Model
              position={objectPosition}
              scale={model_scale}/>
            <DiningFlowerModel
              position={objectPosition}
              scale={model_scale}/>
            <DiningTableModel
              position={objectPosition}
              scale={model_scale}/>
            <DressingCabinetModel
              position={objectPosition}
              scale={model_scale}/>
            <DressingCabinet1Model
              position={objectPosition}
              scale={model_scale}/>
            <DressingCabinet2Model
              position={objectPosition}
              scale={model_scale}/>
            <DressingLightModel
              position={objectPosition}
              scale={model_scale}/>
            <DrinkingGlass1Model
              position={objectPosition}
              scale={model_scale}/>
            <DrinkingGlass2Model
              position={objectPosition}
              scale={model_scale}/>
            <DrinkingJugModel
              position={objectPosition}
              scale={model_scale}/>
            <EntranceLampModel
              position={objectPosition}
              scale={model_scale}/>
            <GardenBenchModel
              position={objectPosition}
              scale={model_scale}/>
            <KitchenCountertopModel
              position={objectPosition}
              scale={model_scale}/>
            <Rock1Model
              position={objectPosition}
              scale={model_scale}/>
            <Rock2Model
              position={objectPosition}
              scale={model_scale}/>
            <Rock3Model
              position={objectPosition}
              scale={model_scale}/>
            <Rock4Model
              position={objectPosition}
              scale={model_scale}/>
            <Rock5Model
              position={objectPosition}
              scale={model_scale}/>
            <Rock6Model
              position={objectPosition}
              scale={model_scale}/>
            <Rock7Model
              position={objectPosition}
              scale={model_scale}/>
            <ShelfModel
              position={objectPosition}
              scale={model_scale} />
            <ShoeCabinetModel
              position={objectPosition}
              scale={model_scale}/>
            <SideTableEntranceModel
              position={objectPosition}
              scale={model_scale}/>
            <Sofa1Model
              position={objectPosition}
              scale={model_scale}/>
            <Sofa2Model
              position={objectPosition}
              scale={model_scale}/>
            <SofaCushion1Model
              position={objectPosition}
              scale={model_scale}/>
            <SofaCushion2Model
              position={objectPosition}
              scale={model_scale}/>
            <SofaCushion3Model
              position={objectPosition}
              scale={model_scale}/>
            <NavMeshModel
              position={objectPosition}
              scale={model_scale}/>
            {/* </Debug> */}
          </Physics>
        </Canvas>
      </Suspense>
    </div>
  );
}



export default Resort;
