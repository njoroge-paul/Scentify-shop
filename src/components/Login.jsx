/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import { auth } from "../Firebase/config";
import { signOut } from "firebase/auth";
import {sendPasswordResetEmail, signInWithEmailAndPassword} from "firebase/auth";


function Login(){
    const navigate = useNavigate();
    const [isLoading,setIsLoading] = useState(false);
    const [loginType,setLoginType] = useState('login');

    //console.log(auth);
    const [userCredentials,setUserCredentials] = useState({});
    const [error,setError] = useState('');
    const [isAuthenticated,setIsAuthenticated] = useState(false);

    function handleCredentials(e){
       setUserCredentials({...userCredentials,[e.target.name]:e.target.value});
       console.log(userCredentials);
       
    }

    function handleLogin(e){
        e.preventDefault();
        setError("");
        signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
  .then((userCredential) => {
    // Signed in 
    console.log( userCredential.user);
    setIsLoading(false);
    setIsAuthenticated(true);
    navigate('/');
    // ...
  })
  .catch((error) => {
    setError(error.message);
   
  });

    }

    function handlePasswordReset(){
        const email = prompt('Please enter your email');
        sendPasswordResetEmail(auth,email);
        alert('Email sent! Check your inbox for password reset instructions');
    }

    function handleLogout() {
        signOut(auth)
          .then(() => {
            setIsAuthenticated(false); // set isAuthenticated to false
            navigate('/login'); // navigate back to login page
          })
          .catch((error) => {
            console.error(error);
          });
      }
     

    return(
      <>
         <Navbar>
         {isAuthenticated ? (
          <Link to="/" onClick={handleLogout}>Logout</Link>
        ) : (
          <Link to="/Login.jsx">Login</Link>
        )}
         </Navbar>
      <div className="flex justify-center items-center h-screen" >
      <form className="bg-[#F5F5F5] flex flex-col items-center justify-center p-8 m-12 sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] mx-auto border-[#1F5AE0] border-2  shadow-2xl" >
         <h1 className="text-5xl font-bold mb-8" >Welcome Back</h1>
        <input name="email" onChange={(e)=>{handleCredentials(e)}} type="text" placeholder="Email" className="w-full p-2 border-[#1FE045] border-2 placeholder:text-center rounded mb-4" />
        <input name="password" onChange={(e)=>{handleCredentials(e)}} type="password" placeholder="Password" className="w-full p-2 border-[#1FE045] border-2 placeholder:text-center rounded mb-4" />
        <button onClick={(e)=>(handleLogin(e))} type="submit" className="rounded bg-[#1FE045] w-full p-4 mb-8 text-2xl">Login</button>
        {
        error && 
        <p className="text-red-600 text-2xl" >{error}</p>
       }
        {            loginType === 'login' ?
              <p onClick={handlePasswordReset} className="text-lg text-gray-600">Forgot your password? <Link to="/Forgot-password.jsx" className="text-blue-500 hover:text-blue-700">Reset Password</Link></p> :
              <p onClick={() => setLoginType('login')} className="text-lg text-gray-600">Already have an account? <Link to="/Login.jsx" className="text-blue-500 hover:text-blue-700">Login</Link></p>
          }

        {isLoading ?
              <p className="text-green-500">Loading...</p> :
              <p onClick={() => setLoginType('signup')} className="text-lg text-gray-600">Don't have an account? <Link to="/Sign-up.jsx" className="text-blue-500 hover:text-blue-700">Sign-up</Link></p>
          }
       
        </form>
      </div>
      </>
    )
}

export default Login;