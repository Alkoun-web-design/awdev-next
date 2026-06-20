import {useState, useEffect, useRef} from "react";
import { PerspectiveCamera, OrbitControls, Html, ScreenSpace } from "@react-three/drei";
// import { Astronaut } from "./Astronaut";
import { Stars } from "./Stars";
import { EffectComposer, GodRays } from '@react-three/postprocessing'
import { Earth5 } from "./Earth5";
// import { Earth6 } from "./Earth6";

export default function SpaceEnv3() {

    const [sunReady, setSunReady] = useState(false)
    // const { progress, active, loaded, total } = useProgress();
    const camRef = useRef();
    const sunRef = useRef();
           
    useEffect(() => {
        // Wait for sun to be available
        if (sunRef.current) {
          setSunReady(true)
        }
    }, [])
        
    return (
        <>
          {/* <OrbitControls /> */}
          <PerspectiveCamera
            ref={camRef}
            makeDefault
            position={[0, 0.0, 1.5]}   
            fov={20}
            // near={0.5} // Adjust to model size
            // far={10}
          />
          <directionalLight
            position={[-2, 6, -18]}
            intensity={9}
            castShadow
            shadow-mapSize={[2048, 2048]} // Higher = sharper shadows
          />
            {/* <Stars position={[0, 0, -27]} scale={0.3}/> */}
            {/* <Earth castShadow receiveShadow position={[0, -0.8, -1.4]} rotation={[-0.2, 0, 0]} scale={0.01}/>  */}
            {/* <Earth3 castShadow receiveShadow position={[0, -0.8, -1.4]} rotation={[-0.2, 0, 0]} scale={0.01}/>  */}
            <Earth5 castShadow receiveShadow position={[0, -0.8, -1.4]} rotation={[-0.8, -0.4, -1.2]} scale={0.01}/> 
            {/* <Earth6 castShadow receiveShadow position={[0, -0.8, -1.4]} rotation={[-0.3, 0, 0]} scale={0.19}/>  */}
            {/* <Astronaut castShadow receiveShadow position={[0, -0.01, 1.29]} rotation={[-0.3, -3.3, 0]} scale={0.01}/> */}
            <ambientLight intensity={0.2} />
            <mesh ref={sunRef} position={[-2, 2, -25]} scale={0.3} >
              <sphereGeometry args={[0.7, 16, 16]} />
              <meshBasicMaterial color="white" />
            </mesh>
        
          <EffectComposer>
            {sunReady && (
              <GodRays
                sun={sunRef.current}
                samples={55}
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