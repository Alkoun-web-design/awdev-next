import { motion } from 'motion/react';

export default function Hero() { 
    return (
        <motion.div 
          initial={{ opacity: 0, translateY: 5 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity:0 , translateY: 5 }}
          transition={{ duration: 0.5 }}
          className="col-start-2 col-end-12 md:col-span-7 lg:col-start-2 lg:col-end-8 row-start-2 row-span-2 md:row-span-3 backdrop-blur-2xl rounded-xl border border-gray-500 p-2 text-gray-100 overflow-auto">
          <div className="flex flex-row">  
            <div className=''>
              <img src="/images/me.webp" loading='lazy' className="h-20 w-20 rounded-full m-2"/>
            </div>
            <div className=''>
              <h1 className="text-xl md:text-4xl m-2 tracking-tighter text-balance">HASSAM SAJID</h1>
              <h2 className="text-lg md:text-xl m-2 font-[Roboto]">Frontend and Fullstack Web Developer</h2>
            </div>
          </div>
          <div className="flex flex-row ml-auto font-[Roboto] flex-wrap text-sm">
            <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
              <img src="/images/tech-stack/js-icon.svg" className="inline w-4 h-4 ml-3 mr-1 my-1"/>
              <span className="my-auto">JavaScript</span>
            </span>
            <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
              <img src="/images/tech-stack/ts-icon.svg" className="inline w-4 h-4 ml-3 mr-1 my-1"/>
              <span className="my-auto">TypeScript</span>
            </span>
            <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
              <img src="/images/tech-stack/reactjs-icon.svg" className="inline w-4 h-4 ml-3 mr-1 my-1"/>
              <span className="my-auto">React</span>
            </span>
            <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
              <img src="/images/tech-stack/nextjs-icon.svg" className="inline w-4 h-4 ml-3 mr-1 my-1"/>
              <span className="my-auto">Next.js</span>
            </span>
            <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
              <img src="/images/tech-stack/nodejs-icon.svg" className="inline w-4 h-4 ml-3 mr-1 my-1"/>
              <span className="my-auto">Node.js</span>
            </span>
            <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
              <img src="/images/tech-stack/expressjs-icon.svg" className="inline w-4 h-4 ml-3 mr-1 my-1"/>
              <span className="my-auto">Express.js</span>
            </span>
            <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
              <img src="/images/tech-stack/alpinejs-icon.svg" className="inline w-4 h-4 ml-3 mr-1 my-1"/>
              <span className="my-auto">Alpine.js</span>
            </span>
            <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
              <img src="/images/tech-stack/solidjs-icon.svg" className="inline w-4 h-4 ml-3 mr-1 my-1"/>
              <span className="my-auto">Solid.js</span>
            </span>
            <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
              <img src="/images/tech-stack/tailwind-icon.svg" className="inline w-4 h-4 ml-3 mr-1 my-1"/>
              <span className="my-auto">Tailwind</span>
            </span>
            <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
              <img src="/images/tech-stack/bunjs-icon.svg" className="inline w-4 h-4 ml-3 mr-1 my-1"/>
              <span className="my-auto">Bun.js</span>
            </span>
            <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
              <img src="/images/tech-stack/astrojs-icon.svg" className="inline w-4 h-4 ml-3 mr-1 my-1"/>
              <span className="my-auto">Astro.js</span>
            </span>
            <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
              <img src="/images/tech-stack/threejs-icon.svg" className="inline w-4 h-4 ml-3 mr-1 my-1"/>
              <span className="my-auto">React Three Fiber</span>
            </span>
            <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
              <img src="/images/tech-stack/11ty-icon.png" className="inline w-4 h-4 ml-3 mr-1 my-1"/>
              <span className="my-auto">11ty</span>
            </span>
            <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
              <img src="/images/tech-stack/css-icon.svg" className="inline w-4 h-4 ml-3 mr-1 my-1"/>
              <span className="my-auto">CSS3</span>
            </span>
            <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
              <img src="/images/tech-stack/html-icon.svg" className="inline w-4 h-4 ml-3 mr-1 my-1"/>
              <span className="my-auto">HTML5</span>
            </span>
            <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
              <img src="/images/tech-stack/wordpress-icon.svg" className="inline w-4 h-4 ml-3 mr-1 my-1"/>
              <span className="my-auto">Wordpress</span>
            </span>
            <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
              <img src="/images/tech-stack/mysql-icon.svg" className="inline w-4 h-4 ml-3 mr-1 my-1"/>
              <span className="my-auto">MySQL</span>
            </span>
            <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
              <img src="/images/tech-stack/sqlite-icon.svg" className="inline w-4 h-4 ml-3 mr-1 my-1"/>
              <span className="my-auto">SQLite</span>
            </span>
            <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
              <img src="/images/git-icon.svg" className="inline w-4 h-4 ml-3 mr-1 my-1"/>
              <span className="my-auto">Git</span>
            </span>
          </div>
          {/* <p className="font-[Roboto] my-4">Frontend & Fullstack dev in JavaScript | TypeScript | React | Next.js | Node | Tailwind | Express. Working on an E-commerce website | learning Go. Blender and interested in XR.</p> */}
        </motion.div>
    )
}