import {useState, useEffect, useRef} from "react";
import { PerspectiveCamera, OrbitControls, Html } from "@react-three/drei";
import { Astronaut } from "./Astronaut";
// import { EarthAstronaut } from "./components/EarthAstronaut";
// import { Earth1 } from "./components/Earth1";
import { Moon } from "./Moon";
// import { MoonCrater } from "./components/MoonCrater";
import { Sun } from "./Sun";
import { SciFiLaptop}  from "./SciFiLaptop";
// import { Laptop } from "./components/Laptop";
import { Stars } from "./Stars";
import { SciFiBoxes } from "./SciFiBoxes";
import { SciFiAmmunitionBox } from "./SciFiAmmunitionBox";
import { SciFiAmmunitionBox2 } from "./SciFiAmmunitionBox2";
// import { SciFiRadar } from "./components/SciFiRadar";
import { useFrame } from '@react-three/fiber';
import { EffectComposer, GodRays } from '@react-three/postprocessing'
import { Earth2 } from "./Earth2";

export default function SpaceEnv() {

  const [sunReady, setSunReady] = useState(false)
  // const { progress, active, loaded, total } = useProgress();
  const camRef = useRef();
  const sunRef = useRef();
  const windowWidth = window.innerWidth;

  
  useEffect(() => {
    // Wait for sun to be available
    if (sunRef.current) {
      setSunReady(true)
    }
  }, [])
  
    useFrame(() => {
      // camRef.current.position.z += 0.005;
    })

  return (
    <>
      <PerspectiveCamera
        ref={camRef}
        makeDefault
        position={[0, 0.0, 1.5]}   
        fov={60}
        // near={0.5} // Adjust to model size
        // far={10}
      />
      <directionalLight
        position={[-3, 1.8, -8]}
        intensity={9}
        castShadow
        shadow-mapSize={[2048, 2048]} // Higher = sharper shadows
      />
      {/* <OrbitControls  /> */}
        <Stars position={[0, 0, -20]} scale={0.3}/>
        {/* <Sun position={[-4, 4, -20]}/> */}
        {/* <Earth1 castShadow receiveShadow position={[0, 2, -20]} rotation={[1, 0.8, 0]} scale={0.008}/> */}
        <Earth2 castShadow receiveShadow position={[0, 2, -20]} rotation={[1, 0.8, 0]} scale={1}/>
        <Astronaut castShadow receiveShadow position={[0.08, -0.2, 1.29]} rotation={[0, -2.9, 0]} scale={0.15}/>
        {/* <EarthAstronaut castShadow receiveShadow position={[0.08, -0.2, 1.29]} rotation={[5, -3.1, 0]} scale={0.15}/> */}
        <Moon receiveShadow position={[0, -0.165, 0]} scale={2}/>
        { windowWidth > 700 &&        
          <>
            <SciFiLaptop castShadow receiveShadow position={[0.08, -0.2, 1.29]} rotation={[0, -2.9, 0]} scale={0.15}/><SciFiLaptop castShadoww receiveShadow position={[-0.18, -0.055, 1.24]} rotation={[-0.03, 0.25, 0]} scale={0.25}/>  
            <SciFiBoxes castShadoww receiveShadow position={[-0.8, 0.29, -0.1]} rotation={[0, 0, 0]} scale={0.25}/>   
            <SciFiAmmunitionBox castShadoww receiveShadow position={[-0.8, -0.2, -0.1]} rotation={[0, -0.2, 0]} scale={0.001}/>           
            <SciFiAmmunitionBox2 castShadoww receiveShadow position={[-0.6, -0.12, 0.8]} rotation={[-0.05, 0.5, 0]} scale={0.001}/>           
          </>
        }
        <ambientLight intensity={0.25} />
        <mesh ref={sunRef} position={[-9, 4, -25]}>
          <sphereGeometry args={[0.7, 16, 16]} />
          <meshBasicMaterial color="white" />
        </mesh>
      
      <EffectComposer>
        {sunReady && (
          <GodRays
            sun={sunRef.current}
            samples={20}
            density={0.96}
            decay={0.93}
            weight={0.3}
            exposure={0.6}
          />
        )}
      </EffectComposer>
    </>
  );
}