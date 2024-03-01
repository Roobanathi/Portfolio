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
    <div className=" h-[80vh] w-screen flex items-center justify-center">
      <div className=" h-[100%] w-full flex items-center justify-evenly">
        <div className=" flex   gap-6 justify-evenly flex-col">
          <p className=" bg-[#0CBBA0] text-white font-bold text-lg h-10 w-28 flex items-center justify-center rounded-lg">Hello I'm</p>
          <div className=" flex flex-col gap-2">
            <h1 className=" font-bold text-6xl text-white">Athi Rooban</h1>
            <h3 className="font-bold text-4xl text-white">Full-Stack Developer</h3>
          </div>
          <div className=" flex flex-col gap-2">
            <p className=" flex items-center text-white gap-4 text-sm font-medium"> <CiMail/> roobanathi7@gmail.com</p>
            <p className="flex items-center text-white gap-4 text-sm font-medium"><IoCallOutline/> +91 9344494855</p>
            <p className="flex items-center text-white gap-4 text-sm font-medium"><CiLocationOn/> 139/I P.K.N Road Sivakasi</p>
          </div>
          <div className=" flex items-center text-xl gap-6 text-white">
            <TiSocialFacebook />
            <AiOutlineInstagram />
            <FaGithub />
            <TbWorld />
          </div>
        </div>
        <div className="w-[400px] h-[400px] bg-black rounded-full flex items-center justify-center">
          <div className=" w-[350px] h-[350px] bg-[#100E17] rounded-full flex items-center justify-center">
            <img src={Profile} alt="" className=" w-[85%]  h-[90%] object-cover rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
