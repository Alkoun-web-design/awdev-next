"use client"

import { motion } from "motion/react"
import { useState } from "react"
import { LeftChevron, RightChevron, Dot } from "./Icons";

const attributions = [
        { name: "Air Studios", link: "https://sketchfab.com/airstudios3d"},
        { name: "AjaxGb", link: "https://sketchfab.com/ajaxgb"},
        { name: "Patrick Matthew", link: "https://sketchfab.com/patrickmatthew"},
        { name: "Antropik", link: "https://sketchfab.com/Antropik"},
        { name: "SebastianSosnowski", link: "https://sketchfab.com/SebastianSosnowski"},
        { name: "huseState, olgcool", link: "https://sketchfab.com/holgcool"},
        { name: "Sousinho", link: "https://sketchfab.com/sousinho"},
        { name: "ul1tka", link: "https://sketchfab.com/ul1tka"},
        { name: "Scott Buckley", link: "https://www.scottbuckley.com.au/library/permafrost/"},
    ]

export default function Attributions() {

    const [index, setIndex] = useState(0);

    return (
        <motion.div           
            initial={{ opacity: 0, translateY: 5 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity:0 , translateY: 5 }}
            transition={{ duration: 0.5 }}
            className="text-sm col-start-2 col-end-12 sm:col-start-7 sm:col-end-12 md:col-span-3 lg:col-start-4 lg:col-end-6 row-span-1 md:row-span-2 backdrop-blur-2xl rounded-sm border border-gray-500 p-2 text-wrap overflow-auto"
            >
        <p className="font-[Roboto]">Special Thanks to: </p>
            <div className="flex flex-row justify-between font-[Roboto] align-middle text-sm mt-4">
                <div onClick={() => {index === 0 ? setIndex(attributions.length-1) : setIndex(index-1)}} className='bg-gray-900 text-gray-100 hover:bg-gray-100 hover:text-black transition-all h-fit w-fit mx-1 cursor-pointer rounded-sm'>
                    <LeftChevron className='h-5 w-5' />
                </div>
                <a href={attributions[index].link} target="_blank" rel="noreferrer noopener" className="mx-1 rounded-sm hover:-translate-y-1 duration-300 transition-all">
                  {attributions[index].name}
                </a>
                <div onClick={() => {index === attributions.length-1 ? setIndex(0) : setIndex(index+1)}} className='bg-gray-900 text-gray-100 hover:bg-gray-100 hover:text-black transition-all h-fit w-fit mx-1 cursor-pointer rounded-sm' >
                    <RightChevron className='h-5 w-5' />
                </div>
            </div>
            <div className="mx-auto text-center">
                {attributions.map((attribution, i) => (
                  <p key={attribution.name} className={`${ i - 1 < index ? 'inline text-gray-100 select-none' : 'inline text-gray-600 select-none' }`}><Dot /></p>
                ))}
            </div>
        </motion.div>
    )
}