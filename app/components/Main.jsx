"use client"

import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import { PageProvider } from "./PageContext";

export function Main() {

    return (
        <main className="grid grid-cols-12 grid-rows-none md:grid-rows-12 gap-2 md:gap-4 lg:gap-6 font-[Syncopate] text-gray-100 h-full md:h-screen w-full overflow-auto">
            <PageProvider>
                <Header/>
                <Sidebar />
                {children}
            </PageProvider >
            <Footer />
        </main>
    )
}