"use client"

import { usePage } from "./PageContext";

export default function FullNavbar(){
    
    const { setPage } = usePage();

    return (
        <nav className="hidden lg:inline-grid lg:col-span-7 xl:col-span-8 row-span-1 justify-items-center text-sm py-2 my-auto">
          <div className="hidden md:inline-block">
            <button onClick={() => setPage('Home')} className='backdrop-blur-lg text-gray-100 hover:text-gray-900 hover:bg-amber-500 font-[Roboto] py-2 px-4 rounded-full text-lg mx-2 duration-300 transition-all'>
              Home
            </button>
            {/* <button onClick={() => setPage('Pricing Plans')} className='backdrop-blur-lg text-gray-100 hover:text-gray-900 hover:bg-amber-500 font-[Roboto] py-2 px-4 rounded-full text-lg mx-2 duration-300 transition-all'>
              Pricing Plans
            </button> */}
            <button onClick={() => setPage('Portfolio')} className='backdrop-blur-lg text-gray-100 hover:text-gray-900 hover:bg-amber-500 font-[Roboto] py-2 px-4 rounded-full text-lg mx-2 duration-300 transition-all'>
              Portfolio
            </button>
            <button onClick={() => setPage('About')} className='backdrop-blur-lg text-gray-100 hover:text-gray-900 hover:bg-amber-500 font-[Roboto] py-2 px-4 rounded-full text-lg mx-2 duration-300 transition-all'>
              About Awdev
            </button>
          </div>
        </nav>
    )
}