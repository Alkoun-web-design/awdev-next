"use client"

import dynamic from 'next/dynamic';
import ProjectsFallback from './components/ProjectsFallback'
// const Home = dynamic(() => import("./components/Home"),
// {loading: () => <PageFallback/>, ssr: false})// import AttributionsFallback from "./components/AttributionsFallback"
const Projects = dynamic(() => import("./pages/Projects"),
{loading: () => <ProjectsFallback/>, ssr: false})
// const About = dynamic(() => import("./components/About"),
// {loading: () => <PageFallback/>, ssr: false})
// const PricingPlans = dynamic(() => import("./components/PricingPlans"),
// {loading: () => <PageFallback/>, ssr: false})
import PageFallback from "./components/PageFallback";
import Home from "./pages/Home"
import About from "./pages/About"
import PricingPlans from "./pages/PricingPlans"
import { usePage } from "./components/PageContext";


export default function Page(){

  const { page } = usePage();


    return (
      <>
        {page === 'Home' ? (
          <Home/>
        ) : page === 'Pricing Plans' ? (
          <PricingPlans />
        ) : page === 'About' ? (
          <About />
        ) : page === 'Portfolio' ? (
          <Projects />
        ) : (
          <div>
            <h1>Page not Fuund</h1>
          </div>
        )
      
      }     
        </>
    )
}