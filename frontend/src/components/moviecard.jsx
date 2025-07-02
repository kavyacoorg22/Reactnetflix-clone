import MovieCardInfo from "./movieCardInfo"

import { useState } from "react";
import { Play, Plus, ThumbsUp, ChevronDown, Volume2, VolumeX } from 'lucide-react';

// const MovieCard=({data})=>{

//   const navigate=useNavigate()
   

//   const handleClick=()=>{
//    navigate(`/playvideo/${data.trailer_id}`)
//   }
//  console.log(data.trailer_id)
//   return(
    
//     <div className=" relative w-36 cursor-pointer group" onClick={handleClick}>
//       <img src={data?.poster_path} alt="poster"/>
//           <div className="absolute z-100 top-[-60px] left-[-75px] w-80 bg-zinc-900 text-white rounded-lg shadow-2xl
//                       opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 
//                       transition-all duration-300 pointer-events-none group-hover:pointer-events-auto
//                       border border-gray-700 overflow-visible">
//         <div className="p-4 w-full">
//           <MovieCardInfo data={data} />
//         </div>
//       </div>
//     </div>
//   )
// }
const MovieCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCardPosition({
      x: rect.left + rect.width / 2,
      y: rect.top
    });
    setIsHovered(true);
  };

 

  return (
    <>
      <div 
        className="relative w-64 cursor-pointer group transition-all duration-300 ease-out"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsHovered(false)}
       >
        
        <div className="relative overflow-hidden rounded-lg">
          <img 
            src={data?.poster_path} 
            alt="poster"
            className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" /> */}
          
        
          {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Play className="w-12 h-12 text-white fill-white drop-shadow-lg" />
          </div> */}
        </div>
      </div>

      
      {isHovered && (
        <div 
          className="fixed w-80 bg-zinc-900 rounded-lg shadow-2xl border border-gray-700 transition-all duration-300 ease-out z-[9999] cursor-pointer"
          style={{
            left: `${cardPosition.x - 160}px`, 
            top: `${cardPosition.y - 60}px`, 
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <MovieCardInfo data={data} />
        </div>
      )}
    </>
  );
};

export default MovieCard