"use client"

import { usePage } from "./PageContext";

export default function FullNavbar(){
    
    const { setPage } = usePage();

    return (
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
    )
}