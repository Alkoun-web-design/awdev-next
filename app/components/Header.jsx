"use client"

// import Link from "next/link";
import { lazy, Suspense} from "react";
const MusicPlayer = lazy(() => import("./MusicPlayer"))
import MusicPlayerFallback from "./MusicPlayerFallback"
import { usePage } from "./PageContext";

export default function Header() {

    const { setPage } = usePage();

    return (
        <nav className="col-span-full row-span-1 font-bold justify-items-center text-sm">
            <Suspense fallback={<MusicPlayerFallback/>}>
              <MusicPlayer />
            </Suspense>
              <button onClick={() => setPage('Home')} className='backdrop-blur-lg text-gray-100 hover:text-gray-900 hover:bg-amber-500 font-[Roboto] py-2 px-6 rounded-full text-lg mx-4 duration-300 transition-all'>
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
        </nav>
    )
}