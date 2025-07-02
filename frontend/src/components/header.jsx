import {LOGO_URL,LOGIN_LOGO} from '../utils/constants'
import { useAuth } from "../context/AuthContext"
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Header=()=>{
 const {logout,auth}=useAuth()
 const navigate=useNavigate()
  return(
    <div className="absolute w-full flex gap-5 py-2  bg-gradient-to-b from-black z-20">
      <div>
        <img className="w-32 ml-12" src={LOGO_URL} alt="netflix imag" />
       </div>
      {auth.user && (
        <>
        <div className='py-4'> 
        <ul className='flex text-white text-sm'>
          <li className='pr-3'>Home</li>
          <li className='pr-3'>Tv Shows</li>
          <li className='pr-3'>Movies</li>
          <li className='pr-3'>Games</li>
          <li className='pr-3'>New&Popular</li>
          <li className='pr-4'>My List</li>
          <li className='pr-3'>Browse by Language</li>
        </ul>
      </div>
      <div>
       <div className=' p-2 ml-64 flex gap-3 justify-end'>
          <img src="../src/assets/search.svg" alt="search" />
           <img src="../src/assets/bell.svg" alt="" />
           <p className='text-white text-sm pt-1'>Children</p>
           <img className='h-7' src={LOGIN_LOGO} alt="loginlogo" />
              <button className='text-white font-bold' onClick={()=>{logout(); navigate('/')}}>(logout)</button>
       </div>
      </div>
      </>
      )}
    </div>
    
  )
}

export default Header;''