import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const { state } = useContext(UserContext);

  const RenderNavbar = () => {
    if (state) {
      return (
        <div className="w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg">
          <div className="px-2 flex justify-between items-center w-full h-full">
            <div className="flex items-center">
              <ul className="hidden md:flex cursor-pointer text-md font-semibold">
                <li className="text-3xl font-bold mr-4 sm:text-4xl cursor-pointer">
                  <NavLink className="nav-link" to="/hero">
                  Clini  <span className="text-indigo-700">Call.</span>  
                  </NavLink>
                </li>
                <li className="p-4">
                  <NavLink className="nav-link" to="/hero">
                    Home
                  </NavLink>
                </li>
                <li className="p-4">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="p-4">
                  <NavLink className="nav-link" to="/dashboard">
                    Dashboard
                  </NavLink>
                </li>
                <li className="p-4">
                  <NavLink className="nav-link" to="/doctors">
                    Doctor
                  </NavLink>
                </li>
                {/* <li className="p-4">
                  <NavLink className="nav-link" to="/login">
                    Blood
                  </NavLink>
                </li> */}
              </ul>
            </div>
            <div className="hidden md:flex pr-4">
              <button className="border-none bg-transparent text-black mr-4 ">
                <NavLink className="nav-link font-semibold" to="/signout">
                  Logout
                </NavLink>
              </button>
            </div>
            <div className="md:hidden mr-4" onClick={handleClick}>
              {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
            </div>
          </div>

          <ul className={!nav ? "hidden" : "absolute bg-white w-full px-8"}>
            <li className="border-b-2 border-zinc-300 w-full">
              <NavLink className="nav-link" to="/hero">
                Home
              </NavLink>
            </li>
            <li className="border-b-2 border-zinc-300 w-full">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="border-b-2 border-zinc-300 w-full">
              <NavLink className="nav-link" to="/dashboard">
                Dashboard
              </NavLink>
            </li>
            <li className="border-b-2 border-zinc-300 w-full">
              <NavLink className="nav-link" to="/doctors">
                Doctor
              </NavLink>
            </li>
            {/* <li className="border-b-2 border-zinc-300 w-full">
              <NavLink className="nav-link" to="/login">
                Blood
              </NavLink>
            </li> */}
            <div className="flex flex-col my-4">
              <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
                <NavLink className="nav-link font-semibold" to="/signout">
                  Logout
                </NavLink>
              </button>
            </div>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg">
          <div className="px-2 flex justify-between items-center w-full h-full">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold mr-4 sm:text-4xl">
                <NavLink className="nav-link" to="/hero">
                  Clini<span className="text-indigo-700">Call.</span>
                </NavLink>
              </h1>
              <ul className="hidden md:flex cursor-pointer text-md font-semibold">
                <li className="p-4">
                  <NavLink className="nav-link" to="/hero">
                    Home
                  </NavLink>
                </li>
                <li className="p-4">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="p-4">
                  <NavLink className="nav-link" to="/dashboard">
                    Dashboard
                  </NavLink>
                </li>
                <li className="p-4">
                  <NavLink className="nav-link" to="/doctors">
                    Doctor
                  </NavLink>
                </li>
                {/* <li className="p-4">
                  <NavLink className="nav-link" to="/login">
                    Blood
                  </NavLink>
                </li> */}
              </ul>
            </div>
            <div className="hidden md:flex pr-4">
              <button className="py-2 px-4 w-20 my-2 bg-indigo-700 text-white rounded-md">
                <NavLink className="nav-link font-semibold" to="/login">
                  Login
                </NavLink>
              </button>
              <button className="px-4 py-3">
                <NavLink className="nav-link font-semibold" to="/signup">
                  Signup
                </NavLink>
              </button>
            </div>
            <div className="md:hidden mr-4" onClick={handleClick}>
              {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
            </div>
          </div>

          <ul className={!nav ? "hidden" : "absolute bg-white w-full px-8"}>
            <li className="border-b-2 border-zinc-300 w-full">
              <NavLink className="nav-link" to="/hero">
                Home
              </NavLink>
            </li>
            <li className="border-b-2 border-zinc-300 w-full">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="border-b-2 border-zinc-300 w-full">
              <NavLink className="nav-link" to="/dashboard">
                Dashboard
              </NavLink>
            </li>
            <li className="border-b-2 border-zinc-300 w-full">
              <NavLink className="nav-link" to="/doctors">
                Doctor
              </NavLink>
            </li>
            {/* <li className="border-b-2 border-zinc-300 w-full">
              <NavLink className="nav-link" to="/login">
                Blood
              </NavLink>
            </li> */}
            <div className="flex flex-col my-4">
              <button className="py-3 px-6 sm:w-[20%] my-4 bg-indigo-700 text-white rounded-md">
                <NavLink className="nav-link font-semibold" to="/login">
                  Login
                </NavLink>
              </button>
              <button className="px-8 py-3">
                <NavLink className="nav-link font-semibold" to="/signup">
                  Sign Up
                </NavLink>
              </button>
            </div>
          </ul>
        </div>
      );
    }
  };

  return (
    <div>
      <RenderNavbar />
    </div>
  );
};

export default Navbar;
