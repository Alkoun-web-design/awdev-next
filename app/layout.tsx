import { AnimatePresence } from "motion/react"
import type { Metadata } from "next";
import Header from "./components/Header"
import SpaceBackground from "./components/SpaceBackground"
import { Syncopate, Roboto } from 'next/font/google';
import "./globals.css";

const syncopate = Syncopate({ weight:'400' ,subsets: ['latin'], preload:true });
const roboto = Roboto({ weight:'400', subsets: ['latin'], preload:true });

export const metadata: Metadata = {
  title: {
    default: 'Awdev',
    template: '%s | Awdev',
  },
  description: 'Awdev creates accessible websites and online experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syncopate.className} ${roboto.className} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://awdev.netlify.app",
              "name": "Awdev",
              "url": "https://awdev.netlify.app",
              // "sameAs": [
              //   "https://www.instagram.com/yourbusiness",
              //   "https://www.linkedin.com/company/yourbusiness"
              //  ],
              "logo": {
                "@type": "ImageObject",
                "url": "https://awdev.netlify.app/awdev.svg",
              },
              "description": "Awdev believes in affording professionals, businesses and other organizations an online presence by building performant and representative websites.",
              "foundingDate": "2021", // Your founding year
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": "1" // Adjust to your size
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lahore",
                "addressCountry": "PK"
              },
              "serviceType": [
                "Developing websites",
                "Developing web apps",
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://awdev.netlify.app",
              "url": "https://awdev.netlify.app",
              "name": "Awdev",
              "description": "Awdev believes in affording professionals, businesses and other organizations an online presence by building performant and representative websites.",
              "publisher": {
                "@id": "https://awdev.netlify.app"
              },
              "inLanguage": ["en-US"]
            })
          }}
        />
      </head>
      <body className="min-h-full">
        <main className="grid grid-cols-12 grid-rows-none md:grid-rows-12 gap-2 md:gap-4 lg:gap-6 font-[Syncopate] text-gray-100 h-full md:h-screen w-full overflow-auto">
          <Header />
          <AnimatePresence>
            {children}
          </AnimatePresence>
        </main>
        <SpaceBackground />
      </body>
    </html>
  );
}