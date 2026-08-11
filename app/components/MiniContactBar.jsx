// const contactMethods = [
//   { method: "Github", detail: "Alkoun-web-design", image: "/images/contact/github-icon.svg", link: "https://github.com/Alkoun-web-design" },
//   { method: "Linkedin", detail: "Hassam Sajid", image: "/images/contact/linkedin-svgrepo-com.svg", link: "https://www.linkedin.com/in/hassam-sajid-26560752/" },
//   { method: "Email", detail: "hassam.dvlpr @proton.me", image: "/images/contact/mail-svgrepo-com.svg", link: "mailto:hassam.dvlpr@proton.me" },
//   { method: "Signal", detail: "HassamDev.05", image: "/images/contact/signal-icon.svg", link: "https://signal.me/#eu/l9rXctcsMCHGrSPW8Xts8Odwphgn0RL_hE5Qc_KYJ-EoMQxSMMRHUqNKwqVEhLO9" },
//   // { method: "Facebook", detail: "HassamDev.05", image: "/images/contact/signal-svgrepo-com.svg", link: "" },
// ]

import {Signal, Github, ProtonMail, LinkedIn } from "./Icons"

export default function MiniContactBar() {
    return(
        <div className="backdrop-blur-lg flex flex-row justify-around text-sm md:col-span-2 h-fit border-t border-amber-500 bg-[#FF9102010] text-gray-100 font-[Roboto] py-4 px-2">
                <a href="https://github.com/Alkoun-web-design" className="hover:text-amber-500 text-center transition-all duration-300 ease-out hover:-translate-y-1 decoration-0 hover:cursor-pointer hover:drop-shadow-xl hover:drop-shadow-amber-500">
                    <div className="text-xs text-clip">
                        <Github alt="Contact image"/>
                        {/* <span>{m.detail}</span> */}
                    </div>
                </a>
                <a href="https://signal.me/#eu/l9rXctcsMCHGrSPW8Xts8Odwphgn0RL_hE5Qc_KYJ-EoMQxSMMRHUqNKwqVEhLO9" className="hover:text-amber-500 text-center transition-all duration-300 ease-out hover:-translate-y-1 decoration-0 hover:cursor-pointer hover:drop-shadow-xl hover:drop-shadow-amber-500">
                    <div className="text-xs text-clip">
                        <Signal alt="Contact image"/>
                        {/* <span>{m.detail}</span> */}
                    </div>
                </a>
                <a href="mailto:hassam.dvlpr@proton.me" className="hover:text-amber-500 text-center transition-all duration-300 ease-out hover:-translate-y-1 decoration-0 hover:cursor-pointer hover:drop-shadow-xl hover:drop-shadow-amber-500">
                    <div className="text-xs text-clip">
                        <ProtonMail alt="Contact image"/>
                        {/* <span>{m.detail}</span> */}
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/hassam-sajid-26560752/" className="hover:text-amber-500 text-center transition-all duration-300 ease-out hover:-translate-y-1 decoration-0 hover:cursor-pointer hover:drop-shadow-xl hover:drop-shadow-amber-500">
                    <div className="text-xs text-clip">
                        <LinkedIn alt="Contact image"/>
                        {/* <span>{m.detail}</span> */}
                    </div>
                </a>
        </div>
    )
}