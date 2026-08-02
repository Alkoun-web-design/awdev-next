"use client"

import dynamic from 'next/dynamic';
// const Home = dynamic(() => import("./components/Home"),
// {loading: () => <PageFallback/>, ssr: false})// import AttributionsFallback from "./components/AttributionsFallback"
const MyProjects = dynamic(() => import("./components/Projects"),
{loading: () => <PageFallback/>, ssr: false})
// const About = dynamic(() => import("./components/About"),
// {loading: () => <PageFallback/>, ssr: false})
// const PricingPlans = dynamic(() => import("./components/PricingPlans"),
// {loading: () => <PageFallback/>, ssr: false})
import PageFallback from "./components/PageFallback";
import Home from "./components/Home"
import About from "./components/About"
import PricingPlans from "./components/PricingPlans"
// import MyProjects from "./components/MyProjects"
import { usePage } from "./components/PageContext";


export default function Page(){

  const { page, setPage } = usePage();


    return (
      <>
        {page === 'Home' ? (
          <Home/>
        ) : page === 'Pricing Plans' ? (
          <PricingPlans />
        ) : page === 'About' ? (
          <About />
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