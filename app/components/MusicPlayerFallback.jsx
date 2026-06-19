import {useState, useEffect, useRef} from 'react';
import { Spinner } from './Icons';

export default function MusicPlayerFallback() {

  return (
    <div 
      onClick={() => setIsPlaying(!isPlaying)}
      onKeyDown={(e) => {e.key === "Enter" ? setIsPlaying(!isPlaying) : null }}
      className="m-2 md:m-4 inline-block mr-auto text-sm font-[Roboto] bg-gray-900 rounded-full px-4 py-2 w-fit hover:text-gray-900 hover:bg-gray-100 hover:cursor-pointer transition-all">
        Permafrost - Scott Buckley 
        <Spinner />
    </div>
  )
}