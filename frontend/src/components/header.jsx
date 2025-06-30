import {LOGO_URL} from '../utils/constants'



const Header=()=>{
 
  return(
    <div className="absolute w-full  py-2  bg-gradient-to-b from-black z-20">
      <img className="w-32 ml-12" src={LOGO_URL} alt="netflix imag" />
    </div>
  )
}

export default Header;''