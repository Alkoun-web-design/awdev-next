"use client"

import Link from "next/link";
import { lazy, Suspense} from "react";
const MusicPlayer = lazy(() => import("./MusicPlayer"))
import MusicPlayerFallback from "./MusicPlayerFallback"
import { Earth } from "./Icons";

export default function Header() {
    return (
        <nav className="col-span-full row-span-1 font-bold justify-items-center">
            <Suspense fallback={<MusicPlayerFallback/>}>
              <MusicPlayer />
            </Suspense>
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