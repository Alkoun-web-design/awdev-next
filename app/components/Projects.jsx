"use client"

import { useState } from 'react';
import { LeftChevron, RightChevron, Link, Close } from "./Icons";
import { motion } from 'motion/react';
export default function Projects({setContent}){

    const projects = [
        {
            name: 'Counselling with Iqra',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">A psychologist who wanted a business website with blogging capabilities. It was originally created using HTML, CSS, JavaScript and PHP as a custom wordpress theme, and then deployed on a standard hosting service provider providing for wordpress hosting, with a domain name.</p> 
                <p className="m-2">Later the client sought to have their website redesigned, hosted without paying the hosting charges, and maintain the blogging capabilities of the original.</p>
                <p className="m-2">I knew of netlify's free tier and support for static site generators and front end web apps and websites. I redesigned the website after taking a UI/UX course from Udemy, using HTML, CSS JavaScript, and a static site generator called 11ty. the blogging capabilities were reserved, as the client could now write in markdown files and insert them into a "blogs" folder to dynamically assemble a page for the new blog.</p>
                <p className='m-2'>The project gave me an understanding of creating custom wordpress themes using HTML, CSS, JavaScript and PHP to create a wordpress theme. Later the use of  11ty with "Nunjucks" as a templating language allowed for me to use templates and inserting of blogs through markdown files.</p>
            </div>,
            stack: '11ty',
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://project-1-cwi-11ty.netlify.app/'
        },
        {
            name: 'Stellar Services International',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">A simple business website, developed using the Divi Builder on wordpress. The business is a subsidiary of the Canam Steel Pvt Ltd.</p> 
                <p className="m-2">Before designing the website, I undertook a website designing course from Udemy. with this new approach, I focused on using a builder so I can have maximum focus on designing rather than development.</p>
            </div>,
            stack: 'Wordpress',
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://stellarservices.international/'
        },
        {
            name: 'Art Gallery Website',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">A website for displaying art from various users. The website was built purely on HTML, CSS and JavaScript.</p> 
                <p className="m-2">The website was left incomplete at its inception, as the persons involved decided to move onto other endeavours.</p>
            </div>,
            stack: 'HTML, CSS, JS',
            status: 'In-development',
            githubLink: '',
            hostLink: 'https://incomparable-naiad-ada14b.netlify.app/'
        },
        {
            name: 'Alkoun web design website',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">It was time to build my portfolio website, and try and implement my choices regarding not only style but programming as well.</p> 
                <p className="m-2">The website was built purely on HTML, CSS and JavaScript. The navigation and animations were entirely handled by JavaScript, and it was the first programming problem I had solved using my existing knowledge of JavaScript at that time. It gave me confidence that I could program in the future.</p> 
                <p className="m-2">While it was a great accomplishment, I had further ambitions of inserting 3D Models and levels of interactivity on the website, this led me to come back when I had understood how to use 3D models in web projects.</p>
            </div>,
            stack: 'HTML, CSS, JS',
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://alkounwebdesigns.netlify.app/'
        },
        {
            name: 'AWDev website',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">I redesigned the portfolio website to reflect the original ambitions of the first one, using React and React Three Fiber.</p> 
                <p className="m-2">I came back to the website years later to finally use 3D models for a scene based in space, once I had grown comfortable with React. However I realized I need to further understand animations, compression, editing of meshes and textures regarding 3D models.</p>
                <p className="m-2">I learnt to use drei tools, effective scene building, use of simple animations, custom models with custom textures, and optimized 3d models. However there is plenty to learn, and my portfolio website serves as a perfect testing ground for Augmented Reality and Virtual Reality.</p>
            </div>,
            stack: 'React 3 Fiber',
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://awdev.netlify.app/'
        },
        {
            name: 'Saeed & Sons Ecommerce website',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">The client owns a super store and wanted to increase his reach in the neighborhood his store was situated in. He wanted an e-commerce store to also bring his business presence to the internet.</p> 
                <p className="m-2">Even though I was well versed in HTML, CSS and JavaScript, it would require too much time to create an e-commerce website from scratch, especially without any knowledge of a backend. After I decided to use React with MUI, it became my first React project. Without any prior knowledge of React I rushed to learn components, props, state management and data fetching. I coupled the React frontend with a Medusa.js backend that deals with the inventory and shopping cart mechanics.</p> 
                <p className="m-2">I lost the project after two weeks of work, and felt as if i had failed, however, upon reflection I had finally learnt React.js and was optimistic to use in future projects.</p>
            </div>,
            stack: 'React and MedusaJS',
            status: 'In-development',
            githubLink: '',
            hostLink: 'https://project-5-ochre.vercel.app/'
        },
        {
            name: 'Birthday wishing website',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">My first React Three Fiber website, it was originally designed to wish someone personally on their birthday.</p> 
                <p className="m-2">The scene was originally inside a cafe with balloons, two cakes, and people seated at their tables. Another building was visible through the window from across the street.</p>
                <p className="m-2">I recently redesigned the scene to have fewer models, with smaller sizes and animations, with the aim of communicating the message through angles and objects, instead of building an complete scene. This resulted in better loading times, better performance with the least usage of resources.</p>
            </div>,
            stack: 'React 3 Fiber',
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://project-6-r3f-birthday.netlify.app/'
        },
        {
            name: 'AARC website',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">A website for a team of psychologists and psychotherapists who were launching a space for therapists. The website was built using HTML, CSS and JavaScript on the frontend, and for the first time, NodeJs on the backend to validate and accept form submissions, whilst serving static files.</p> 
                <p className="m-2">The design was rudimentary as there was a certain deadline by which the team wanted the website to be up and active, with the most important aspect of the website being that visitors could submit their forms to the team.</p>
                <p className="m-2">This was my fist foray into a backend, preoccupying most of my time, resulting in a lackluster website design. I made commitments to upgrade the design later that year.</p>
            </div>,
            stack: 'HTML, CSS, JS, NodeJS',
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://project-7-aarc-node.vercel.app/'
        },
        {
            name: 'AARC website re-designed',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">The website for AARC was re-designed a year later using tailwind css, tailgrids templates, and also incorporating animations through state management using AlpineJS.</p> 
                <p className="m-2">The design was much cleaner, with more use of white. There was a dilemma on whether i should use HTMX, Alpine.js, or React.js, and eventually settled on Alpine.js due to it being readily incorporated into the template. Much of the form functionality carried over from the old website to the redesigned website.</p>
            </div>,
            stack: 'AlpineJS, NodeJS',
            status: 'Complete',
            githubLink: '',
            hostLink: 'http://aarctherapy.com/'
        },
        {
            name: 'Binance Cryptocurrency Table',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">A personal project, built using SolidJS through the Astro framework for performance in mind. There was much being made of signals and how they improved performance by removed the shadow DOM update step, therefore i was inclined use it for this particular web-app.</p> 
                <p className="m-2">The project's goal was to display real-time data from Binance, and to provide a surge percentage of coins that had risen in value. the project allowed me to retrieve data through websocket connections, and taught me the specifics of manipulating data in JavaScript.</p>
                <p className="m-2">The project later evolved from simply on the browser, to performing calculations and data gathering on a NodeJs server, with a React frontend to display the results.</p>
            </div>,
            stack: 'Astro, SolidJS, NodeJS',
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://project-10-ca-react.netlify.app/'
        },
        {
            name: 'Cryptocurrency Project',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">An improvement from the previous project, built using ReactJS and NodeJS with typescript on the backend.</p> 
                <p className="m-2">The project was my first implementation of typescript, on the server or otherwise. It also made me aware of peformance bottlenecks.</p>
                <p className="m-2">The project has now prompted me to learn Golang as a much more performant and resource efficient language that can be more useful for a project such as this.</p>
            </div>,
            stack: 'ReactJS, NodeJS',
            status: 'In-development',
            githubLink: '',
            hostLink: '#'
        },
        {
            name: 'Eye Analyzing Tool website',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">This is an e-commerce site, selling one or two products, built on shopify's Headless Commerce framework: Hydrogen.</p> 
                <p className="m-2">The store is based on an existing Hydrogen e-commerce template, that required a few specific edits and changes. Unfortunately, since the website was made a few years ago, some of the dependencies have become outdated, and uploading the latest version could break the website.</p>
                <p className="m-2">The Hydrogen framework is based on the Remix platform, however i did not spend too much time absorbing the idiosyncracies of Remix, currently it going through a change.</p>
            </div>,
            stack: 'HydrogenJS, Shopify',
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://project-11-ea-hydrogen-shopify.vercel.app/'
        },
        {
            name: 'Mind Muscles placeholder website',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">This is a surface level placeholder website for the Mind Muscles Academy business.</p> 
                <p className="m-2">It was Built using React and Tailwind CSS.</p> 
            </div>,
            stack: 'ReactJS',
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://mindmuscles.net/'
        },
        {
            name: 'Mind Muscles Academy website',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">The complete website for the Mind Muscles Academy business. The frontend was developed using ReactJS and TypeScript, while the backend relies on NodeJS and Express, with a MySQL Database.</p> 
                <p className="m-2">The project went through several iterations in development. It started out as an Astro project using an SQLite Database, and a custom frontend designed by a graphics designer. Then the website was to use ReactJS and NodeJS with UI templates from tailgrids.</p>
                <p className="m-2">With the deadline approaching fast, and AI making tremendous leaps, the client suggested using an AI website generator. We picked bolt.new to generate a website according to certain UI principles. The generated website was built using ReactJS and Typescript with NodeJS as a backend.</p>
                <p className="m-2">However the due to certain demands of inserting user logins and a content management system, the development time increased, and the short-comings of AI generated coding started to rear it's head. Multiple corrections and optimizations had to be made to the AI generated project, solidified principles and strategies regarding ReactJS rendering, Types with ReactJS, React Router, Data fetching using React Query, NodeJS routes and sessions.</p>
            </div>,
            stack: 'ReactJS, NodeJS',
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://resonant-muffin-0c12ee.netlify.app/'
        },
        // {
        //     name: 'Ecommerce website',
        //     description: <div className='mx-2 mt-2 mb-4'> 
        //         <p className="m-2">This is an e-commerce site, selling one or two products, built on Shopify's Headless Commerce framework: Hydrogen</p> 
        //         <p className="m-2">The store is based on an exosting Hydrogen e-commerce template, that required a few specific edits and changes. Unfortunately, since the website was made a few years ago, some of the dependencies have become outdated, and uploading the latest version could break the website.</p>
        //         <p className="m-2">The Hyrogen framework is based on the Remix platform, however i did not spend too much time understanding the idiosyncracies of Remix, and it is going through yet another change.</p>
        //     </div>,
        //     stack: 'ReactJS, MedusaJS',
        //     status: 'In-development',
        //     githubLink: '',
        //     hostLink: ''
        // },
        {
            name: 'Apex Synergy website',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">A simple website for a software outsourcing business, built on React, TailwindCSS and PHP.</p> 
                <p className="m-2">The website was first developed in AlpineJS, however, the business wanted a blogging section aswell.</p>
                <p className="m-2">The website is currently under active development.</p>
            </div>,
            stack: 'NextJS, TailwindCSS, PHP',
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://apexsynergymc.com/'
        },
        {
            name: "Mariam's Portfolio website",
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">A relatively simple portfolio website for a professional built on React and Tailwind CSS.</p> 
                <p className="m-2">Templates were used to quickly develop the website for being used by the professional.</p>
                <p className="m-2">Further improvements for the website include utilizing React Three Fiber, and particlualrly low-poly isometric 3d models.</p>
            </div>,
            stack: 'NextJS, TailwindCSS',
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://mariamshawki.netlify.app/'
        },
        {
            name: 'Mistral AI Chatbot webapp',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">The project is built using React and Tailwind on the frontend, and NodeJS on the backend.</p> 
                <p className="m-2">The idea was to buitl a chatbot using the API provided by MistralAI, however imporvements are still required in the project, i.e. using streaming, database, and parsing amrkdown.</p>
            </div>,
            stack: 'ReactJS, NodeJS, Mistral AI',
            status: 'In-development',
            githubLink: '',
            hostLink: 'https://project-16-aichatbot-client.netlify.app/'
        },
        {
            name: 'Form Filler webapp',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">The project was built on React, NodeJS, Qwen2.5VL, A visual language model through the use of llama.</p> 
                <p className="m-2">The idea behind the app was to allow users to fill out their forms by using AI to match the data required for forms. The app could gather data from past documents, or images of documents. Images would be parsed by the AI and text would be extracted.</p>
                <p className="m-2">Currently the App is in development, and requires further refinement.</p>
            </div>,
            stack: 'ReactJS, NodeJS, Qwen-2.5VL (llama)',
            status: 'In-development',
            githubLink: '',
            // hostLink: 'https://project-17-formfiller-client.netlify.app/'
            hostLink: ''
        },
        {
            name: 'Email handling webserver',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">A simple NodeJS and express server built to handle emails from personal websites.</p> 
                <p className="m-2">The project uses nodemailer, however due to the recent inclusion of domain verification for sending emails through popular services, it has become essential to own a domain to be able to sebd emails.</p>
                <p className="m-2">The project is not functional until or unless a domain is bought to allow emails to be verified.</p>
            </div>,
            stack: 'NodeJS',
            status: 'Complete',
            githubLink: '',
            hostLink: ''
        },
        // {
        //     name: 'Ecommerce webapp',
        //     description: <div className='mx-2 mt-2 mb-4'> 
        //         <p className="m-2">An ecommerce store built using NextJS and MedusaJS.</p> 
        //         <p className="m-2">The e-commerce store is currently a template and no specific change shave been made yet.</p>
        //         <p className="m-2">The project should provide practice for NextJS, and developed React framework, and MedusAJS specifically for the backend and managing the E-commerce store.</p>
        //     </div>,
        //     stack: 'NextJS, MedusaJS',
        //     status: 'In-development',
        //     githubLink: '',
        //     hostLink: ''
        // },

    ]

    const [index, setIndex] = useState(0)

    return(
        <motion.div           
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="pb-10 bg-[#000000b3] px-1 pt-4 border-1 border-gray-100 rounded-md overflow-auto">
            <div className='text-xs text-center w-fit h-fit ml-4 cursor-pointer rounded-sm bg-gray-900 hover:text-black hover:bg-gray-100 transition-all duration-300' onClick={() => setContent('none')}>
                <Close className='p-1' />
            </div>
            <div className="mx-auto justify-center mt-4 mb-4 text-center">
                <h2 className="text-xl">Projects</h2>
            </div>
            <div className='text-center mt-4 mb-8'>
                {projects.map((project, i) => (
                    <p key={i} className={`${ i - 1 < index ? 'inline mx-1 text-gray-100 select-none text-3xl' : 'inline mx-1 text-gray-600 select-none text-3xl' }`}>.</p>
                ))}
            </div>
            <div className="w-84 sm:w-160 h-[140%] sm:h-[120%] font-[Roboto] px-2 md:px-8">
                
                <div className="flex flex-row mx-auto my-auto">
                    <div onClick={() => {index === 0 ? setIndex(projects.length-1) : setIndex(index-1)}} className='bg-gray-900 text-gray-100 hover:bg-gray-100 hover:text-black transition-all h-fit w-fit mx-4 cursor-pointer rounded-sm'>
                        <LeftChevron className='h-6 w-6' />
                    </div>
                    <div className='rounded-sm mx-auto mb-4 px-2 py-1 w-fit text-center bg-gray-900 hover:bg-gray-100 hover:text-black transition:all ease-in-out duration-300'>
                        {/* <a href={projects[index].hostLink} target="_blank" rel="noreferrer noopener" ><h3 className="inline text-lg m-1">{projects[index].name}</h3> <img className="inline h-5 w-5 mb-1" src="/images/bx_link-external.svg"/></a> */}
                        <a href={projects[index].hostLink} target="_blank" rel="noreferrer noopener" ><h3 className="inline text-lg m-1">{projects[index].name}</h3> <Link /></a>                    
                    </div>
                    <div onClick={() => {index === projects.length-1 ? setIndex(0) : setIndex(index+1)}} className='bg-gray-900 text-gray-100 hover:bg-gray-100 hover:text-black transition-all h-fit w-fit mx-4 cursor-pointer rounded-sm' >
                        <RightChevron className='h-6 w-6' />
                    </div>
                </div>

                <motion.div           
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className=''>
                    <p className={`${projects[index].status === 'Complete' ? 'text-green-400 m-2' : 'text-orange-500 m-2'}`}>Status: {projects[index].status}</p>
                    <p className="m-2">Stack: {projects[index].stack}</p>
                    <div>
                        <p className="m-2">About Project:</p>{projects[index].description}
                    </div>
                    {/* <div className='m-2'>
                        <a href={projects[index].githubLink} target="_blank" rel="noreferrer noopener">Github Link</a>
                    </div> */}
                </motion.div>

            </div>
        </motion.div>
    )
}