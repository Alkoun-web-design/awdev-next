
import { motion } from "motion/react"
import { LeftChevron, RightChevron, Spinner } from "./Icons";

export default function AttributionsFallback() {

    return (
        <motion.div           
            initial={{ opacity: 0, translateY: 5 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity:0 , translateY: 5 }}
            transition={{ duration: 0.5 }}
            className="text-sm col-start-2 col-end-12 sm:col-start-7 sm:col-end-12 md:col-span-3 lg:col-start-4 lg:col-end-6 row-span-1 md:row-span-2 backdrop-blur-2xl rounded-sm border border-gray-500 p-2 text-wrap overflow-auto"
            >
        <p className="font-[Roboto]">Special Thanks to: </p>
            <div className="flex flex-row justify-between font-[Roboto] align-middle text-sm mt-4">
                <Spinner />
            </div>
        </motion.div>
    )
}