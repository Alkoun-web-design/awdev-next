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
          <div className='col-span-full text-center'>
            <div className='border border-amber-500 rounded-full text-gray-100 px-4 py-2 mx-auto mt-10 mb-2 w-fit'>
              <h3 className='text-lg text-amber-500 font-[Roboto]'>
                Performant, accessible, optimized websites.
              </h3>  
            </div>
            <h1 className='text-8xl py-4 text-center bg-clip-text text-transparent text-shadow-sm mask-type-alpha text-shadow-amber-500 my-1 '>
              AWDEV
            </h1>  
            <h2 className='font-[Roboto] text-4xl mt-40'>
              Get your presence established online.
            </h2>
            
          </div>  
        
            {/* <Hero /> */}
            {/* <AboutMe /> */}
            {/* <Suspense fallback={<GetInTouchFallback />}> */}
              {/* <GetInTouch /> */}
            {/* </Suspense> */}
            {/* <Suspense fallback={<AttributionsFallback />}> */}
              {/* <Attributions /> */}
            {/* </Suspense> */}
            {/* <Suspense fallback={<MyProjectsFallback />}> */}
              {/* <MyProjects /> */}
            {/* </Suspense> */}
        </>
    )
}