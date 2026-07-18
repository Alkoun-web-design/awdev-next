const contactMethods = [
  { method: "Github", detail: "Alkoun-web-design", image: "/images/contact/github-icon.svg", link: "https://github.com/Alkoun-web-design" },
  { method: "Linkedin", detail: "Hassam Sajid", image: "/images/contact/linkedin-svgrepo-com.svg", link: "https://www.linkedin.com/in/hassam-sajid-26560752/" },
  { method: "Email", detail: "hassam.dvlpr@proton.me", image: "/images/contact/mail-svgrepo-com.svg", link: "mailto:hassam.dvlpr@proton.me" },
  { method: "Signal", detail: "HassamDev.05", image: "/images/contact/signal-icon.svg", link: "https://signal.me/#eu/l9rXctcsMCHGrSPW8Xts8Odwphgn0RL_hE5Qc_KYJ-EoMQxSMMRHUqNKwqVEhLO9" },
  // { method: "Facebook", detail: "HassamDev.05", image: "/images/contact/signal-svgrepo-com.svg", link: "" },
]

export default function Sidebar() {
    return(
        <div className="col-span-1 border border-amber-500 bg-[#FF910010] rounded text-gar-100 font-[Roboto] h-fit py-4 px-2">
            <div className="flex flex-col text-center">
                Get in touch for further questions:
                {contactMethods.map(m => 
                    <div key={m.method} className="my-6 text-xs">
                        <img src={m.image} className="mx-auto h-8 w-8" alt="Contact image"/>
                        <a href={m.link}>{m.detail}</a>
                    </div>
                )}
            </div>
        </div>
    )
}