"use client"

// import Link from "next/link";
import { lazy, Suspense} from "react";
const MusicPlayer = lazy(() => import("./MusicPlayer"))
import MusicPlayerFallback from "./MusicPlayerFallback"
import { usePage } from "./PageContext";
import ContactSection from "./ContactSection"

export default function Header() {

    const { setPage } = usePage();

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
        <div popover="true" id="nav-menu" className="bg-[#FF910010] backdrop-blur-2xl grid col-span-3 row-span-1 border border-amber-500 md:hidden">
          <nav>
            <div onClick={() => setPage('Home')} className='text-gray-100 hover:text-gray-900 hover:bg-amber-500 font-[Roboto] h-10 py-2 px-6 rounded-full text-lg mx-4 duration-300 transition-all'>
              Home
            </div>
            <div onClick={() => setPage('Pricing Plans')} className='text-gray-100 hover:text-gray-900 hover:bg-amber-500 font-[Roboto] py-2 px-6 rounded-full text-lg mx-4 duration-300 transition-all'>
              Pricing Plans
            </div>
            <div onClick={() => setPage('Portfolio')} className='text-gray-100 hover:text-gray-900 hover:bg-amber-500 font-[Roboto] py-2 px-6 rounded-full text-lg mx-4 duration-300 transition-all'>
              Portfolio
            </div>
            <div onClick={() => setPage('About')} className='text-gray-100 hover:text-gray-900 hover:bg-amber-500 font-[Roboto] py-2 px-6 rounded-full text-lg mx-4 duration-300 transition-all'>
              About Awdev
            </div>
          </nav>
        </div>
        <button className="md:hidden col-span-1 col-end-13 backdrop-blur-lg text-gray-100 hover:text-gray-900 hover:bg-amber-500 p-4 h-16 w-16" popoverTarget="nav-menu">
            Menu
        </button>
        <ContactSection />
        
      </div>
    )
}