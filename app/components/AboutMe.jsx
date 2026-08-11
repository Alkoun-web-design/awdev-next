import { motion } from 'motion/react';

export default function AboutMe() { 
    return (
        <motion.div           
            initial={{ opacity: 0, translateY: 5 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity:0 , translateY: 5 }}
            transition={{ duration: 0.5 }}
            className="bg-[#FF910010] col-start-2 col-end-12 lg:col-start-7 lg:col-end-12 h-fit backdrop-blur-2xl rounded-sm border border-amber-500 p-2 text-wrap"
            >
            <div className="grid justify-items-center text-center m-2">
                <h3 className="text-xl">About AwDev</h3>
            </div>
            <div className="font-[Roboto] text-sm">
                <p className='m-4'>As a dissatsified lawyer, I had been contemplating coding for a few years, I finally took the leap and transitioned to Web Development in the wake of COVID-19 back in 2020.</p>
                <p className='m-4'>Being a web developer allows me to pursue the same goals as a lawyer... but with much more satisfaction.</p>
                <p className='m-4'>Since then, I have learnt to built and maintain frontend and fullstack websites for multiple clients, and also started my own projects.</p>
                <p className='m-4'>I have built in JavaScript, TypeScript, React, Next.js, Node.js, Express, Alpine.js, CSS, Tailwind, Bootstrap, React Three Fiber, Astro.js, Solid.js and Bun.js.</p>
                <p className='m-4'>I am currently working on a personal finance app, an e-commerce website, and building a new website for psychologists.</p>
                <p className='m-4'>I am learning 
                <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
                    <img alt="Blender icon" src="/images/blender-icon.svg" className="inline w-6 h-6 ml-3 mr-1 my-1"/>
                    <span className="">blender</span>
                </span>, testing and 
                <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
                    <img alt="Golang icon" src="/images/tech-stack/go-icon2.svg" className="inline w-6 h-6 ml-3 mr-1 my-1"/>
                    <span className="">Golang</span>
                </span>
              </p>
            </div>
        </motion.div>
    )

}
