import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-white w-full">
      <Navbar />
      <div
        name="home"
        className="w-full h-screen bg-white flex flex-col justify-between"
      >
        <div className="grid md:grid-cols-2 max-w-[1240px]  m-auto">
          <div className="flex flex-col justify-center mt-20 md:items-start w-full px-2 ">
            <p className="md:text-4xl text-3xl mb-6 ">Donate<span className="text-indigo-700 font-semibold"> Blood.</span><span className="text-indigo-700 font-semibold"> Save</span>  a Life</p>
            <p className="md:text-4xl text-3xl mb-6 ">Schedule <span className="text-indigo-700 font-semibold"> Doctor </span>Appointment  </p>
            <p className="md:text-4xl text-3xl mb-6  "><span>All</span> at <span className="text-indigo-700 font-semibold"> One </span>place  </p>
            
            {/* <p className='text-2xl'>This is our Tech brand.</p> */}
            <button className="md:py-3 md:mt-10 px-2 my-12 text-lg py-2 bg-indigo-700 rounded-md text-white sm:w-[60%] w-[50%] mx-auto md:mx-2 md:my-12">
               <NavLink className='nav-link' to='/login' > Looking for doctor</NavLink>
            </button>
          </div>
          <div>
            <img
              className="w-full "
              src="https://res.cloudinary.com/dnqipwdsl/image/upload/v1674746379/cyber-bg_ce0q1c.png"
              alt="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
