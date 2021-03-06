import React, { useEffect, useState } from "react";
import Link from "next/link";
import logo from "../public/logo.png";

const Header = () => {

  const [user, setUSer] = useState({})
useEffect(() => {
 
  if (typeof window !== 'undefined') {
    localStorage.setItem('user',JSON.stringify({username: "user"}))

  }
  let a = localStorage.getItem('user')
  setUSer(JSON.parse(a))

}, []);

  return (
 
    <header className=" -my-10  shadow-sm bg-teal-400 relative" >
      <div className=" flex items-center justify-between" style={{marginRight: "100px", marginLeft: "100px"}}>
      <Link href="/" passHref>
          <img src={logo.src} alt="Quick'Up" className="w-44" />
              
      </Link>


          <div className="w-full max-w-xl relative flex"> 
              <span className="absolute left-4 top-3 text-lg text-gray-400">
              <ion-icon name="search-outline"></ion-icon>

              
              </span> 

              <input type="text" className="w-full border border-orange-500 border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none" placeholder="search" /> 

              <button className="bg-red-500 border-red-500 text-white px-8 rounded-r-md hover:bg-red-400 hover:text-white transition" >Search</button>
          </div>


          <div className="flex items-center space-x-4">
          <Link href="/" passHref>
            <a  className="text-center text-gray-300 hover:text-red-500 transition relative">
              <div className="text-4xl">
              <ion-icon name="list-outline"></ion-icon>
              </div>
              <div className="text-xs leading-3">
                Events
              </div>

              {/* <span className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-red-600 text-white text-xs"> 8 </span> */}
            </a>
            </Link>

          <Link href="/setting" passHref>
            <a className="text-center text-gray-300 hover:text-red-500 transition relative">
              <div className="text-4xl">
              <ion-icon name="settings-outline"></ion-icon>
              </div>
              <div className="text-xs leading-3">
               Setting
              </div>

              {/* <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-red-600 text-white text-xs"> 8 </span> */}
            </a>
          </Link>

          <Link href="/dashboard" passHref>
            <a className="text-center text-gray-300 hover:text-red-500 transition relative">
              <div className="text-4xl">
              <ion-icon name="grid-outline"></ion-icon>
              </div>
              <div className="text-xs leading-3">
               Dashboard
              </div>

              {/* <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-red-600 text-white text-xs"> 8 </span> */}
            </a>
          </Link>


          <Link href="/auth" passHref>
            <a className="text-center text-gray-300 hover:text-red-500 transition relative">
              <div className="text-4xl">
              <ion-icon name="person-circle-outline"></ion-icon>
              </div>
           
           {/* {user != {}?
              <div className="text-xs leading-3">
                {JSON.parse(localStorage.getItem('user')).username}
              </div>
          : 
          <>
          <div className="text-xs leading-3">
            User
          </div>
          </>
          } */}

<div className="text-xs leading-3">
  User
  </div>

            </a>
            </Link>
          </div>
      </div>

    </header>
    
  );
};

export default Header;
