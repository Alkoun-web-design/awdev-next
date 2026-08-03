import { usePage } from "../components/PageContext";

export default function Home() {

  const { setPage } = usePage();

  return (
      <>
        <div className='grid col-span-full md:col-start-3 lg:col-start-2 md:col-end-12 text-center'>
            <div className='border border-amber-500 rounded-full text-gray-100 px-4 py-2 mx-auto my-auto w-fit mt-30'>
              <h3 className=' text-amber-500 font-[Roboto]'>
                Performant, accessible, optimized websites.
              </h3>  
            </div>
            <h1 className='text-7xl md:text-8xl py-4 text-center bg-clip-text text-transparent text-shadow-sm mask-type-alpha text-shadow-amber-500 my-1 '>
              AWDEV
            </h1>  
            <h2 className='font-[Roboto] text-xl md:text-4xl mt-40'>
              Get your presence established online.
            </h2>
            <div className='flex flex-col md:flex-row justify-center'>
              {/* <button onClick={() => setPage('Pricing Plans')} className='backdrop-blur-lg border border-amber-500 text-gray-100 hover:text-gray-900 hover:bg-amber-500 font-[Roboto] py-2 px-6 rounded-full md:text-lg my-2 mx-auto md:m-4 duration-300 transition-all hover:cursor-pointer w-fit'>
                Explore Pricing Plans
              </button> */}
              <button onClick={() => setPage('Portfolio')} className='backdrop-blur-lg border border-amber-500 text-gray-100 hover:text-gray-900 hover:bg-amber-500 font-[Roboto] py-2 px-6 rounded-full md:text-lg my-2 mx-auto md:m-4 duration-300 transition-all hover:cursor-pointer w-fit'>
                Check Portfolio
              </button>
            </div>
        </div>
      </>
    )
}