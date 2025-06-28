 import {checkFormvalidation }from "../utils/validation";
import Header from "./header";
 import {useState,useRef} from 'react'


const Login=()=>{
  const [isSignInForm,setIsSignInForm]=useState(true)
  const [errorMessage,setErrorMessage]=useState(true)

  const email=useRef(null);
  const password=useRef(null);

  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  }

  const checkValidation=()=>{
   const message=checkFormvalidation(email.current.value ,password.current.value)
   setErrorMessage(message)
   
  }
return(
  <div>
    <Header/>
    <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg" alt="" />
    </div>
   
    <form onSubmit={(e)=>e.preventDefault()} className="absolute w-4/12 bg-black/70 p-12 my-40 mx-auto right-0 left-0 rounded text-white">
    <h1 className="text-3xl font-bold mb-4">{isSignInForm?"Sign In":"Sign Up"}</h1>


    <div className="relative mb-6">
   <input
    type="text"
    ref={email}
    id="email"
    placeholder=" "
    required
    className="peer h-12 w-full px-4 pt-6 pb-2 bg-white/10 text-white rounded border border-white/20 placeholder-transparent focus:outline-none focus:border-white focus:bg-white/20 transition-all"
  />
  <label
    htmlFor="email"
    className="absolute left-4 top-2 text-xs text-gray-400 transition-all 
      peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base
      peer-focus:top-1 peer-focus:text-sm peer-focus:text-white"
  >
    Email or phone number
  </label>
</div>


<div className="relative mb-6">
  <input
    type="password"
    id="password"
    ref={password}
    placeholder=" "
    required
    className="peer h-12 w-full px-3 pt-5 pb-2 bg-white/10 text-white rounded border border-white/20 placeholder-transparent focus:outline-none focus:border-white focus:bg-white/20 transition-all"
  />
  <label
    htmlFor="password"
    className="absolute left-3 top-2 text-sm text-gray-400 transition-all 
      peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base
      peer-focus:top-2 peer-focus:text-sm peer-focus:text-white"
  >
    Password
  </label>
</div>
 
  <button className="w-full my-4 p-2 rounded bg-red-600" onClick={()=>checkValidation()}>{isSignInForm?"Sign In":"Sign Up"}</button>
  <p className="text-red-500">{errorMessage}</p>
  {isSignInForm && (
    <>
  <p className="text-center">OR</p>
  <button className="w-full my-4 p-2 rounded bg-gray-700">Use Code</button>

  <p className="text-center text-sm text-gray-400 cursor-pointer hover:underline mb-4">Forgot Password?</p>

  <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
    <input type="checkbox" id="remember" />
    <label htmlFor="remember">Remember me</label>
   
    </div>
     </>
   )}

  <p className="text-sm text-gray-400">{isSignInForm?"New to Netflix?":"Already have Account?"}
<span className="text-white hover:underline cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"Sign up now":" Sign In now"}</span>
  </p>
</form>

  </div>
)
}

export default Login;