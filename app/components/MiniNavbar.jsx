"use client"

import { useState, useRef} from "react"
import { usePage } from "./PageContext";
import MiniContactBar from "./MiniContactBar"
import { Menu } from "./Icons"

export default function MiniNavbar(){

    const [popoverOpen, setPopoverOpen] = useState(false) 
    const { setPage } = usePage();
    const navRef = useRef(null)

    const handleOpen = () => {
      if (popoverOpen == false) {
        navRef.current?.showPopover();
        setPopoverOpen(true)
      } else {
        navRef.current?.hidePopover();
        setPopoverOpen(false)
      }    
    };

    return (
      <>
        <div ref={navRef} popover="true" className="lg:hidden bg-[#FF910010] rounded backdrop-blur-lg w-60 border border-amber-500 top-12 ml-auto" >
          <nav>
            <div onClick={() => setPage('Home')} className='text-gray-100 hover:text-gray-900 hover:bg-amber-500 font-[Roboto] py-4 px-6 text-lg mx-1 lg:mx-4 duration-300 transition-all hover:cursor-pointer'>
              Home
            </div>
            <div onClick={() => setPage('Pricing Plans')} className='text-gray-100 hover:text-gray-900 hover:bg-amber-500 font-[Roboto] py-4 px-6 text-lg mx-1 lg:mx-4 duration-300 transition-all hover:cursor-pointer'>
              Pricing Plans
            </div>
            <div onClick={() => setPage('Portfolio')} className='text-gray-100 hover:text-gray-900 hover:bg-amber-500 font-[Roboto] py-4 px-6 text-lg mx-1 lg:mx-4 duration-300 transition-all hover:cursor-pointer'>
              Portfolio
            </div>
            <div onClick={() => setPage('About')} className='text-gray-100 hover:text-gray-900 hover:bg-amber-500 font-[Roboto] py-4 px-6 text-lg mx-1 lg:mx-4 duration-300 transition-all hover:cursor-pointer'>
              About Awdev
            </div>
            <div>
              <MiniContactBar />
            </div>
          </nav>
        </div>
        <div className="lg:hidden col-span-2 col-end-13" >
            <button title="navigation menu" className="border border-amber-500 rounded backdrop-blur-lg text-gray-100 hover:text-gray-900 hover:bg-amber-500 h-12 w-12 hover:cursor-pointer my-auto" onClick={handleOpen}>
              <Menu />
            </button>
        </div>
      </>
    )
}

