"use client"

// import Link from "next/link";
import { lazy, Suspense} from "react";
const MusicPlayer = lazy(() => import("./MusicPlayer"))
import MusicPlayerFallback from "./MusicPlayerFallback"
import { usePage } from "./PageContext";

export default function Header() {

    const { setPage } = usePage();

    return (
      <>
        <Suspense fallback={<MusicPlayerFallback/>}>
          <MusicPlayer />
        </Suspense>
        <nav className="hidden md:grid col-span-full row-span-1 justify-items-center text-sm">
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
        <div popover id="nav-menu" className="grid col-span-full row-span-1 backdrop-blur-lg border border-amber-500 md:hidden">
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
          <button className="md:hidden backdrop-blur-lg text-gray-100 hover:text-gray-900 hover:bg-amber-500 p-4 h-16 w-16" popoverTarget="nav-menu">
            Menu
          </button>
        </div>
        
      </>
    )
}