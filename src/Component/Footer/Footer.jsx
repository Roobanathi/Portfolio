import React from 'react'
// import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <div className=' w-screen h-24 flex items-center justify-center'>
        <div className=' flex items-center justify-between w-[70%] text-white'>
            <p>All Right Reserved Athi Rooban@2024</p>
            <div className=' flex items-center gap-6 text-white'>
              {/* <a href=""> */}
              <AiOutlineInstagram/>

              {/* </a> */}
            <FaGithub/>
            <TbWorld/>
            </div>


        </div>
    </div>
  )
}

export default Footer