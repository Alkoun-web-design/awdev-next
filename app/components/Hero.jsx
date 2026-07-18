import { motion } from 'motion/react';
import HeroIcon from "./HeroIcon"

export default function Hero() { 
    return (
        <motion.div 
          initial={{ opacity: 0, translateY: 5 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity:0 , translateY: 5 }}
          transition={{ duration: 0.5 }}
          className="bg-[#FF910010] col-start-2 col-end-12 md:col-span-7 lg:col-start-2 lg:col-end-8 row-start-2 row-span-2 md:row-span-3 backdrop-blur-2xl rounded border border-amber-500 p-2 text-gray-100 overflow-auto">
          <div className="flex flex-row">  
            <div className=''>
              <img alt="Hassam Sajid" src="/images/me.webp" loading='lazy' className="h-20 w-20 rounded-full m-2"/>
            </div>
            <div className=''>
              <h1 className="text-xl md:text-2xl m-2 tracking-tighter text-balance">HASSAM SAJID</h1>
              <h2 className="text-lg md:text-xl m-2 font-[Roboto]">Frontend and Fullstack Web Developer</h2>
            </div>
          </div>
          <div className="flex flex-row ml-auto font-[Roboto] flex-wrap text-sm">
            <HeroIcon title="JavaScript" img="js-icon.svg"/>
            <HeroIcon title="TypeScript" img="ts-icon.svg"/>
            <HeroIcon title="React" img="reactjs-icon.svg"/>
            <HeroIcon title="Next.js" img="nextjs-icon.svg"/>
            <HeroIcon title="Node.js" img="nodejs-icon.svg"/>
            <HeroIcon title="Express.js" img="expressjs-icon.svg"/>
            <HeroIcon title="Alpine.js" img="alpinejs-icon.svg"/>
            <HeroIcon title="Solid.js" img="solidjs-icon.svg"/>
            <HeroIcon title="Tailwind" img="tailwind-icon.svg"/>
            <HeroIcon title="Bun.js" img="bunjs-icon.svg"/>
            <HeroIcon title="Astro.js" img="astrojs-icon.svg"/>
            <HeroIcon title="React Three Fiber" img="threejs-icon.svg"/>
            <HeroIcon title="Eleventy" img="11ty-icon.png"/>
            <HeroIcon title="CSS3" img="css-icon.svg"/>
            <HeroIcon title="html-icon.svg" img="html-icon.svg"/>
            <HeroIcon title="Wordpress" img="wordpress-icon.svg"/>
            <HeroIcon title="MYSQL" img="mysql-icon.svg"/>
            <HeroIcon title="SQLite" img="sqlite-icon.svg"/>
            <HeroIcon title="Git" img="git-icon.svg"/>
          </div>
          {/* <p className="font-[Roboto] my-4">Frontend & Fullstack dev in JavaScript | TypeScript | React | Next.js | Node | Tailwind | Express. Working on an E-commerce website | learning Go. Blender and interested in XR.</p> */}
        </motion.div>
    )
}