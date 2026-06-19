import React from 'react';
import { motion } from "motion/react"
import Footer from './Footer';
export default function Home() {

  return (
      <>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col select-none text-center text-gray-100">
          <h1 className="text-6xl md:text-8xl">AWDev</h1>
          {/* <h2 className="text-sm md:text-lg">FullStack Websites & Webapps</h2> */}
        </motion.div>
        <Footer />
      </>
    )
}