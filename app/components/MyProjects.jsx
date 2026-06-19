"use client"

import { useState } from 'react';
import { LeftChevron, RightChevron, Link, Dot, GreenDot, OrangeDot } from "./Icons";
import { motion } from 'motion/react';


const otherProjects = [
        {
            name: 'Art Gallery Website',
            description: <div className='mx-2 mt-2 mb-4'> 
            <ul>
                <li className="m-2">A website for displaying art from various users. The website was built purely on HTML, CSS and JavaScript.</li> 
                <li className="m-2">The website was left incomplete at its inception, as the persons involved decided to move onto other endeavours.</li>
            </ul>
            </div>,
            image: '/images/projects/cwi.webp',
            imageAlt: 'Counselling With Iqras website',
            stack: [
                {name:'JavaScript', image:'/images/tech-stack/js-icon.svg'},
                {name:'HTML5', image:'/images/tech-stack/html-icon.svg'},
                {name:'CSS3', image:'/images/tech-stack/css-icon.svg'},
            ],
            status: 'In-development',
            githubLink: '',
            hostLink: 'https://incomparable-naiad-ada14b.netlify.app/'
        },
        {
            name: 'Alkoun web design website',
            description: <div className='mx-2 mt-2 mb-4'> 
            <ul>
                <li className="m-2">It was time to build my portfolio website, and try and implement my choices regarding not only style but programming as well.</li> 
                <li className="m-2">The website was built purely on HTML, CSS and JavaScript. The navigation and animations were entirely handled by JavaScript, and it was the first programming problem I had solved using my existing knowledge of JavaScript at that time. It gave me confidence that I could program in the future.</li> 
                <li className="m-2">While it was a great accomplishment, I had further ambitions of inserting 3D Models and levels of interactivity on the website, this led me to come back when I had understood how to use 3D models in web projects.</li>
            </ul>
            </div>,
            stack: [
                {name:'JavaScript', image:'/images/tech-stack/js-icon.svg'},
                {name:'AnimeJS', image:'/images/tech-stack/animejs-icon.svg'},
                {name:'HTML5', image:'/images/tech-stack/html-icon.svg'},
                {name:'CSS3', image:'/images/tech-stack/css-icon.svg'},
            ],
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://alkounwebdesigns.netlify.app/'
        },
        {
            name: 'Saeed & Sons Ecommerce website',
            description: <div className='mx-2 mt-2 mb-4'> 
            <ul>
                <li className="m-2">The client owns a super store and wanted to increase his reach in the neighborhood his store was situated in. He wanted an e-commerce store to also bring his business presence to the internet.</li> 
                <li className="m-2">Even though I was well versed in HTML, CSS and JavaScript, it would require too much time to create an e-commerce website from scratch, especially without any knowledge of a backend. After I decided to use React with MUI, it became my first React project. Without any prior knowledge of React I rushed to learn components, props, state management and data fetching. I coupled the React frontend with a Medusa.js backend that deals with the inventory and shopping cart mechanics.</li> 
                <li className="m-2">I lost the project after two weeks of work, and felt as if i had failed, however, upon reflection I had finally learnt React.js and was optimistic to use in future projects.</li>
            </ul>
            </div>,
            stack: [
                {name:'React', image:'/images/tech-stack/reactjs-icon.svg'},
                {name:'MedusaJS', image:'/images/tech-stack/html-icon.svg'},
            ],
            status: 'In-development',
            githubLink: '',
            hostLink: 'https://project-5-ochre.vercel.app/'
        },
        {
            name: 'AARC',
            description: <div className='mx-2 mt-2 mb-4'> 
            <ul>
                <li className="m-2">A statically served website, built on HTML, CSS, Tailwind and JavaScript with Alpine.js for state management, and a Node.js backend with an Express.js server.</li>
                <li className="m-2">With less JavaScript shipped to the client and more HTML web pages ready for crawling, the business will benefit from SEO and higher SERP.</li>
                <li className="m-2">The challenge was to maintain interactivity and reactivity available in other libraries and frameworks while maintaining better crawlability of the website and its content.</li>
                <li className="m-2">By maintaining the original stack and simply adding Alpine.js for reactivity, we were able to achieve the benefits of React without the drawbacks affecting SEO and build complexity, whilst using a cleaner UI and better UX for visitor satisfaction.</li>
                <li className="m-2">I gained a better understanding and appreciation of server side rendered websites, as there was less complexity, npm packages and build size involved.</li>
            </ul>
            </div>,
            image: '/images/projects/aarc.webp',
            imageAlt: 'AARC website',
            stack: [
                {name:'AlpineJS', image:'/images/tech-stack/alpinejs-icon.svg'},
                {name:'NodeJS', image:'/images/tech-stack/nodejs-icon.svg'},
                {name:'ExpressJS', image:'/images/tech-stack/expressjs-icon.svg'},
                {name:'JavaScript', image:'/images/tech-stack/js-icon.svg'},
                {name:'Taillwind', image:'/images/tech-stack/tailwind-icon.svg'},
                {name:'HTML5', image:'/images/tech-stack/html-icon.svg'},
                {name:'CSS3', image:'/images/tech-stack/css-icon.svg'},
            ],
            status: 'Complete',
            githubLink: '',
            hostLink: 'http://aarctherapy.com/'
        },
        {
            name: 'Eye Analyzing Tool website',
            description: <div className='mx-2 mt-2 mb-4'> 
            <ul>
                <li className="m-2">This is an e-commerce site, selling one or two products, built on shopify's Headless Commerce framework: Hydrogen.</li> 
                <li className="m-2">The store is based on an existing Hydrogen e-commerce template, that required a few specific edits and changes. Unfortunately, since the website was made a few years ago, some of the dependencies have become outdated, and uploading the latest version could break the website.</li>
                <li className="m-2">The Hydrogen framework is based on the Remix platform, however i did not spend too much time absorbing the idiosyncracies of Remix, currently it going through a change.</li>
            </ul>
            </div>,
            stack: [
                {name:'Hydrogen', image:'/images/tech-stack/shopify-icon.svg'},
                {name:'Shopify', image:'/images/tech-stack/shopify-icon.svg'}
            ],
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://project-11-ea-hydrogen-shopify.vercel.app/'
        },
        {
            name: 'Mind Muscles placeholder website',
            description: <div className='mx-2 mt-2 mb-4'> 
            <ul>
                <li className="m-2">This is a surface level placeholder website for the Mind Muscles Academy business.</li> 
                <li className="m-2">It was Built using React and Tailwind CSS.</li> 
            </ul>
            </div>,
            stack: [
                {name:'React', image:'/images/tech-stack/reactjs-icon.svg'},
                {name:'Tailwind', image:'/images/tech-stack/tailwind-icon.svg'}
            ],
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://mindmuscles.net/'
        },
        {
            name: 'Mind Muscles Academy website',
            description: <div className='mx-2 mt-2 mb-4'> 
            <ul>
                <li className="m-2">The complete website for the Mind Muscles Academy business. The frontend was developed using ReactJS and TypeScript, while the backend relies on NodeJS and Express, with a MySQL Database.</li> 
                <li className="m-2">The project went through several iterations in development. It started out as an Astro project using an SQLite Database, and a custom frontend designed by a graphics designer. Then the website was to use ReactJS and NodeJS with UI templates from tailgrids.</li>
                <li className="m-2">With the deadline approaching fast, and AI making tremendous leaps, the client suggested using an AI website generator. We picked bolt.new to generate a website according to certain UI principles. The generated website was built using ReactJS and Typescript with NodeJS as a backend.</li>
                <li className="m-2">However the due to certain demands of inserting user logins and a content management system, the development time increased, and the short-comings of AI generated coding started to rear it's head. Multiple corrections and optimizations had to be made to the AI generated project, solidified principles and strategies regarding ReactJS rendering, Types with ReactJS, React Router, Data fetching using React Query, NodeJS routes and sessions.</li>
            </ul>
            </div>,
            stack: [
                {name:'React', image:'/images/tech-stack/reactjs-icon.svg'},
                {name:'Tailwind', image:'/images/tech-stack/tailwind-icon.svg'},
                {name:'Motion', image:'/images/tech-stack/motion-icon.svg'},
                {name:'NodeJS', image:'/images/tech-stack/nodejs-icon.svg'},
                {name:'ExpressJS', image:'/images/tech-stack/expressjs-icon.svg'},
                {name:'MYSQL', image:'/images/tech-stack/mysql-icon.svg'},
                {name:'SQLite', image:'/images/tech-stack/sqlite-icon.svg'},
            ],
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://resonant-muffin-0c12ee.netlify.app/'
        },
        // {
        //     name: 'Ecommerce website',
        //     description: <div className='mx-2 mt-2 mb-4'> 
        //     <ul>
        //         <li className="m-2">This is an e-commerce site, selling one or two products, built on Shopify's Headless Commerce framework: Hydrogen</li> 
        //         <li className="m-2">The store is based on an exosting Hydrogen e-commerce template, that required a few specific edits and changes. Unfortunately, since the website was made a few years ago, some of the dependencies have become outdated, and uploading the latest version could break the website.</li>
        //         <li className="m-2">The Hyrogen framework is based on the Remix platform, however i did not spend too much time understanding the idiosyncracies of Remix, and it is going through yet another change.</li>
        //     </ul>
        //     </div>,
        //     stack: 'ReactJS, MedusaJS',
        //     status: 'In-development',
        //     githubLink: '',
        //     hostLink: ''
        // },
        {
            name: 'Mistral AI Chatbot webapp',
            description: <div className='mx-2 mt-2 mb-4'> 
            <ul>
                <li className="m-2">The project is built using React and Tailwind on the frontend, and NodeJS on the backend.</li> 
                <li className="m-2">The idea was to buitl a chatbot using the API provided by MistralAI, however imporvements are still required in the project, i.e. using streaming, database, and parsing amrkdown.</li>
            </ul>
            </div>,
            stack: [
                {name:'React', image:'/images/tech-stack/reactjs-icon.svg'},
                {name:'Tailwind', image:'/images/tech-stack/tailwind-icon.svg'},
                {name:'NodeJS', image:'/images/tech-stack/nodejs-icon.svg'},
                {name:'ExpressJS', image:'/images/tech-stack/expressjs-icon.svg'},
                {name:'AI: MistralAI (Ollama)', image:'/images/tech-stack/expressjs-icon.svg'},
            ],
            status: 'In-development',
            githubLink: '',
            hostLink: 'https://project-16-aichatbot-client.netlify.app/'
        },
        {
            name: 'Form Filler webapp',
            description: <div className='mx-2 mt-2 mb-4'> 
            <ul>
                <li className="m-2">The project was built on React, NodeJS, Qwen2.5VL, A visual language model through the use of llama.</li> 
                <li className="m-2">The idea behind the app was to allow users to fill out their forms by using AI to match the data required for forms. The app could gather data from past documents, or images of documents. Images would be parsed by the AI and text would be extracted.</li>
                <li className="m-2">Currently the App is in development, and requires further refinement.</li>
            </ul>
            </div>,
            stack: [
                {name:'React', image:'/images/tech-stack/reactjs-icon.svg'},
                {name:'Tailwind', image:'/images/tech-stack/tailwind-icon.svg'},
                {name:'NodeJS', image:'/images/tech-stack/nodejs-icon.svg'},
                {name:'ExpressJS', image:'/images/tech-stack/expressjs-icon.svg'},
                {name:'AI: Qwen-2.5VL (Ollama)', image:'/images/tech-stack/expressjs-icon.svg'},
            ],
            status: 'In-development',
            githubLink: '',
            // hostLink: 'https://project-17-formfiller-client.netlify.app/'
            hostLink: ''
        },
        {
            name: 'Email handling webserver',
            description: <div className='mx-2 mt-2 mb-4'> 
            <ul>
                <li className="m-2">A simple NodeJS and express server built to handle emails from personal websites.</li> 
                <li className="m-2">The project uses nodemailer, however due to the recent inclusion of domain verification for sending emails through popular services, it has become essential to own a domain to be able to sebd emails.</li>
                <li className="m-2">The project is not functional until or unless a domain is bought to allow emails to be verified.</li>
            </ul>
            </div>,
            stack: [
                {name:'NodeJS', image:'/images/tech-stack/nodejs-icon.svg'},
                {name:'ExpressJS', image:'/images/tech-stack/expressjs-icon.svg'},
            ],
            status: 'Complete',
            githubLink: '',
            hostLink: ''
        },
        {
            name: 'Ecommerce Website',
            description: <div className='mx-2 mt-2 mb-4'> 
            <ul>
                <li className="m-2">An ecommerce store built using Next.js, React, Tailwind CSS, TypeScript and Node.js.</li>
                <li className="m-2">A template for e-commerce websites to allow for quick development of other e-commerce websites.</li>  
                <li className="m-2">The challenge was to build an e-commerce website that allowed good SEO, good customer experience according to their expectations, and quick development on the frontend and backend.</li>
                <li className="m-2">I utilized Next.js strengths in SEO, and its server and client components, API routes, coupled with interactivity and reactivity using React. I also used Baymard Insititute's guides on E-commerce UX.</li>
                <li className="m-2">I learnt the intricacies of e-commerce UX, Next.js API routes, payments processors and shopping cart state managemnt.</li>
            </ul>
            </div>,
            image: '/images/projects/ecom-next.webp',
            imageAlt: "A Next.js e-commerce website",
            stack: [
                {name:'NextJS', image:'/images/tech-stack/nextjs-icon.svg'},
                {name:'React', image:'/images/tech-stack/reactjs-icon.svg'},
                {name:'TypeScript', image:'/images/tech-stack/ts-icon.svg'},
                {name:'Tailwind', image:'/images/tech-stack/tailwind-icon.svg'},
                {name:'NodeJS', image:'/images/tech-stack/nodejs-icon.svg'},
            ],
            status: 'In-development',
            githubLink: '',
            hostLink: 'https://project-21-next-store.vercel.app/'
        },

    ]

    const freelanceProjects = [
        {
            name: 'Counselling with Iqra',
            description: <div className='mx-2 mt-2 mb-4'> 
            <ul>
                <li className='m-2'>A business website for a psychologist/psychotherapist to inform clients and to allow them to get in touch with them, with blogging capabilities</li>
                <li className='m-2'>The Psychologist Ms.Iqra Naz benefitted from being able to reach new client and also establish an online presence.</li>
                <li className='m-2'>I had created an earlier version with HTML, CSS and JavaScript and publisehd that as a wordpress theme to allow Ms. Iqra Naz to blog using wordpress.
                 However the charges of hosting the website and paying for the domain name, added to her costs. The previous design of the website was also lackluster.</li>
                <li className='m-2'>I had completed a design course and re-designed the website but also deployed it to netlify to cut hosting costs. I utilized Nunjucks for templating to speed up development. The blogging was added through markdown files to the a folder that was automatically trigger a new static build for the website and include the latest blog.</li>                    
                <li className='m-2'>I learnt to use 11ty to develop a Statically generated website (SSG) and also implementing markdown files for blogging on the website.</li>
            </ul>
            </div>,
            image: '/images/projects/cwi.webp',
            imageAlt: 'Counselling With Iqras website',
            stack: [
                {name:'11ty', image:'/images/tech-stack/11ty-icon.png'},
                {name:'JavaScript', image:'/images/tech-stack/js-icon.svg'},
                {name:'HTML5', image:'/images/tech-stack/html-icon.svg'},
                {name:'CSS3', image:'/images/tech-stack/css-icon.svg'},
            ],
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://project-1-cwi-11ty.netlify.app/'
        },
        {
            name: 'Stellar Services International',
            description: <div className='mx-2 mt-2 mb-4'> 
            <ul>
                <li className="m-2">A business website for a subsidiary of Canam Steel Pvt Ltd. It was developed using the Divi Builder on wordpress.</li>
                <li className="m-2">The business wanted the website to provide legitimacy and online presence for prospective partners, businesses and employees.</li>  
                <li className="m-2">The challenge was to build a website within a tight deadline with a clean UI using wordpress.</li> 
                <li className="m-2">After completing a UI and UX course on Udemy, I focus entirely on the design and aspects of the website and opted to use a builder to ensure my focus would not deviate towards programming and coding. For this instance, I opted to use the Divi Builder with their theme and custom made components.</li> 
                <li className="m-2">I learnt to implement basic deisgn principles on web elements. I also gained a new appreciation of UI builders.</li>
            </ul>
            </div>,
            image: '/images/projects/ssi.webp',
            imageAlt: 'Counselling With Iqras website',
            stack: [
                {name:'Wordpress', image:'/images/tech-stack/wordpress-icon.svg'},
                {name:'Divi', image:'/images/tech-stack/divi-icon.svg'},
                {name:'JavaScript', image:'/images/tech-stack/js-icon.svg'},
                {name:'HTML5', image:'/images/tech-stack/html-icon.svg'},
                {name:'CSS3', image:'/images/tech-stack/css-icon.svg'},
            ],
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://stellarservices.international/'
        },
        // {
        //     name: 'Art Gallery Website',
        //     description: <div className='mx-2 mt-2 mb-4'> 
       //      <ul>
        //         <li className="m-2">A website for displaying art from various users. The website was built purely on HTML, CSS and JavaScript.</li> 
        //         <li className="m-2">The website was left incomplete at its inception, as the persons involved decided to move onto other endeavours.</li>
            // <ul>
        //     </div>,
        //     image: '/images/projects/cwi.webp',
        //     imageAlt: 'Counselling With Iqras website',
                // stack: [
                //     {name:'JavaScript', image:'/images/tech-stack/js-icon.svg'},
                //     {name:'HTML5', image:'/images/tech-stack/html-icon.svg'},
                //     {name:'CSS3', image:'/images/tech-stack/css-icon.svg'},
                // ],
        //     status: 'In-development',
        //     githubLink: '',
        //     hostLink: 'https://incomparable-naiad-ada14b.netlify.app/'
        // },
        // {
        //     name: 'Alkoun web design website',
        //     description: <div className='mx-2 mt-2 mb-4'> 
        //     <ul>
        //         <li className="m-2">It was time to build my portfolio website, and try and implement my choices regarding not only style but programming as well.</li> 
        //         <li className="m-2">The website was built purely on HTML, CSS and JavaScript. The navigation and animations were entirely handled by JavaScript, and it was the first programming problem I had solved using my existing knowledge of JavaScript at that time. It gave me confidence that I could program in the future.</li> 
        //         <li className="m-2">While it was a great accomplishment, I had further ambitions of inserting 3D Models and levels of interactivity on the website, this led me to come back when I had understood how to use 3D models in web projects.</li>
        //      </ul>
        //     </div>,
                // stack: [
                //     {name:'JavaScript', image:'/images/tech-stack/js-icon.svg'},
                //     {name:'AnimeJS', image:'/images/tech-stack/animejs-icon.svg'},
                //     {name:'HTML5', image:'/images/tech-stack/html-icon.svg'},
                //     {name:'CSS3', image:'/images/tech-stack/css-icon.svg'},
                // ],
        //     status: 'Complete',
        //     githubLink: '',
        //     hostLink: 'https://alkounwebdesigns.netlify.app/'
        // },
        {
            name: 'AWDev website',
            description: <div className='mx-2 mt-2 mb-4'> 
            <ul>
                <li className="m-2">I rebuilt and redesigned my portfolio website to showcase the tech stack used, my experience, my projects with a little bit about me.</li> 
                <li className="m-2">As a freelancing web developer, A portfolio website is essential to not only communicate past experience and accomplishments, but also future ambitions and interests,</li> 
                <li className="m-2">I needed a portfolio to not only communicate my expertise and value in web development, but also my interest and ambitions in XR development, however 3D models are much larger assets</li> 
                <li className="m-2">I used React with Tailwind to create a grid layout. I am intrigued by space and the universe, and I used React Three Fiber to use 3d models to create a scene in the background. Finally i used dynamic imports to defer loading of 3D and audio assets to achieve faster load times.</li> 
                <li className="m-2">I learnt to use React Three Fiber with drei tools, effective scene building, linear 3D animations, custom and optimized textures and 3D models and dynamic imports to achieve better load times with 3D assets. There remains much to be learnt in XR.</li> 
            </ul>
            </div>,
            image: '/images/projects/awdev.webp',
            imageAlt: 'Awdev portfolio website with 3D scene',
            stack: [
                {name:'React', image:'/images/tech-stack/reactjs-icon.svg'},
                {name:'React Three Fiber', image:'/images/tech-stack/threejs-icon.svg'},
                {name:'Motion', image:'/images/tech-stack/motion-icon.png'},
                {name:'Tailwind', image:'/images/tech-stack/tailwind-icon.svg'}
            ],
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://awdev.netlify.app/'
        },
        // {
        //     name: 'Saeed & Sons Ecommerce website',
        //     description: <div className='mx-2 mt-2 mb-4'> 
            // <ul>
        //         <li className="m-2">The client owns a super store and wanted to increase his reach in the neighborhood his store was situated in. He wanted an e-commerce store to also bring his business presence to the internet.</li> 
        //         <li className="m-2">Even though I was well versed in HTML, CSS and JavaScript, it would require too much time to create an e-commerce website from scratch, especially without any knowledge of a backend. After I decided to use React with MUI, it became my first React project. Without any prior knowledge of React I rushed to learn components, props, state management and data fetching. I coupled the React frontend with a Medusa.js backend that deals with the inventory and shopping cart mechanics.</li> 
        //         <li className="m-2">I lost the project after two weeks of work, and felt as if i had failed, however, upon reflection I had finally learnt React.js and was optimistic to use in future projects.</li>
        //     </ul>
        //     </div>,
                // stack: [
                //     {name:'React', image:'/images/tech-stack/reactjs-icon.svg'},
                //     {name:'MedusaJS', image:'/images/tech-stack/medusajs-icon.svg'},
                //     {name:'MUI', image:'/images/tech-stack/mui-icon.svg'},
                // ],
        //     status: 'In-development',
        //     githubLink: '',
        //     hostLink: 'https://project-5-ochre.vercel.app/'
        // },
        {
            name: 'Birthday wishing website',
            description: <div className='mx-2 mt-2 mb-4'> 
            <ul>
                <li className="m-2">My first React Three Fiber website, it was originally designed to wish someone personally on their birthday.</li> 
                <li className="m-2">3D scenes in websites arent as frequent an experience, So to wish someone with a 3D orchestrated scene would be a different experience.</li>
                <li className="m-2">The challenges revolved around using 3D assets with the least amount of impact on load times with the intention of communicating the message and atmosphere of a birthday party.</li>
                <li className="m-2">The scene was initially inside a cafe, but the scene required too many assets, so a camera angle that focused on minimal 3D assets to communicate a birthday gathering was opted for.</li>
                <li className="m-2">I learnt to orchestrate minimal 3D scenes to communicate the message, with compressed and optimized textures and 3D models to reduce loading times and resource consumption as much as possible.</li>
            </ul>
            </div>,
            image: '/images/projects/birthday.webp',
            imageAlt: 'Happy Birthday website with 3D scene',
            stack: [
                {name:'React', image:'/images/tech-stack/reactjs-icon.svg'},
                {name:'React Three Fiber', image:'/images/tech-stack/threejs-icon.svg'},
                {name:'Tailwind', image:'/images/tech-stack/tailwind-icon.svg'}
            ],
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://project-6-r3f-birthday.netlify.app/'
        },
        // {
        //     name: 'AARC website',
        //     description: <div className='mx-2 mt-2 mb-4'> 
        //     <ul>
        //         <li className="m-2">A website for a team of psychologists and psychotherapists who were launching a space for therapists. The website was built using HTML, CSS and JavaScript on the frontend, and for the first time, NodeJs on the backend to validate and accept form submissions, whilst serving static files.</li> 
        //         <li className="m-2">The design was rudimentary as there was a certain deadline by which the team wanted the website to be up and active, with the most important aspect of the website being that visitors could submit their forms to the team.</li>
        //         <li className="m-2">This was my fist foray into a backend, preoccupying most of my time, resulting in a lackluster website design. I made commitments to upgrade the design later that year.</li>
        //     </ul>
        //     </div>,
        //     stack: 'HTML, CSS, JS, NodeJS',
        //     status: 'Complete',
        //     githubLink: '',
        //     hostLink: 'https://project-7-aarc-node.vercel.app/'
        // },
        {
            name: 'AARC',
            description: <div className='mx-2 mt-2 mb-4'> 
            <ul>
                <li className="m-2">A statically served website, built on HTML, CSS, Tailwind and JavaScript with Alpine.js for state management, and a Node.js backend with an Express.js server.</li>
                <li className="m-2">With less JavaScript shipped to the client and more HTML web pages ready for crawling, the business will benefit from SEO and higher SERP.</li>
                <li className="m-2">The challenge was to maintain interactivity and reactivity available in other libraries and frameworks while maintaining better crawalablity of the wbesite and its content.</li>
                <li className="m-2">By maintiaing the original stack and simply adding Alpine.js for reactivity, we were able to achieve the benefits of React without the drawbacks affecting SEO and build complexity, whilst using a cleaner UI and better UX for visitor satisfaction.</li>
                <li className="m-2">I gained a better understanding and appreciation of server side rendered websites, as there was less complexity, npm packages and build size involved.</li>
            </ul>
            </div>,
            image: '/images/projects/aarc.webp',
            imageAlt: 'AARC website',
            stack: [
                {name:'AlpineJS', image:'/images/tech-stack/alpinejs-icon.svg'},
                {name:'NodeJS', image:'/images/tech-stack/nodejs-icon.svg'},
                {name:'ExpressJS', image:'/images/tech-stack/expressjs-icon.svg'},
                {name:'JavaScript', image:'/images/tech-stack/js-icon.svg'},
                {name:'Taillwind', image:'/images/tech-stack/tailwind-icon.svg'},
                {name:'HTML5', image:'/images/tech-stack/html-icon.svg'},
                {name:'CSS3', image:'/images/tech-stack/css-icon.svg'},
            ],
            status: 'Complete',
            githubLink: '',
            hostLink: 'http://aarctherapy.com/'
        },
        {
            name: 'Binance Cryptocurrency Table',
            description: <div className='mx-2 mt-2 mb-4'> 
            <ul>
                <li className="m-2">A personal project that displays the value of spot cryptocurrencies on binance, built using solid.js through the astro.js framework and Node.js on the backend that communicates with binance and the client through websockets.</li> 
                <li className="m-2">The project was built initially to aid in trading on cryptocurrencies on binance's platform.</li>
                <li className="m-2">The challenge was to manipulate and base calculations on binance's own data every second on all spot cryptocurrencies, and then send the data back to the client for presentation.</li>
                <li className="m-2">Signals improved performance by removing the shadow DOM update step, allowing quicker and effortless updates as compared to React. Websockets were used to ensure immediate updates and calculations on each incoming message.</li> 
                <li className="m-2">The project allowed me to gain a higher understanding of working with data types, and mutating, storing and later displayiong the same data. However this led to an understanding that this project was ill-equipped to aid in trading.</li>
            </ul>
            </div>,
            image: '/images/projects/binance.webp',
            imageAlt: 'Binance Surge Table website',
            stack: [
                {name:'AstroJS', image:'/images/tech-stack/astrojs-icon.svg'},
                {name:'SolidJS', image:'/images/tech-stack/solidjs-icon.svg'},
                {name:'NodeJS', image:'/images/tech-stack/nodejs-icon.svg'},
                {name:'JavaScript', image:'/images/tech-stack/js-icon.svg'},
                {name:'Taillwind', image:'/images/tech-stack/tailwind-icon.svg'},
            ],
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://project-10-ca-react.netlify.app/'
        },
        {
            name: 'Cryptocurrency Project',
            description: <div className='mx-2 mt-2 mb-4'> 
            <ul>
                <li className="m-2">The project was built to improve on the previous project, built using Solid.js and Bun.js with typescript on the backend.</li>
                <li className="m-2">The benefit of using Solid.js with Bun.js was to maximize performance, while maintaining focus on strategies for improvinf trading.</li> 
                <li className="m-2">The main challenges were to simplify data manipulation, storage and retrieval on larger datatsets whilst maintaining large numbers of websocket connections.</li> 
                <li className="m-2">We implemented websockets again, but with sets and maps to ensure faster and efficient lookups.</li>
                <li className="m-2">I learnt the use of typescript and its benefits and catching type errors early, as the better implementation of effects, sorting and fetching on the frontend whilst being mindful of performance bottlenecks. This experience prompted me to learn golang.</li>
            </ul>
            </div>,
            image: '/images/projects/project-crypto.webp',
            imageAlt: 'Binance Surge Table website',
            stack: [
                {name:'SolidJS', image:'/images/tech-stack/solidjs-icon.svg'},
                {name:'BunJS', image:'/images/tech-stack/bunjs-icon.svg'},
                {name:'TypeScript', image:'/images/tech-stack/ts-icon.svg'},
                {name:'JavaScript', image:'/images/tech-stack/js-icon.svg'},
                {name:'Taillwind', image:'/images/tech-stack/tailwind-icon.svg'},
            ],
            status: 'In-development',
            githubLink: '',
            hostLink: '#'
        },
        {
            name: 'Eye Analyzing Tool website',
            description: <div className='mx-2 mt-2 mb-4'> 
            <ul>
                <li className="m-2">An e-commerce website selling one product with two variants, built on shopify's Headless e-commerce framework Hydrogen.</li>
                <li className="m-2">The website offered the client to sell their product online to a niche market. Due to their familiarity of Shopify's dashboard, </li> 
                <li className="m-2">The challenge was to provide the client with a quick e-commerce website and dashboard that they could themselves manage.</li> 
                <li className="m-2">I used Shopify's frontend framework called hydrogen that is connected to the users shopify dashboard through APIs. This allowed for a quicker development time and more familiarity for the client.</li> 
                <li className="m-2">I learnt to develop and use Shopify's Hydrogen framework to quickly launch an e-commerce website.</li> 
            </ul>
            </div>,
            image: '/images/projects/eye-analyzer.webp',
            imageAlt: 'Eye analyzer tool website',
            stack: [
                {name:'Hydrogen', image:'/images/tech-stack/hydrogen-icon.svg'},
                {name:'Shopify', image:'/images/tech-stack/shopify-icon.svg'},
                {name:'JavaScript', image:'/images/tech-stack/js-icon.svg'},
                {name:'Tailwind', image:'/images/tech-stack/tailwind-icon.svg'},
            ],
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://project-11-ea-hydrogen-shopify.vercel.app/'
        },
        {
            name: 'Mind Muscles placeholder website',
            description: <div className='mx-2 mt-2 mb-4'>
            <ul>
                <li className="m-2">A quick placeholder website to show visitors that development is under progress, using React and Tailwind CSS.</li>  
                <li className="m-2">The idea was to quickly establish the online presence of the business so that clients and partners can be assured that the entity exists aand is continuing operations.</li> 
                <li className="m-2">The challenge was to establish a placeholder website within a few days.</li> 
                <li className="m-2">I used React and tailwind CSS to quickly build a website with a blurred background to show the countours of a navigation and the feeling of a work in progress.</li> 
                <li className="m-2">I learnt how to build the website using React and Tailwind CSS and then statically generate files to be hosted on a traditional web hosting platform.</li> 
            </ul>
            </div>,
            image: '/images/projects/mma-placeholder.webp',
            imageAlt: 'MMA placeholder website',
            stack: [
                {name:'React', image:'/images/tech-stack/reactjs-icon.svg'},
                {name:'Tailwind', image:'/images/tech-stack/tailwind-icon.svg'}
            ],
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://mindmuscles.net/'
        },
        {
            name: 'Mind Muscles Academy website',
            description: <div className='mx-2 mt-2 mb-4'> 
            <ul>
                <li className="m-2">A complete website, CMS and user platform for tutors, counsellors, and soon students for a schooling business built in React, TypeScript, Node.js, express.js and MySQL and SQLite.</li> 
                <li className="m-2">The website would be a all in one platform for all tutors, admins, counsellors, and soon students for interacting with the academy. </li>
                <li className="m-2">The challenges were numerous, as I had to integrate a react frontend with a node.js and express.js backend to serve content from a database and also allow secure logging in into unique roles for allowing profile edits, curriculum access and CMS capabilities under a tight deadline. This was also my first Typescript with React project. I also had to keep queries to the backedn and the database under a certain limit.</li>
                <li className="m-2">Upon the insistence of the client, I used an AI to generate a website, however even with coding assistants the technical demands could not be met, so I learnt react patterns and storing passwords and sessions as well.</li> 
                <li className="m-2">I learnt typescript with react, integrating a backend which responded efficiently to fetch calls using React Query, restricted routes in React which could only be accessed after emails and passwords matched, and user sessions could be generated and stored.</li>
            </ul>
            </div>,
            image: '/images/projects/mma.webp',
            imageAlt: 'MMA website',
            stack: [
                {name:'React', image:'/images/tech-stack/reactjs-icon.svg'},
                {name:'TypeScript', image:'/images/tech-stack/ts-icon.svg'},
                {name:'Tailwind', image:'/images/tech-stack/tailwind-icon.svg'},
                {name:'Motion', image:'/images/tech-stack/motion-icon.png'},
                {name:'NodeJS', image:'/images/tech-stack/nodejs-icon.svg'},
                {name:'ExpressJS', image:'/images/tech-stack/expressjs-icon.svg'},
                {name:'MYSQL', image:'/images/tech-stack/mysql-icon.svg'},
                {name:'SQLite', image:'/images/tech-stack/sqlite-icon.svg'},
            ],
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://resonant-muffin-0c12ee.netlify.app/'
        },
        // {
        //     name: 'Ecommerce website',
        //     description: <div className='mx-2 mt-2 mb-4'> 
        //     <ul>
        //         <li className="m-2">This is an e-commerce site, selling one or two products, built on Shopify's Headless Commerce framework: Hydrogen</li> 
        //         <li className="m-2">The store is based on an exosting Hydrogen e-commerce template, that required a few specific edits and changes. Unfortunately, since the website was made a few years ago, some of the dependencies have become outdated, and uploading the latest version could break the website.</li>
        //         <li className="m-2">The Hyrogen framework is based on the Remix platform, however i did not spend too much time understanding the idiosyncracies of Remix, and it is going through yet another change.</li>
        //     </ul>
        //     </div>,
                // stack: [
                //     {name:'React', image:'/images/tech-stack/reactjs-icon.svg'},
                //     {name:'MedusaJS', image:'/images/tech-stack/html-icon.svg'},
                // ],
        //     status: 'In-development',
        //     githubLink: '',
        //     hostLink: ''
        // },
        {
            name: 'Apex Synergy website',
            description: <div className='mx-2 mt-2 mb-4'> 
            <ul>
                <li className="m-2">A website and a blogging platform for a software outsourcing company, built in Next.js and styled in Tailwind CSS, while using PHP on the backend.</li> 
                <li className="m-2">The company wanted an online presence to provide their prospective clients and partners information regarding their services and activities.</li>
                <li className="m-2">The challenge was to create a website that could be built and deplyed as quickly as possible, whilst allowing SEO and SERP ranking.</li>
                <li className="m-2">I used a statically built Next.js website with SEO and image optimization. I also used the client's familiarity with wordpress as a CMS for generating blog posts on the Next.js website.</li>
                <li className="m-2">I further strengthened my understanding of SEO with Next.js, the dynamic loading and generation of blog pages with an external CMS, email-handling with PHP, and statically generated sites using Next.js </li>
            </ul>
            </div>,
            image: '/images/projects/apex.webp',
            imageAlt: 'Apex Synergy website',
            stack: [
                {name:'NextJS', image:'/images/tech-stack/nextjs-icon.svg'},
                {name:'React', image:'/images/tech-stack/reactjs-icon.svg'},
                {name:'TypeScript', image:'/images/tech-stack/ts-icon.svg'},
                {name:'Tailwind', image:'/images/tech-stack/tailwind-icon.svg'},
                {name:'PHP', image:'/images/tech-stack/php-icon.svg'},
            ],
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://apexsynergymc.com/'
        },
        {
            name: "Mariam's Portfolio website",
            description: <div className='mx-2 mt-2 mb-4'> 
            <ul>
                <li className="m-2">A portfolio website for a young marketing professional, built on Next.js and Tailwind CSS.</li> 
                <li className="m-2">The website allowed her to showcase her projects, communicate her skills and value to her potential employers.</li> 
                <li className="m-2">The challenge was to quickly create a website that updateable with each deployment, reactive and SEO friendly.</li>
                <li className="m-2">I edited a template built in React to create the website as quickly as possible, and compiled components into a Next.js app to harness SEO benefits, while using AI generated imagery for images.</li>
                <li className="m-2">I learnt using the head, image and link components from Next.js, used better image optimization for low CLS, FCP and also improved my understanding of a Next.js project structure.</li>
            </ul>
            </div>,
            image: '/images/projects/mariam.webp',
            imageAlt: "Mariam Shawki's website",
            stack: [
                {name:'NextJS', image:'/images/tech-stack/nextjs-icon.svg'},
                {name:'React', image:'/images/tech-stack/reactjs-icon.svg'},
                {name:'Tailwind', image:'/images/tech-stack/tailwind-icon.svg'},
            ],
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://mariamshawki.netlify.app/'
        },
        // {
        //     name: 'Mistral AI Chatbot webapp',
        //     description: <div className='mx-2 mt-2 mb-4'> 
        //     <ul>
        //         <li className="m-2">The project is built using React and Tailwind on the frontend, and NodeJS on the backend.</li> 
        //         <li className="m-2">The idea was to buitl a chatbot using the API provided by MistralAI, however imporvements are still required in the project, i.e. using streaming, database, and parsing amrkdown.</li>
        //     </ul>
        //     </div>,
        //     stack: 'ReactJS, NodeJS, Mistral AI',
        //     status: 'In-development',
        //     githubLink: '',
        //     hostLink: 'https://project-16-aichatbot-client.netlify.app/'
        // },
        // {
        //     name: 'Form Filler webapp',
        //     description: <div className='mx-2 mt-2 mb-4'> 
        //     <ul>
        //         <li className="m-2">The project was built on React, NodeJS, Qwen2.5VL, A visual language model through the use of llama.</li> 
        //         <li className="m-2">The idea behind the app was to allow users to fill out their forms by using AI to match the data required for forms. The app could gather data from past documents, or images of documents. Images would be parsed by the AI and text would be extracted.</li>
        //         <li className="m-2">Currently the App is in development, and requires further refinement.</li>
        //     </ul>
        //     </div>,
        //     stack: 'ReactJS, NodeJS, Qwen-2.5VL (llama)',
        //     status: 'In-development',
        //     githubLink: '',
        //     // hostLink: 'https://project-17-formfiller-client.netlify.app/'
        //     hostLink: ''
        // },
        // {
        //     name: 'Email handling webserver',
        //     description: <div className='mx-2 mt-2 mb-4'> 
        //     <ul>
        //         <li className="m-2">A simple NodeJS and express server built to handle emails from personal websites.</li> 
        //         <li className="m-2">The project uses nodemailer, however due to the recent inclusion of domain verification for sending emails through popular services, it has become essential to own a domain to be able to sebd emails.</li>
        //         <li className="m-2">The project is not functional until or unless a domain is bought to allow emails to be verified.</li>
        //     </ul>
        //     </div>,
        //     stack: 'NodeJS',
        //     status: 'Complete',
        //     githubLink: '',
        //     hostLink: ''
        // },
        {
            name: 'Ecommerce Website',
            description: <div className='mx-2 mt-2 mb-4'> 
            <ul>
                <li className="m-2">An ecommerce store built using Next.js, React, Tailwind CSS, TypeScript and Node.js.</li>
                <li className="m-2">A template for e-commerce websites to allow for quick development of other e-commerce websites.</li>  
                <li className="m-2">The challenge was to build an e-commerce website that allowed good SEO, good customer experience according to their expectations, and quick development on the frontend and backend.</li>
                <li className="m-2">I utilized Next.js strengths in SEO, and its server and client components, API routes, coupled with interactivity and reactivity using React. I also used Baymard Insititute's guides on E-commerce UX.</li>
                <li className="m-2">I learnt the intricacies of e-commerce UX, Next.js API routes, payments processors and shopping cart state management.</li>
            </ul>
            </div>,
            image: '/images/projects/ecom-next.webp',
            imageAlt: "A Next.js e-commerce website",
            stack: [
                {name:'NextJS', image:'/images/tech-stack/nextjs-icon.svg'},
                {name:'React', image:'/images/tech-stack/reactjs-icon.svg'},
                {name:'TypeScript', image:'/images/tech-stack/ts-icon.svg'},
                {name:'Tailwind', image:'/images/tech-stack/tailwind-icon.svg'},
                {name:'NodeJS', image:'/images/tech-stack/nodejs-icon.svg'},
            ],
            status: 'In-development',
            githubLink: '',
            hostLink: 'https://project-21-next-store.vercel.app/'
        },
        {
            name: 'Emergence',
            description: <div className='mx-2 mt-2 mb-4'> 
            <ul>
                <li className="m-2">A website for allowing customers to enroll into courses, programs and other resources provided by psychologists.</li>
                {/* <li className="m-2">.</li>   */}
            </ul>
            </div>,
            image: '/images/projects/emergence.webp',
            imageAlt: "A website for Psychotherapists offering modules",
            stack: [
                {name:'NextJS', image:'/images/tech-stack/nextjs-icon.svg'},
                {name:'React', image:'/images/tech-stack/reactjs-icon.svg'},
                {name:'TypeScript', image:'/images/tech-stack/ts-icon.svg'},
                {name:'Tailwind', image:'/images/tech-stack/tailwind-icon.svg'},
                {name:'Motion', image:'/images/tech-stack/motion-icon.png'},
                // {name:'NodeJS', image:'/images/tech-stack/nodejs-icon.svg'},
            ],
            status: 'In-development',
            githubLink: '',
            hostLink: '/'
        },
        // {
        //     name: 'Dropshipping Ecommerce website',
        //     description: <div className='mx-2 mt-2 mb-4'> 
        //     <ul>
        //         <li className="m-2">An ecommerce store built using Next.js, React, Tailwind CSS, TypeScript and Node.js.</li>
        //         <li className="m-2">A template for e-commerce websites to allow for quick development of other e-commerce websites.</li>  
        //         <li className="m-2">The challenge was to build an e-commerce website that allowed good SEO, good customer experience according to their expectations, and quick development on the frontend and backend.</li>
        //         <li className="m-2">I utilized Next.js strengths in SEO, and its server and client components, API routes, coupled with interactivity and reactivity using React. I also used Baymard Insititute's guides on E-commerce UX.</li>
        //         <li className="m-2">I learnt the intricacies of e-commerce UX, Next.js API routes, payments processors and shopping cart state management.</li>
        //     </ul>
        //     </div>,
        //     image: '/images/projects/emergence.webp',
        //     imageAlt: "A website for Psychotherapists offering modules",
        //     stack: [
        //         {name:'NextJS', image:'/images/tech-stack/nextjs-icon.svg'},
        //         {name:'React', image:'/images/tech-stack/reactjs-icon.svg'},
        //         {name:'TypeScript', image:'/images/tech-stack/ts-icon.svg'},
        //         {name:'Tailwind', image:'/images/tech-stack/tailwind-icon.svg'},
        //         {name:'NodeJS', image:'/images/tech-stack/nodejs-icon.svg'},
        //     ],
        //     status: 'In-development',
        //     githubLink: '',
        //     hostLink: 'https://project-21-next-store.vercel.app/'
        // },

    ]

    const featuredProjects = freelanceProjects.reverse()

