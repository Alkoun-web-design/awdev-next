import { OrbitControls, Environment, PerspectiveCamera, Center } from "@react-three/drei";
import { CyberpunkLaptop } from "./CyberpunkLaptop";
import { CafeMisti } from "./components/CafeMisti";

export default function CafeMistiEnv() {
  return (
    <>
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.2}
          castShadow
          shadow-mapSize={[2048, 2048]} // Higher = sharper shadows
          shadow-camera-near={0.5}
          shadow-camera-far={50}
        />
        <OrbitControls  />
        <Environment preset="sunset" background/>
        <PerspectiveCamera   
          fov={45} // Lower = less distortion
          near={0.1} // Adjust to model size
          far={100}>
          <CafeMisti shadows position={[-4.6, -1.2, 1]} />
          <CyberpunkLaptop castShadoww position={[0, 0, 0]}/> 
        </PerspectiveCamera>
        <ambientLight intensity={2} />
        {/* <directionalLight position={[20, 3, 20]} intensity={0.5} color="white" /> */}
    </>
  );
}