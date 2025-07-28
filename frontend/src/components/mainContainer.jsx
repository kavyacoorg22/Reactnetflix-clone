import { BG_POSTER } from "../utils/constants";
import { POSTER_TITLE } from "../utils/constants";
import BackgroundVideo from "./backgroundVideo";
import playButton from '../assets/playButton.svg';
import { useState } from "react";
const MainContainer=()=>{

  return(
  <div>
  <div className="relative w-screen aspect-video bg-gradient-to-r">
  
{/* 
  <img src={BG_POSTER} alt="Background Poster" className="w-full h-full object-cover"/> */}

    <BackgroundVideo/> 
  <img src={POSTER_TITLE} alt="Poster Title" className="absolute top-28 left-14 w-[35%] z-10"/>

  <div className="absolute bottom-60 left-14 z-20 text-white">
    <h2 className="text-xl font-bold mb-2">Most Liked</h2>
    <p className="max-w-xl text-md">
      With the aid of unexpected friends, a gifted but 
      introverted student confronts bullies and violent foes — unaware 
      of how dangerous his world will become.
    </p>
    <div>
      
    </div>
   <div className="flex gap-4 mt-4">
   <button className="flex items-center bg-white text-black px-6 py-2 font-bold rounded hover:opacity-80">
    <img src={playButton} alt="play" className="w-5 h-5 mr-2" />
    Play
   </button>
   <button className="flex items-center bg-gray-500 text-white px-6 py-2 font-bold rounded hover:opacity-80">
    <img src="../src/assets/more.svg" alt="more" className="w-5 h-5 mr-2"/>
    More Info
   </button>
</div>

    
  </div>
</div>
 
  </div>

  )
 
}

export default MainContainer;