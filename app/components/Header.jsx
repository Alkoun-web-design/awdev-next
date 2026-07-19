"use client"

// import Link from "next/link";
import { lazy, Suspense} from "react";
const MusicPlayer = lazy(() => import("./MusicPlayer"))
import MusicPlayerFallback from "./MusicPlayerFallback"
// import { Earth } from "./Icons";

export default function Header() {
    return (
        <nav className="col-span-full row-span-1 font-bold justify-items-center text-sm">
            <Suspense fallback={<MusicPlayerFallback/>}>
              <MusicPlayer />
            </Suspense>
              <button onClick={() => setPage('Pricing Plans')} className='backdrop-blur-lg text-gray-100 hover:text-gray-900 hover:bg-amber-500 font-[Roboto] py-2 px-6 rounded-full text-lg mx-4 duration-300 transition-all'>
                Pricing Plans
              </button>
              <button onClick={() => setPage('Portfolio')} className='backdrop-blur-lg text-gray-100 hover:text-gray-900 hover:bg-amber-500 font-[Roboto] py-2 px-6 rounded-full text-lg mx-4 duration-300 transition-all'>
                Portfolio
              </button>
              <button onClick={() => setPage('About')} className='backdrop-blur-lg text-gray-100 hover:text-gray-900 hover:bg-amber-500 font-[Roboto] py-2 px-6 rounded-full text-lg mx-4 duration-300 transition-all'>
                About Awdev
              </button>
            {/* <Link href="/home" className="m-2 md:m-4 inline-block text-sm font-[Roboto] bg-gray-900 rounded-full px-4 py-2 w-fit hover:text-gray-900 hover:bg-gray-100 hover:cursor-pointer transition-all">
              Home
              <Earth />
            </Link>
            <Link href=" /portfolio" className="m-2 md:m-4 inline-block text-sm font-[Roboto] bg-gray-900 rounded-full px-4 py-2 w-fit hover:text-gray-900 hover:bg-gray-100 hover:cursor-pointer transition-all">
              Portfolio
              <Earth />
            </Link>
            <Link href=" /pricing-plans" className="m-2 md:m-4 inline-block text-sm font-[Roboto] bg-gray-900 rounded-full px-4 py-2 w-fit hover:text-gray-900 hover:bg-gray-100 hover:cursor-pointer transition-all">
              Pricing Plans
              <Earth />
            </Link> */}
        </nav>
    )
}