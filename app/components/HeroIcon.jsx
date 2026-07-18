export default function HeroIcon({img, title}) {
    return(
        <span className="hover:-translate-y-1 duration-300 ease-out transition-all hover:cursor-default hover:drop-shadow-lg hover:drop-shadow-amber-500">
            <img alt={`{title} icon`} src={`/images/tech-stack/${img}`} className="inline w-4 h-4 ml-3 mr-1 my-1"/>
            <span className="my-auto">{title}</span>
        </span>
    )
}