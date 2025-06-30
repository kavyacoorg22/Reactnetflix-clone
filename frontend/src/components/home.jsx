import { useState,useEffect } from "react"
import { MOCK_DATA } from '../utils/constants'
import Header from "./header"
import MainContainer from "./mainContainer"
import SecondaryContainer from "./secondaryContainer"

const Home=()=>{
   const [movies,setMovies]=useState([])
  
    useEffect(()=>{
     setMovies(MOCK_DATA.results)
    },[])
    console.log(movies)
  return(
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Home