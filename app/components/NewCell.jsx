import { motion } from 'motion/react';


export default function NewCell() {
    return(
        <>
            <motion.div           
              initial={{ opacity: 0, translateY: 5 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity:0 , translateY: 5 }}
              transition={{ duration: 0.5 }}
              className="hidden grid-cols-subgrid col-start-2 col-end-12 md:col-span-1 lg:col-start-6 lg:col-end-8 md:row-span-2 backdrop-blur-2xl rounded-sm border border-gray-500 p-2 text-sm overflow-auto">

            </motion.div>
        </>
    )
}