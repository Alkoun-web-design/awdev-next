import React from 'react'

const attributions = [
        { name: "AjaxGb", link: "https://sketchfab.com/ajaxgb"},
        { name: "Patrick Matthew", link: "https://sketchfab.com/patrickmatthew"},
        { name: "Antropik", link: "https://sketchfab.com/Antropik"},
        { name: "SebastianSosnowski", link: "https://sketchfab.com/SebastianSosnowski"},
        { name: "holgcool", link: "https://sketchfab.com/holgcool"},
        { name: "Sousinho", link: "https://sketchfab.com/sousinho"},
        { name: "ul1tka", link: "https://sketchfab.com/ul1tka"},
        { name: "Scott Buckley", link: "https://www.scottbuckley.com.au/library/permafrost/"},
    ]

export default function Footer() {

    return (
        // <footer className="absolute text-xs bg-gray-900 bottom-0 px-6 py-2 mb-2 mx-2 rounded-full font-[Roboto]">
        <footer className="absolute bottom-0 text-xs text-center bg-gray-900 px-6 py-2 mb-2 mx-2 rounded-full font-[Roboto]">    
            <p className="inline">Special thanks to:</p>
            {attributions.map((attribute, key) => (
                key < attributions.length-1 ? <a key={key} className="" href={attribute.link}> {attribute.name}, </a> 
                : <a key={key} className="" href={attribute.link}> and {attribute.name}</a>
            ))}
        </footer>
    )
}