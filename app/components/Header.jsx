"use client"

// import Link from "next/link";
import { lazy, Suspense, useState, useRef} from "react";
const MusicPlayer = lazy(() => import("./MusicPlayer"))
import MusicPlayerFallback from "./MusicPlayerFallback"
import { usePage } from "./PageContext";
import ContactSection from "./ContactSection"
import MiniContactBar from "./MiniContactBar"

export default function Header() {


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
      <div className="backdrop-blur-2xl grid grid-cols-subgrid grid-rows-subgrid col-span-full row-span-1">
        <Suspense fallback={<MusicPlayerFallback/>}>
          <MusicPlayer />
        </Suspense>

        <nav className="hidden md:inline-grid col-span-8 row-span-1 justify-items-center text-sm py-2">
          <div className="hidden md:inline-block">
            <button onClick={() => setPage('Home')} className='backdrop-blur-lg text-gray-100 hover:text-gray-900 hover:bg-amber-500 font-[Roboto] h-10 py-2 px-6 rounded-full text-lg mx-4 duration-300 transition-all'>
              Home
            </button>
            <button onClick={() => setPage('Pricing Plans')} className='backdrop-blur-lg text-gray-100 hover:text-gray-900 hover:bg-amber-500 font-[Roboto] py-2 px-6 rounded-full text-lg mx-4 duration-300 transition-all'>
              Pricing Plans
            </button>
            <button onClick={() => setPage('Portfolio')} className='backdrop-blur-lg text-gray-100 hover:text-gray-900 hover:bg-amber-500 font-[Roboto] py-2 px-6 rounded-full text-lg mx-4 duration-300 transition-all'>
              Portfolio
            </button>
            <button onClick={() => setPage('About')} className='backdrop-blur-lg text-gray-100 hover:text-gray-900 hover:bg-amber-500 font-[Roboto] py-2 px-6 rounded-full text-lg mx-4 duration-300 transition-all'>
              About Awdev
            </button>
          </div>
        </nav>
        <div ref={navRef} popover="true" className="bg-[#FF910010] rounded backdrop-blur-lg w-60 border border-amber-500 md:hidden top-12 mr-0" >
          <nav>
            <div onClick={() => setPage('Home')} className='text-gray-100 hover:text-gray-900 hover:bg-amber-500 font-[Roboto] h-10 py-2 px-6 text-lg mx-1 lg:mx-4 duration-300 transition-all hover:cursor-pointer'>
              Home
            </div>
            <div onClick={() => setPage('Pricing Plans')} className='text-gray-100 hover:text-gray-900 hover:bg-amber-500 font-[Roboto] py-2 px-6 text-lg mx-1 lg:mx-4 duration-300 transition-all hover:cursor-pointer'>
              Pricing Plans
            </div>
            <div onClick={() => setPage('Portfolio')} className='text-gray-100 hover:text-gray-900 hover:bg-amber-500 font-[Roboto] py-2 px-6 text-lg mx-1 lg:mx-4 duration-300 transition-all hover:cursor-pointer'>
              Portfolio
            </div>
            <div onClick={() => setPage('About')} className='text-gray-100 hover:text-gray-900 hover:bg-amber-500 font-[Roboto] py-2 px-6 text-lg mx-1 lg:mx-4 duration-300 transition-all hover:cursor-pointer'>
              About Awdev
            </div>
            <div>
              <MiniContactBar />
            </div>
          </nav>
        </div>
        <button onClick={handleOpen} className="mx-auto md:hidden col-span-2 col-end-12 rounded backdrop-blur-lg text-gray-100 hover:text-gray-900 hover:bg-amber-500 py-2 px-4 h-12 w-24 hover:cursor-pointer" >
            Menu
        </button>
        <ContactSection />
        
      </div>
    )
}