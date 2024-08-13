//import React from "react";
import Login from "./Login";

function Navbar(){
 
   return(
    <nav className="bg-white sm:flex flex-grow justify-between items-center shadow-md mr-4 ml-4 p-4 border-2 border-b-[#E01FBB] w-auto  " >
    <div className="ml-4 text-4xl font-bold text-[#1FE045]">
        <a href="/">Scentify</a>
    </div>
    <ul className="sm:flex flex-grow flex-shrink text-[#1F5AE0] justify-end mr-4 px-8 font-semibold text-xl" >
        <li className="px-8  hover:underline decoration-[#E01FBB] underline-offset-4  " ><a href="/">Home</a></li>
        <li className="px-8" ><a href="/about">About</a></li>
        <li className="px-8" ><a href="./Login.jsx" >Login</a></li>
    </ul>
    </nav>
   )
      
    
}
export default Navbar;