export default function MyProjects(){
    
    const projectsDisplayed = ['Featured Projects', 'Other Projects']

    const [index, setIndex] = useState(0)

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
                {/* {projectsDisplayed?  */}
                <h3 className="text-xl">Freelance Projects</h3>
                {/* <h3 className="text-xl">Other Projects</h3> */}
            </div>
            <div className='col-span-full text-center justify-items-center font-[Roboto] align-start'>
                <img src={featuredProjects[index].image} className="object-contain mx-auto" loading="lazy" alt={featuredProjects[index].imageAlt}/> 
                <div className="flex flex-row mx-auto my-2">
                    <div onClick={() => {index === 0 ? setIndex(featuredProjects.length-1) : setIndex(index-1)}} className='bg-gray-900 text-gray-100 hover:bg-gray-100 hover:text-black transition-all h-fit w-fit mx-4 cursor-pointer rounded-sm'>
                        <LeftChevron className='h-6 w-6' />
                    </div>
                    <div className='text-sm rounded-sm mx-auto mb-4 px-2 py-1 w-fit text-center bg-gray-900 hover:bg-gray-100 hover:text-black transition:all ease-in-out duration-300'>
                        {/* <a href={projects[index].hostLink} target="_blank" rel="noreferrer noopener" ><h3 className="inline text-lg m-1">{projects[index].name}</h3> <img className="inline h-5 w-5 mb-1" src="/images/bx_link-external.svg"/></a> */}
                        <a href={featuredProjects[index].hostLink} target="_blank" rel="noreferrer noopener" ><h3 className="inline m-1">{featuredProjects[index].name}</h3> <Link /></a>                    
                    </div>
                    <div onClick={() => {index === featuredProjects.length-1 ? setIndex(0) : setIndex(index+1)}} className='bg-gray-900 text-gray-100 hover:bg-gray-100 hover:text-black transition-all h-fit w-fit mx-4 cursor-pointer rounded-sm' >
                        <RightChevron className='h-6 w-6' />
                    </div>
                </div>
                {featuredProjects.map((project, i) => (
                    <p key={project.name} className={`${ i - 1 < index ? 'inline text-gray-100 select-none' : 'inline text-gray-600 select-none' }`}><Dot /></p>
                ))}
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
                    { featuredProjects[index].status === 'Complete' ? <p>Status: <GreenDot/>{featuredProjects[index].status}</p> 
                    : <p>Status: <OrangeDot/>{featuredProjects[index].status}</p>}
                    <p className="m-2">Tech Stack: {featuredProjects[index].stack.map((techStack) => (
                        <span key={techStack.name} className="hover:-translate-y-1 duration-300 ease-out transition-all">
                            <img src={techStack.image} className="inline w-6 h-6 ml-3 mr-1 my-1"/>
                            <span className="my-auto">{techStack.name}</span>
                        </span>
                    ))}</p>
                    <div>
                        <p className="m-2">About Project:</p>{featuredProjects[index].description}
                    </div>
                    {/* <div className='m-2'>
                        <a href={projects[index].githubLink} target="_blank" rel="noreferrer noopener">Github Link</a>
                    </div> */}
                </motion.div>
            </div>
        
        </motion.div>
        </>
    )
}