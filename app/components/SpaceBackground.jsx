"use client"

import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei"
import dynamic from 'next/dynamic';
const SpaceEnv3 = dynamic(() => import("./SpaceEnv3"),
{ssr: false})


export default function SpaceBackground() {
    return (
        <div className="fixed top-0 -z-10 h-screen w-full bg-black">
            {/* </div> <div className="grid fixed top-0 -z-10 h-screen w-full bg-black place-content-center"> */}
            <Canvas shadows>
                <SpaceEnv3 />
            </Canvas>
            <Loader />
            {/* <div id="testing-earth" className="bg-gray-400 h-40 w-40 ">

            </div> */}


        </div>
    )
}