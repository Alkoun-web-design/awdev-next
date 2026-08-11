import { motion } from 'motion/react';
import { Spinner } from "./Icons"

export default function HeroFallback() {
    return (
        <motion.div 
          initial={{ opacity: 0, translateY: 5 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity:0 , translateY: 5 }}
          transition={{ duration: 0.5 }}
          // className="bg-[#FF910010] col-start-2 col-end-12 md:col-span-7 lg:col-start-2 lg:col-end-8 row-start-2 row-span-2 md:row-span-3 backdrop-blur-2xl rounded border border-amber-500 p-2 text-gray-100 overflow-auto">
          className="bg-[#FF910010] col-start-2 col-end-12 lg:col-start-2 lg:col-end-7 h-60 backdrop-blur-2xl rounded border border-amber-500 p-2 text-gray-100 overflow-auto"
        >
            <Spinner />
        </motion.div>
    )
}