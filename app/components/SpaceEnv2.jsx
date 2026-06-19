import { OrbitControls, 
  // useProgress, 
  PerspectiveCamera, Html } from "@react-three/drei";
import { Astronaut } from "./Astronaut";
// import { EarthAstronaut } from "./components/EarthAstronaut";
import { Earth1 } from "./Earth1";
import { Moon } from "./Moon";
// import { MoonCrater } from "./components/MoonCrater";
// import { Sun } from "./components/Sun";
import { SciFiLaptop}  from "./SciFiLaptop";
// import { Laptop } from "./components/Laptop";
import { Stars } from "./Stars";
import { SciFiBoxes } from "./SciFiBoxes";
import { SciFiAmmunitionBox } from "./SciFiAmmunitionBox";
import { SciFiAmmunitionBox2 } from "./SciFiAmmunitionBox2";
import { useRef } from "react";
// import { SciFiRadar } from "./components/SciFiRadar";
import { AstronautHelmet } from "./AstronautHelmet";
import { useFrame } from '@react-three/fiber';
export default function SpaceEnv() {

  // const { progress, active, loaded, total } = useProgress();
  const camRef = useRef();
  
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
        position={[10, 20, 20]}
        intensity={8}
        castShadow
        shadow-mapSize={[2048, 2048]} // Higher = sharper shadows
        shadow-camera-near={0.5}
        shadow-camera-far={50}
      />
      {/* <OrbitControls  /> */}
        <Stars position={[0, 0, -20]} scale={0.3}/>
        {/* <Sun position={[10, 5, 20]}/> */}
        <Earth1 castShadow receiveShadow position={[0, 2, -20]} rotation={[1, 0.8, 0]} scale={0.01}/>
        {/* <Astronaut castShadow receiveShadow position={[0.08, -0.2, 1.29]} rotation={[0, -2.9, 0]} scale={0.15}/> */}
        <AstronautHelmet castShadow receiveShadow position={[0, -0.18, 1.17]} rotation={[-0.1, -0.9, 0]} scale={0.009}/>
        {/* <EarthAstronaut castShadow receiveShadow position={[0.08, -0.2, 1.29]} rotation={[5, -3.1, 0]} scale={0.15}/> */}
        <Moon receiveShadow position={[0, -0.6, 0]} scale={2}/>
        {/* <SciFiLaptop castShadoww receiveShadow position={[-0.18, -0.055, 1.24]} rotation={[-0.03, 0.25, 0]} scale={0.25}/>  
        <SciFiBoxes castShadoww receiveShadow position={[-0.8, 0.29, -0.1]} rotation={[0, 0, 0]} scale={0.25}/>           
        <SciFiAmmunitionBox castShadoww receiveShadow position={[-0.8, -0.2, -0.1]} rotation={[0, -0.2, 0]} scale={0.001}/>           
        <SciFiAmmunitionBox2 castShadoww receiveShadow position={[-0.6, -0.12, 0.8]} rotation={[-0.05, 0.5, 0]} scale={0.001}/>            */}
        <ambientLight intensity={0.25} />
    </>
  );
}