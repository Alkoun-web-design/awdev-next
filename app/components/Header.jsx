"use client"

// import dynamic from "next/dynamic";
// const MusicPlayer = dynamic(import("./MusicPlayer"),
// {loading: () => <MusicPlayerFallback/>, ssr: false})
// const MiniNavbar = dynamic(import("./MiniNavbar"), 
// {loading: () => <MiniNavbarFallback/>, ssr: false})
// import MusicPlayerFallback from "./MusicPlayerFallback"
// import MiniNavbarFallback from "./MiniNavbarFallback";
// const FullNavbar = dynamic(import("./FullNavbar"), 
// {loading: () => <MusicPlayerFallback/>, ssr: false})
import MusicPlayer from "./MusicPlayer"
import FullNavbar from "./FullNavbar"
import MiniNavbar from "./MiniNavbar"
import ContactSection from "./ContactSection"

// import MiniNavBar from "./MiniNavbar"

export default function Header() {
    return (
      <div className="backdrop-blur-2xl grid grid-cols-subgrid grid-rows-subgrid col-span-full row-span-1">
        <MusicPlayer />
        <FullNavbar />
        <MiniNavbar />
        <ContactSection />
      </div>
    )
}