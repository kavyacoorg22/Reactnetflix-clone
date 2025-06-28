import Login from './components/login' 
import{ useState} from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

const App=()=>{
  
  const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    }
  ])

  
  return(
   <div>
   <RouterProvider router={appRouter}/>
   </div>

  )
}

export default App;