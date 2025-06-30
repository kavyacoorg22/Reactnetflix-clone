import { useAuth } from "../context/AuthContext"
import { BG_IMG } from "../utils/constants";
import {checkFormvalidation }from "../utils/validation";
import Header from "./header";
 import {useState,useRef} from 'react'
import { useNavigate } from "react-router-dom";

const Login=()=>{
  const [isSignInForm,setIsSignInForm]=useState(true)
  const [errorMessage,setErrorMessage]=useState(true)
  const navigate=useNavigate()
  const email=useRef(null);
  const password=useRef(null);
  const { login } = useAuth()

  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
    setErrorMessage("")
    if (email.current) email.current.value = "";
  if (password.current) password.current.value = "";
  }

const checkValidation = async () => {
  const message = checkFormvalidation(email.current.value, password.current.value);
  setErrorMessage(message);
  if (message) return;

  const endpoint = isSignInForm ? "/signin" : "/signup";

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      if (isSignInForm) {
        login(data.token, email.current.value)
        alert("SignIn Successfully");
        navigate("/home"); //,{replace:true} This replaces the current history entry
      } else {
        alert("SignUp Successfully");
        setIsSignInForm(true);
      }
    } else {
      setErrorMessage(data.message || (isSignInForm ? "Login Failed" : "Signup Failed"));
    }
  } catch (err) {
    setErrorMessage("Something went wrong");
    console.log(err);
  }
};


return(
  <div>
    <Header/>
    <div className="absolute">
      <img src={BG_IMG} alt="" />
    </div>
   
    <form onSubmit={(e)=>e.preventDefault()} className="absolute w-4/12 bg-black/70 p-12 my-40 mx-auto right-0 left-0 rounded text-white">
    <h1 className="text-3xl font-bold mb-4">{isSignInForm?"Sign In":"Sign Up"}</h1>


    <div className="relative mb-6">
   <input type="text" ref={email} id="email" placeholder=" " required 
   className="peer h-12 w-full px-4 pt-6 pb-2 bg-white/10 text-white rounded border border-white/20 placeholder-transparent focus:outline-none focus:border-white focus:bg-white/20 transition-all"
  />
  <label htmlFor="email"
    className="absolute left-4 top-2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-white"
  >
    Email or phone number
  </label>
</div>


<div className="relative mb-6">
  <input type="password" id="password" ref={password} placeholder=" " required
    className="peer h-12 w-full px-3 pt-5 pb-2 bg-white/10 text-white rounded border border-white/20 placeholder-transparent focus:outline-none focus:border-white focus:bg-white/20 transition-all"
  />
  <label htmlFor="password"
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