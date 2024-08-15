/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/config";
import { useState } from "react";

function Signup(){
    const navigate = useNavigate();
    const [userCredentials,setUserCredentials] = useState({});
    const [error,setError] = useState('')

    function handleCredentials(e){
        e.preventDefault();
        setUserCredentials({...userCredentials,[e.target.name]:e.target.value});
        console.log(userCredentials);
        
     }

    function handleSignup(e){
        e.preventDefault();
        setError("");


        createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
  .then((userCredential) => {
    // Signed up 
    navigate('/Login.jsx')
    console.log(userCredential.user);
    // ...
   
    
    // ...
  })
  .catch((error) => {
        setError(error.message);
    //console.error(errorCode, errorMessage);
    // ..
  });
    }

    return(
      <>
         <Navbar/>
      <div className="flex justify-center items-center h-auto" >
      <form className="bg-[#F5F5F5] flex flex-col items-center justify-center p-8 m-12 sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] mx-auto border-[#1F5AE0] border-2 rounded-lg shadow-2xl lg:mt-10" >
         <h1 className="text-5xl font-bold mb-8" >Create an Account</h1>
        {/* <input type="text" placeholder="Name" className="w-full p-2 border-[#1FE045] border-2 placeholder:text-center rounded mb-4" /> */}
        <input onChange={(e)=>{handleCredentials(e)}} name="email" type="email" placeholder="Email" className="w-full p-2 border-[#1FE045] border-2 placeholder:text-center rounded mb-4" />
        <input onChange={(e)=>{handleCredentials(e)}} name="password" type="password" placeholder="Password" className="w-full p-2 border-[#1FE045] border-2 placeholder:text-center rounded mb-4" />
        {/* <input type="password" placeholder="Confirm Password" className="w-full p-2 border-[#1FE045] border-2 placeholder:text-center rounded mb-4" /> */}
        <button onClick={(e)=>{handleSignup(e)}} type="submit" className="rounded bg-[#1FE045] w-full p-4 mb-6 text-2xl">Sign up</button>
       {
        error && 
        <p className="text-red-600 text-2xl" >{error}</p>
       }

        <p className="text-lg text-gray-600">Already have an account? <Link to="/Login.jsx" className="text-blue-500 hover:text-blue-700">Login</Link></p>
        </form>
      </div>
      </>
    )
}

export default Signup;