"use client"

import { motion } from "motion/react"
import { useState } from "react"
import { LeftChevron, RightChevron, Dot } from "./Icons";

const contactMethods = [
  { method: "Github", detail: "Alkoun-web-design", image: "/images/contact/github-icon.svg", link: "https://github.com/Alkoun-web-design" },
  { method: "Linkedin", detail: "Hassam Sajid", image: "/images/contact/linkedin-svgrepo-com.svg", link: "https://www.linkedin.com/in/hassam-sajid-26560752/" },
  { method: "Email", detail: "hassam.dvlpr@proton.me", image: "/images/contact/mail-svgrepo-com.svg", link: "mailto:hassam.dvlpr@proton.me" },
  { method: "Signal", detail: "HassamDev.05", image: "/images/contact/signal-icon.svg", link: "https://signal.me/#eu/l9rXctcsMCHGrSPW8Xts8Odwphgn0RL_hE5Qc_KYJ-EoMQxSMMRHUqNKwqVEhLO9" },
  // { method: "Facebook", detail: "HassamDev.05", image: "/images/contact/signal-svgrepo-com.svg", link: "" },

]
export default function GetInTouch() { 

  const [index, setIndex] = useState(0);

    return (
        <motion.div           
            initial={{ opacity: 0, translateY: 5 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity:0 , translateY: 5 }}
            transition={{ duration: 0.5 }}
            className="text-sm col-start-2 col-end-12 sm:col-start-2 sm:col-end-7 md:col-span-3 lg:col-start-2 lg:col-end-4 row-span-1 md:row-span-2 backdrop-blur-2xl rounded-sm border border-gray-500 p-2 text-wrap overflow-auto"
            >
            <p className="font-[Roboto]">Get in touch with me:</p>
            <div className="flex flex-row justify-between font-[Roboto] align-middle text-sm mt-2">
                <div onClick={() => {index === 0 ? setIndex(contactMethods.length-1) : setIndex(index-1)}} className='bg-gray-900 text-gray-100 hover:bg-gray-100 hover:text-black transition-all h-fit w-fit mx-1 cursor-pointer rounded-sm'>
                    <LeftChevron className='h-5 w-5' />
                </div>
                <motion.a 
                    href={contactMethods[index].link} 
                    target="_blank" 
                    rel="noreferrer noopener" 
                    className="mx-1 rounded-sm hover:-translate-y-1 duration-300 transition-all"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                >
                  <img src={contactMethods[index].image} className="mx-auto h-6 w-6"/>
                  {/* <p className="inline-block align-middle ml-1">{contactMethods[index].method}: </p> */}
                </motion.a>
                <div onClick={() => {index === contactMethods.length-1 ? setIndex(0) : setIndex(index+1)}} className='bg-gray-900 text-gray-100 hover:bg-gray-100 hover:text-black transition-all h-fit w-fit mx-1 cursor-pointer rounded-sm' >
                    <RightChevron className='h-5 w-5' />
                </div>
            </div>
            <div className="text-center">
                <p className="font-[Roboto] inline-block align-middle">{contactMethods[index].detail}</p>
            </div>
            <div className="mx-auto text-center">
                {contactMethods.map((contactMethod, i) => (
                  <p key={contactMethod.method} className={`${ i - 1 < index ? 'inline text-gray-100 select-none' : 'inline text-gray-600 select-none' }`}><Dot /></p>
                ))}
            </div>
        </motion.div>
    )
}
