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
import Home from "./components/Home";

export default function Page(){

  const { page, setPage } = usePage();


    return (
      <>
        {page === 'Home' ? (
          <Home/>
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