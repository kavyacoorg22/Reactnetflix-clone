import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown, Volume2, VolumeX ,Check} from 'lucide-react';
import { useSavedMovies } from '../context/movieContext';
import { useNavigate } from "react-router-dom"

const MovieCardInfo = ({ data }) => {
  const [isMuted, setIsMuted] = useState(true);
  const {addMovie,mylist}=useSavedMovies()
  const isSaved = mylist.some((movie) => movie.id === data.id); 
  const navigate=useNavigate()

   const handleClick = () => {
   navigate(`/playvideo/${data.trailer_id}`)
    console.log('Playing video:', data.trailer_id);
  };

  return (
    <div className="space-y-3 cursor-pointer">
      
      <div className="relative">
        <img 
          src={data.backdrop || data.poster_path} 
          alt="Backdrop" 
          className="w-full h-44 object-cover rounded-t-lg" 
        />
        
      
        <div  onClick={handleClick} className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-t-lg flex items-center justify-center">
          <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-t-lg flex items-center justify-center">
            <Play className="w-16 h-16 text-white fill-white" />
          </div>
        </div>

      
    <button 
          className="absolute top-3 right-3 bg-black/70 text-white p-1.5 rounded-full hover:bg-black/90 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            setIsMuted(!isMuted);
          }}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

    
      <div className="px-4 pb-4 space-y-3">
      
        <div className="flex items-center space-x-2">
          <button className="bg-white text-black px-6 py-2 rounded-sm flex items-center space-x-2 text-sm font-semibold hover:bg-gray-200 transition-colors">
            <Play className="w-4 h-4 fill-black" />
            <span>Play</span>
          </button>
          <button className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors border border-gray-600 cursor-pointer"
          onClick={()=>{
            if(!isSaved)
              addMovie(data)
          }}
          >
              {isSaved ? <Check className="w-4 h-4 text-green-400" /> : <Plus className="w-4 h-4" />}
          </button>
          <button className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors border border-gray-600 cursor-pointer">
            <ThumbsUp className="w-4 h-4" />
          </button>
          <div className="flex-1"></div>
          <button className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors border border-gray-600">
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        
        <div className="flex items-center space-x-3 text-sm">
          <span className="text-green-400 font-semibold">{Math.round(data.vote_average * 10)}% Match</span>
          <span className="border border-gray-500 px-1.5 py-0.5 text-xs text-gray-300 rounded-sm">
            {data.adult ? '18+' : '13+'}
          </span>
          <span className="text-gray-300">{new Date(data.release_date).getFullYear()}</span>
        </div>

        
        <h3 className="text-white font-bold text-base leading-tight">{data.title}</h3>

      
        <div className="text-xs text-gray-400">
          {data.tags?.slice(0, 3).join(" • ") || "Action • Drama • Thriller"}
        </div>
      </div>
    </div>
  );
};

export default MovieCardInfo;
