/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Login(){
    return(
      <>
         <Navbar/>
      <div className="" >
      <form type="submit" className="bg-[#F5F5F5] flex items-center flex-col text-center justify-center p-4 m-6 sm:h-[80vh] sm:w-[60%] mx-auto border-[#1F5AE0] border-2" >
         <h1 className="text-5xl font-bold" >Welcome Back</h1>
        <input type="text" placeholder="Email" className="sm:w-96 p-2 border-[#E01FBB] border-2 placeholder:text-center rounded md:m-6 " />
        <input type="password" placeholder="Password" className="sm:w-96 p-2 border-[#E01FBB] border-2 placeholder:text-center rounded md:m-6 " />
        <button type="submit" className="rounded bg-[#1FE045] md:w-[40%] mt-3 p-2">Login</button>
        <p className="mt-2 text-sm text-gray-600">Don't have an account? <Link to="/Sign-up.jsx" className="text-blue-500 hover:text-blue-700">Sign-up</Link></p>
        </form>
      </div>
      </>
    )
}

export default Login;