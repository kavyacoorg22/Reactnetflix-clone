import Login from './components/login' 
import{ useState} from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from '../src/components/home'

const App=()=>{
  
  const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/home',
      element:<Home/>
    }
  ])

  
  return(
   <div>
   <RouterProvider router={appRouter}/>
   </div>

  )
}

export default App;