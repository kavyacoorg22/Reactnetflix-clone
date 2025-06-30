import { BG_POSTER } from "../utils/constants";
import { POSTER_TITLE } from "../utils/constants";
import BackgroundVideo from "./backgroundVideo";
import playButton from '../assets/playButton.svg';

const MainContainer=()=>{

  return(
  <div>
  <div className="relative w-screen aspect-video bg-gradient-to-r">
  
  {/* <img src={BG_POSTER} alt="Background Poster" className="w-full h-full object-cover"/> */}

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
    <button className="bg-white text-black  px-8 py-2 my-2 w-2/12 font-bold to-black rounded flex justify-center gap-2 hover:opacity-80"><img src={playButton}/>Play</button>
    <button className="bg-gray-500 text-white px-8 py-2 my-2 w-3/12 font-bold rounded ">More Info</button>
  </div>
</div>
 
  </div>

  )
 
}

export default MainContainer;