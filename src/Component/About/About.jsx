import React from "react";
import AboutBanner from "../../Assets/ab-img.png";
import { BsDownload } from "react-icons/bs";
const About = () => {
  return (
    <div className=" h-[500px] w-screen flex items-center justify-center ml-20">
      <div className=" h-[100%] w-[100%] flex items-center justify-center gap-5">
       
       <img className=" w-[500px]" src={AboutBanner} alt="" />
      
        <div className=" w-[50%] flex flex-col  justify-evenly items-start h-[65%] " >
          <h1 className=" text-white font-bold text-3xl ml-10">About Me</h1>
          <p className=" text-white ml-10 font-semibold text-base w-[65%]">
            Hello, I’m a Rooban, web-developer . I have good
            experience in web site design & Backend Development. Also I
            am good at
          </p>
          <div className="flex flex-col w-[80%] ml-3">
          <div className=" w-[60%] text-white items-center justify-evenly flex">
            <p className=" h-6  w-14 rounded-md flex items-center justify-center border border-green-500 ">Html</p>
            <p className=" h-6  w-14 rounded-md flex items-center justify-center border border-green-500 ">Css</p>
            <p className=" h-6  w-14 rounded-md flex items-center justify-center border border-green-500 ">Js</p>
            <p className=" h-6  w-20 rounded-md flex items-center justify-center border border-green-500 ">Node Js</p>
            
          </div>
          <div className="w-[60%] text-white items-center mt-6 ml-4 justify-evenly flex">
          <p className=" h-6  w-20 rounded-md flex items-center justify-center border border-green-500 ">React Js </p>
            <p className=" h-6  w-16 rounded-md flex items-center justify-center border border-green-500 ">Git</p>
            <p className=" h-6  w-24 rounded-md flex items-center justify-center border border-green-500 ">Data Base</p>
            <p className=" h-6  w-20 rounded-md flex items-center justify-center border border-green-500 ">Netlify</p>
          </div>
          </div>
          <button className=" h-10 ml-10 text-white w-40 rounded-lg flex items-center justify-center bg-[#0CBBA0]">Download-CV   <BsDownload className=" ml-2 text-lg"/></button>
        </div>
      </div>
    </div>
  );
};

export default About;
