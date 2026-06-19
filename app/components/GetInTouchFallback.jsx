import { motion } from "motion/react"
import { LeftChevron, RightChevron, Dot, Spinner } from "./Icons";

export default function GetInTouchFallback() { 

    return (
        <motion.div           
            initial={{ opacity: 0, translateY: 5 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity:0 , translateY: 5 }}
            transition={{ duration: 0.5 }}
            className="text-sm col-start-2 col-end-12 sm:col-start-2 sm:col-end-7 md:col-span-3 lg:col-start-2 lg:col-end-4 row-span-1 md:row-span-2 backdrop-blur-2xl rounded-sm border border-gray-500 p-2 text-wrap overflow-auto"
            >
            <p className="font-[Roboto]">Get in touch with me:</p>
            <div className="flex flex-row justify-between font-[Roboto] align-middle text-sm mt-4">
                <Spinner />
            </div>
        </motion.div>
    )
}
