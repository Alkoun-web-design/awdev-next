const contactMethods = [
  { method: "Github", detail: "Alkoun-web-design", image: "/images/contact/github-icon.svg", link: "https://github.com/Alkoun-web-design" },
  { method: "Linkedin", detail: "Hassam Sajid", image: "/images/contact/linkedin-svgrepo-com.svg", link: "https://www.linkedin.com/in/hassam-sajid-26560752/" },
  { method: "Email", detail: "hassam.dvlpr @proton.me", image: "/images/contact/mail-svgrepo-com.svg", link: "mailto:hassam.dvlpr@proton.me" },
  { method: "Signal", detail: "HassamDev.05", image: "/images/contact/signal-icon.svg", link: "https://signal.me/#eu/l9rXctcsMCHGrSPW8Xts8Odwphgn0RL_hE5Qc_KYJ-EoMQxSMMRHUqNKwqVEhLO9" },
  // { method: "Facebook", detail: "HassamDev.05", image: "/images/contact/signal-svgrepo-com.svg", link: "" },
]

import {Signal, Github, ProtonMail, LinkedIn } from "./Icons"

export default function ContactSection() {
    return(
        <div className="hidden md:grid col-span-4 text-sm lg:col-span-3 xl:col-span-2 h-fit border border-amber-500 bg-[#FF9102010] rounded-full text-gar-100 font-[Roboto] py-2 px-2">
            <div className="flex justify-around">
                {/* <p className="hidden md:flex mx-2 my-auto">Contact</p> */}
                {/* {contactMethods.map(m =>  */}
                    {/* <a key={m.method} href={m.link} className="hover:text-amber-500 text-center transition-all duration-300 ease-out hover:-translate-y-1 decoration-0 hover:cursor-pointer hover:drop-shadow-xl hover:drop-shadow-amber-500"> */}
                        {/* <div className="text-xs text-clip"> */}
                            {/* <img src={m.image} className="mx-2 h-6 w-6 md:h-8 md:w-8" alt="Contact image"/> */}
                            {/* <span>{m.detail}</span> */}
                        {/* </div> */}
                    {/* </a> */}
                {/* )} */}
                    <a href="" className="hover:text-amber-500 text-center transition-all duration-300 ease-out hover:-translate-y-1 decoration-0 hover:cursor-pointer hover:drop-shadow-xl hover:drop-shadow-amber-500">
                        <div className="text-xs text-clip">
                            <Github className="mx-2 h-6 w-6 md:h-8 md:w-8" alt="Contact image"/>
                            {/* <span>{m.detail}</span> */}
                        </div>
                    </a>
                    <a href="" className="hover:text-amber-500 text-center transition-all duration-300 ease-out hover:-translate-y-1 decoration-0 hover:cursor-pointer hover:drop-shadow-xl hover:drop-shadow-amber-500">
                        <div className="text-xs text-clip">
                            <Signal className="mx-2 h-6 w-6 md:h-8 md:w-8" alt="Contact image"/>
                            {/* <span>{m.detail}</span> */}
                        </div>
                    </a>
                    <a href="" className="hover:text-amber-500 text-center transition-all duration-300 ease-out hover:-translate-y-1 decoration-0 hover:cursor-pointer hover:drop-shadow-xl hover:drop-shadow-amber-500">
                        <div className="text-xs text-clip">
                            <ProtonMail className="mx-2 h-6 w-6 md:h-8 md:w-8" alt="Contact image"/>
                            {/* <span>{m.detail}</span> */}
                        </div>
                    </a>
                    <a href="" className="hover:text-amber-500 text-center transition-all duration-300 ease-out hover:-translate-y-1 decoration-0 hover:cursor-pointer hover:drop-shadow-xl hover:drop-shadow-amber-500">
                        <div className="text-xs text-clip">
                            <LinkedIn className="mx-2 h-6 w-6 md:h-20 md:w-20" alt="Contact image"/>
                            {/* <span>{m.detail}</span> */}
                        </div>
                    </a>
            </div>
        </div>
    )
}