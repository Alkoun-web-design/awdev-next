import {useState, useEffect, useRef} from 'react';
import { PauseIcon, PlayIcon } from './Icons';

export default function MusicPlayer() {

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef();

    useEffect(() => {
      if(isPlaying){
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }, [isPlaying])
    
    // function handlePlayMusic(){
    //   setIsPlaying(!isPlaying)
    //   if(!isPlaying){
    //     audioRef.current.play();
    //   } else {
    //     audioRef.current.pause();
    //   }
    // };

  return (
    <div 
      onClick={() => setIsPlaying(!isPlaying)}
      onKeyDown={(e) => {e.key === "Enter" ? setIsPlaying(!isPlaying) : null }}
      className="bg-[#FF910010] col-span-2 py-2 h-fit text-sm font-[Roboto] border border-amber-500 rounded-full w-60 hover:text-gray-900 hover:bg-amber-500 hover:cursor-pointer transition-all text-center">
        Permafrost - Scott Buckley 
        { isPlaying ? <PauseIcon /> : <PlayIcon /> }
          <audio ref={audioRef} className="md:inline bg-gray-900" 
          // src="/audio/scott-buckley-permafrost(chosic.com).ogg"
          src="https://pub-0969aca2b9b244dd8a06bb76050534ee.r2.dev/scott-buckley-permafrost(chosic.com).ogg" 
          // controls 
            loop   
      />
    </div>
  )
}