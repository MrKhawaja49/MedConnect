import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* ---------------Left Side------------- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw]  md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight ">
          Your Smart Way to <br /> Schedule Doctor Visits
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img className="w-28" src={assets.group_profiles} alt="" />
          <p>
            Explore verified doctors and book your <br className="hidden sm:block" /> appointment in just a
            few clicks.
          </p>
        </div>
        <a href="#speciality" className="flex items-start gap-2 bg-white px-8 py-4 rounded-full text-cyan-900 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 hover:text-white hover:bg-cyan-900 ">
          Book an Appointment <img className="w-3" text- src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* ----------------Right Side----------- */}
      <div className="md:w-1/2 relative">
        {/* <img className="w-full absolute bottom-0 h-auto rounded-lg" src={assets.header_img} alt="" /> */}
        <img className="w-full h-auto object-contain" src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
