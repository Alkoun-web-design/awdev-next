import { motion } from 'motion/react';
import { Spinner } from "./Icons"

export default function AboutMeFallback() { 
    return (
        <motion.div           
            initial={{ opacity: 0, translateY: 5 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity:0 , translateY: 5 }}
            transition={{ duration: 0.5 }}
            className="bg-[#FF910010] col-start-2 col-end-12 lg:col-start-7 lg:col-end-12 h-60 backdrop-blur-2xl rounded-sm border border-amber-500 p-2 text-wrap"
            >
                <Spinner/>
        </motion.div>
    )

}
