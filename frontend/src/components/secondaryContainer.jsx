import MovieList from "./movieList";
import { MOCK_DATA } from '../utils/constants'
import { useState,useEffect } from "react"
import { useSavedMovies } from "../context/movieContext";

const SecondaryContainer=()=>{
   const [movies,setMovies]=useState({})
   const {mylist}=useSavedMovies();
   
    useEffect(()=>{
     setMovies(MOCK_DATA)
    },[])
  console.log(movies.popular_movies)
  return(
    <div className=" bg-black">
    {movies &&(
      <div className=" -mt-36 relative z-10 pl-8">
    
        <div > <MovieList title={"Top Movies"} data={movies.animated_movies}/></div>
       <div > <MovieList title={"New on Netflix"} data={movies.sci_fi_movies}/></div>
          <div > <MovieList title={"Made in India"} data={movies.animated_movies}/></div>
        <div > <MovieList title={"International Series dubbed in English"} data={movies.animated_movies}/></div>
        <div > <MovieList title={"Tv Comedies"} data={movies.sci_fi_movies}/></div>
        {mylist.length >0 &&(
          <div><MovieList title={"My List"} data={mylist}/></div>
        )}
      </div>)}
      
    
    </div>
  
  )
  
}

export default SecondaryContainer;