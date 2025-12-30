import React from 'react'
// import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <div className=' w-full min-h-24 flex items-center justify-center py-4 px-4 sm:px-6 md:px-8'>
        <div className=' flex flex-col sm:flex-row items-center justify-center sm:justify-between w-full max-w-7xl mx-auto gap-3 sm:gap-0 text-white'>
            <p className='text-xs sm:text-sm md:text-base text-center sm:text-left'>All Right Reserved Athi Rooban@2024</p>
            <div className=' flex items-center gap-4 md:gap-6 text-white text-lg md:text-xl'>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <AiOutlineInstagram className='cursor-pointer hover:text-[#0CBBA0] transition-colors'/>
              </a>
              <a href="https://github.com/Roobanathi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className='cursor-pointer hover:text-[#0CBBA0] transition-colors'/>
              </a>
              <a href="https://rooban.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Website">
                <TbWorld className='cursor-pointer hover:text-[#0CBBA0] transition-colors'/>
              </a>
            </div>
        </div>
    </div>
  )
}

export default Footer