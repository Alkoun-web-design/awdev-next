"use client"

import dynamic from "next/dynamic";
// const MusicPlayer = dynamic(import("./MusicPlayer"),
// {loading: () => <MusicPlayerFallback/>, ssr: false})
import MusicPlayer from "./MusicPlayer"
// import MusicPlayerFallback from "./MusicPlayerFallback"
// const FullNavbar = dynamic(import("./FullNavbar"), 
// {loading: () => <MusicPlayerFallback/>, ssr: false})
import FullNavbar from "./FullNavbar"
import ContactSection from "./ContactSection"
// const MiniNavbar = dynamic(import("./MiniNavbar"), 
// {loading: () => <MusicPlayerFallback/>, ssr: false})
import MiniNavBar from "./MiniNavbar"

export default function Header() {
    return (
      <div className="backdrop-blur-2xl grid grid-cols-subgrid grid-rows-subgrid col-span-full row-span-1">
        <MusicPlayer />
        <FullNavbar />
        <MiniNavBar />
        <ContactSection />
      </div>
    )
}