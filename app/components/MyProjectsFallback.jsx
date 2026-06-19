import { LeftChevron, RightChevron, Spinner } from "./Icons";
import { motion } from 'motion/react';

export default function MyProjectsFallback(){

    return (
        <>
        <motion.div           
          initial={{ opacity: 0, translateY: 5 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity:0 , translateY: 5 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-subgrid col-start-2 col-end-12 md:col-span-5 lg:col-start-2 lg:col-end-6 md:row-span-6 backdrop-blur-2xl rounded-sm border border-gray-500 p-2 text-sm overflow-auto"
        >
            <div className="col-span-full m-2">
                <h3 className="text-xl">Freelance Projects</h3>
            </div>
            <div className='col-span-full text-center justify-items-center font-[Roboto] align-start'>
                <Spinner />
                
            </div>
        </motion.div>
        <motion.div           
          initial={{ opacity: 0, translateY: 5 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity:0 , translateY: 5 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-subgrid col-start-2 col-end-12 md:col-span-7 lg:col-start-6 lg:col-end-12 row-span-6 backdrop-blur-2xl rounded-sm border border-gray-500 p-2 text-sm overflow-auto"
        >
            <div className="col-span-full font-[Roboto] align-start">

                <motion.div           
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className=''>
                    <p>Status: </p> 
                    <p className="m-2">Tech Stack: 
                    </p>
                    <div>
                        <p className="m-2">About Project:</p>
                        <Spinner/>
                    </div>
                </motion.div>
            </div>
        
        </motion.div>
        </>
    )
}