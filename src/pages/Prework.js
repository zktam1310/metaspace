import DrinkingGlass2Model from "../components/models/DrinkingGlass2Model";
import DrinkingJugModel from "../components/models/DrinkingJugModel";
import EntranceCanvasModel from "../components/models/EntranceCanvasModel";
import EntranceLampModel from "../components/models/EntranceLampModel";
import GardenBenchModel from "../components/models/GardenBenchModel";
import HangingCanvas1Model from "../components/models/HangingCanvas1Model";
import HangingCanvas2Model from "../components/models/HangingCanvas2Model";
import HangingCanvas3Model from "../components/models/HangingCanvas3Model";
import HangingCanvas4Model from "../components/models/HangingCanvas4Model";
import KitchenCountertopModel from "../components/models/KitchenCountertopModel";
import Rock1Model from "../components/models/Rock1Model";
import Rock2Model from "../components/models/Rock2Model";
import Rock3Model from "../components/models/Rock3Model";
import Rock4Model from "../components/models/Rock4Model";
import Rock5Model from "../components/models/Rock5Model";
import Rock6Model from "../components/models/Rock6Model";
import Rock7Model from "../components/models/Rock7Model";
import ShoeCabinetModel from "../components/models/ShoeCabinetModel";
import SideTableEntranceModel from "../components/models/SideTableEntranceModel";
import Sofa1Model from "../components/models/Sofa1Model";
import Sofa2Model from "../components/models/Sofa2Model";
import SofaCushion1Model from "../components/models/SofaCushion1Model";
import SofaCushion2Model from "../components/models/SofaCushion2Model";
import SofaCushion3Model from "../components/models/SofaCushion3Model";

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

            <DrinkingGlass2Model
              position={objectPosition}
              scale={model_scale}/>
            <DrinkingJugModel
              position={objectPosition}
              scale={model_scale}/>
            <EntranceCanvasModel
              position={objectPosition}
              scale={model_scale}/>
            <EntranceLampModel
              position={objectPosition}
              scale={model_scale}/>
            <GardenBenchModel
              position={objectPosition}
              scale={model_scale}/>
            <HangingCanvas1Model
              position={objectPosition}
              scale={model_scale}/>
            <HangingCanvas2Model
              position={objectPosition}
              scale={model_scale}/>
            <HangingCanvas3Model
              position={objectPosition}
              scale={model_scale}/>
            <HangingCanvas4Model
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
      </div>
    );
  }



  export default Resort;