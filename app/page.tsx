"use client"

import dynamic from 'next/dynamic';
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
const Attributions = dynamic(() => import("./components/Attributions"),
{loading: () => <AttributionsFallback/>, ssr: false})
import AttributionsFallback from "./components/AttributionsFallback"
const MyProjects = dynamic(() => import("./components/MyProjects"),
{loading: () => <MyProjectsFallback/>, ssr: false})
import MyProjectsFallback from "./components/MyProjectsFallback"
const GetInTouch = dynamic(() => import("./components/GetInTouch"),
{loading: () => <GetInTouchFallback/>, ssr: false})
import GetInTouchFallback from "./components/GetInTouchFallback";

export default function Page(){
    return (
        <>     
            <Hero />
            <AboutMe />
            {/* <Suspense fallback={<GetInTouchFallback />}> */}
              <GetInTouch />
            {/* </Suspense> */}
            {/* <Suspense fallback={<AttributionsFallback />}> */}
              <Attributions />
            {/* </Suspense> */}
            {/* <Suspense fallback={<MyProjectsFallback />}> */}
              <MyProjects />
            {/* </Suspense> */}
        </>
    )
}