import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Profile from '../../Assets/WhatsApp Image 2023-10-05 at 12.29.03_0513a0eb.jpg'
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const Home = () => {
  return (
    <div className=" min-h-[80vh] w-full flex items-center justify-center pt-20 md:pt-24 px-4 sm:px-6 md:px-8">
      <div className=" h-[100%] w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-8 md:gap-4">
        <div className=" flex gap-4 md:gap-6 justify-center md:justify-start flex-col items-center md:items-start">
          <p className=" bg-[#0CBBA0] text-white font-bold text-base md:text-lg h-9 md:h-10 w-24 md:w-28 flex items-center justify-center rounded-lg">Hello I'm</p>
          <div className=" flex flex-col gap-2 items-center md:items-start">
            <h1 className=" font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center md:text-left">Athi Rooban</h1>
            <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl text-white text-center md:text-left">Full-Stack Developer</h3>
          </div>
          <div className=" flex flex-col gap-2 items-center md:items-start">
            <p className=" flex items-center text-white gap-2 md:gap-4 text-xs sm:text-sm font-medium"> <CiMail className="text-lg"/> <span className="break-all">roobanathi7@gmail.com</span></p>
            <p className="flex items-center text-white gap-2 md:gap-4 text-xs sm:text-sm font-medium"><IoCallOutline className="text-lg"/> +91 9344494855</p>
            <p className="flex items-center text-white gap-2 md:gap-4 text-xs sm:text-sm font-medium"><CiLocationOn className="text-lg"/> Bengaluru</p>
          </div>
          <div className=" flex items-center text-lg md:text-xl gap-4 md:gap-6 text-white">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <TiSocialFacebook className="cursor-pointer hover:text-[#0CBBA0] transition-colors" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <AiOutlineInstagram className="cursor-pointer hover:text-[#0CBBA0] transition-colors" />
            </a>
            <a href="https://github.com/Roobanathi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="cursor-pointer hover:text-[#0CBBA0] transition-colors" />
            </a>
            <a href="https://rooban.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Website">
              <TbWorld className="cursor-pointer hover:text-[#0CBBA0] transition-colors" />
            </a>
          </div>
        </div>
        <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-black rounded-full flex items-center justify-center shrink-0">
          <div className=" w-[220px] h-[220px] sm:w-[270px] sm:h-[270px] md:w-[350px] md:h-[350px] bg-[#100E17] rounded-full flex items-center justify-center">
            <img src={Profile} alt="Profile" className=" w-[85%] h-[90%] object-cover rounded-full max-w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
