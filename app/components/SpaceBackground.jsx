"use client"

import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei"
import dynamic from 'next/dynamic';
const SpaceEnv3 = dynamic(() => import("./SpaceEnv3"),
{ssr: false})


export default function SpaceBackground() {
    return (
        <div className="fixed top-0 -z-10 h-screen w-full  bg-black">
        {/* <div className="fixed top-0 h-screen w-full  bg-black"> */}
            <Canvas shadows>
                {/* <Suspense fallback={null} > */}
                    <SpaceEnv3 />
                {/* </Suspense> */}
            </Canvas>
            <Loader />
        </div>
    )
}