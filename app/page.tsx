"use client"

import dynamic from 'next/dynamic';
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
// const Attributions = dynamic(() => import("./components/Attributions"),
// {loading: () => <AttributionsFallback/>, ssr: false})
// import AttributionsFallback from "./components/AttributionsFallback"
const MyProjects = dynamic(() => import("./components/MyProjects"),
{loading: () => <MyProjectsFallback/>, ssr: false})
import MyProjectsFallback from "./components/MyProjectsFallback"
// const GetInTouch = dynamic(() => import("./components/GetInTouch"),
// {loading: () => <PageFallback/>, ssr: false})
const PricingPlans = dynamic(() => import("./components/PricingPlans"),
{loading: () => <PageFallback/>, ssr: false})
import PageFallback from "./components/PageFallback";
import { usePage } from "./components/PageContext";

export default function Page(){

  const { page, setPage } = usePage();


    return (
      <>
        {page === 'Home' ? (
          <div className='col-span-full text-center'>
            <div className='border border-amber-500 rounded-full text-gray-100 px-4 py-2 mx-auto mt-10 mb-2 w-fit'>
              <h3 className=' text-amber-500 font-[Roboto]'>
                Performant, accessible, optimized websites.
              </h3>  
            </div>
            <h1 className='text-8xl py-4 text-center bg-clip-text text-transparent text-shadow-sm mask-type-alpha text-shadow-amber-500 my-1 '>
              AWDEV
            </h1>  
            <h2 className='font-[Roboto] text-4xl mt-40'>
              Get your presence established online.
            </h2>
            <div className='flex flex-row justify-center'>
              <button onClick={() => setPage('Pricing Plans')} className='backdrop-blur-lg border border-amber-500 text-gray-100 hover:text-gray-900 hover:bg-amber-500 font-[Roboto] py-2 px-6 rounded-full text-lg m-8 duration-300 transition-all'>
                Pricing Plans
              </button>
              <button onClick={() => setPage('Portfolio')} className='backdrop-blur-lg border border-amber-500 text-gray-100 hover:text-gray-900 hover:bg-amber-500 font-[Roboto] py-2 px-6 rounded-full text-lg m-8 duration-300 transition-all'>
                Portfolio
              </button>
              <button onClick={() => setPage('About')} className='backdrop-blur-lg border border-amber-500 text-gray-100 hover:text-gray-900 hover:bg-amber-500 font-[Roboto] py-2 px-6 rounded-full text-lg m-8 duration-300 transition-all'>
                About Awdev
              </button>
            </div>
          </div>
        ) : page === 'Pricing Plans' ? (
          <PricingPlans />
        ) : page === 'About' ? (
          <>
          <Hero />
          <AboutMe />
          </>
        ) : page === 'Portfolio' ? (
            <MyProjects />
        ) : (
          <div>
            <h1>Page not Fuund</h1>
          </div>
        )
      
      }     
        </>
    )
}