"use client"

import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei"
import { lazy, Suspense} from "react";
const SpaceEnv3 = lazy(() => import("./SpaceEnv3"));

export default function SpaceBackground() {
    return (
        <div className="fixed top-0 -z-10 h-screen w-full  bg-black">
        {/* <div className="fixed top-0 h-screen w-full  bg-black"> */}
            <Canvas shadows>
                <Suspense fallback={null} >
                    <SpaceEnv3 />
                </Suspense>
            </Canvas>
            <Loader />
        </div>
    )
}