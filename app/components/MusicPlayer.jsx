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
      className="m-2 md:m-4 inline-block mr-auto text-sm font-[Roboto] bg-gray-900 rounded-full px-4 py-2 w-fit hover:text-gray-900 hover:bg-gray-100 hover:cursor-pointer transition-all">
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