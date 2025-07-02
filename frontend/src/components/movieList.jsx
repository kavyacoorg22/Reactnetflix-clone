import MovieCard from "./moviecard"
import useHorizontalScroll from "../hook/useHorizontalScroll";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MovieList = ({ title, data }) => {
  const { scrollRef, scroll } = useHorizontalScroll();
  
  return (
    <div className="p-2 relative">
      <h1 className="text-xl text-white font-bold pb-5">{title}</h1>
      
    
      <div className="absolute z-10 top-1/2 left-2 transform -translate-y-1/2">
        <button 
          onClick={() => scroll("left")}
          className="hover:bg-black/70 bg-opacity-50 hover:bg-opacity-75 h-26 rounded-3xl p-2 transition-all duration-300"
        >
          <ChevronLeft className="text-white w-8 h-8" />
        </button>
      </div>

    
      <div className="absolute z-10 top-1/2 right-2 transform -translate-y-1/2">
        <button 
          onClick={() => scroll("right")}
          className="hover:bg-black/70 bg-opacity-50 hover:bg-opacity-75 h-26 rounded-3xl p-2 transition-all duration-300"
        >
          <ChevronRight className="text-white w-8 h-8" />
        </button>
      </div>

      {/* Scrollable container */}
      <div ref={scrollRef} className="flex overflow-x-auto scrollbar-hide">
        <div className="flex gap-8">
          {Array.isArray(data) &&
            data.map((ele) => (
              <MovieCard key={ele.id} data={ele} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default MovieList