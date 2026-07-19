const contactMethods = [
  { method: "Github", detail: "Alkoun-web-design", image: "/images/contact/github-icon.svg", link: "https://github.com/Alkoun-web-design" },
  { method: "Linkedin", detail: "Hassam Sajid", image: "/images/contact/linkedin-svgrepo-com.svg", link: "https://www.linkedin.com/in/hassam-sajid-26560752/" },
  { method: "Email", detail: "hassam.dvlpr@proton.me", image: "/images/contact/mail-svgrepo-com.svg", link: "mailto:hassam.dvlpr@proton.me" },
  { method: "Signal", detail: "HassamDev.05", image: "/images/contact/signal-icon.svg", link: "https://signal.me/#eu/l9rXctcsMCHGrSPW8Xts8Odwphgn0RL_hE5Qc_KYJ-EoMQxSMMRHUqNKwqVEhLO9" },
  // { method: "Facebook", detail: "HassamDev.05", image: "/images/contact/signal-svgrepo-com.svg", link: "" },
]

export default function Sidebar() {
    return(
        <div className="col-span-1 border border-amber-500 bg-[#FF910010] rounded-lg text-gar-100 font-[Roboto] h-fit my-4 py-2 px-2">
            <div className="flex flex-col text-center">
                <p className="my-2">Get in touch for further questions:</p>
                {contactMethods.map(m => 
                    <a key={m.method} href={m.link} className="hover:text-amber-500 text-center my-6 transition-all duration-300 ease-out hover:-translate-y-1 decoration-0 hover:cursor-pointer hover:drop-shadow-xl hover:drop-shadow-amber-500">
                        <div className="text-xs text-clip">
                            <img src={m.image} className="mx-auto h-10 w-10 my-2" alt="Contact image"/>
                            <span>{m.detail}</span>
                        </div>
                    </a>
                )}
            </div>
        </div>
    )
}