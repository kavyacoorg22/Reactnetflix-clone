import Login from './components/login' 
import{ useState} from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from '../src/components/home'
import VideoPlayer from './components/videoPlayer'
import { MyListProvider } from "./context/movieContext";

const App=()=>{
  
  const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:"/playvideo/:id",
      element:<VideoPlayer/>
    }
  ])

  
  return(
   <div>
    <MyListProvider>
   <RouterProvider router={appRouter}/>
   </MyListProvider>
   </div>

  )
}

export default App;