import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = ({ sections, scrollTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (sectionId) => {
    const section = sections.find(s => s.id === sectionId);
    if (section && section.ref.current) {
      section.ref.current.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className='flex items-center justify-center h-16 md:h-20 w-full fixed top-0 z-50 bg-[#100E17] bg-opacity-95 shadow-lg'>
        <div className=' flex items-center justify-between h-full w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
            <p className=' h-8 md:h-10 text-white font-medium text-base md:text-lg w-20 md:w-24 bg-[#0CBBA0] flex items-center justify-center rounded-lg cursor-pointer' onClick={() => handleClick('home')}>Rooban</p>
            
            {/* Desktop Menu */}
            <div className=' hidden md:flex items-center justify-evenly text-white gap-4 lg:gap-6'>
                <p className='cursor-pointer hover:text-[#0CBBA0] transition-colors text-sm lg:text-base' onClick={() => handleClick('home')}>Home</p>
                <p className='cursor-pointer hover:text-[#0CBBA0] transition-colors text-sm lg:text-base' onClick={() => handleClick('about')}>About</p>
                <p className='cursor-pointer hover:text-[#0CBBA0] transition-colors text-sm lg:text-base' onClick={() => handleClick('skills')}>Skills</p>
                <p className='cursor-pointer hover:text-[#0CBBA0] transition-colors text-sm lg:text-base' onClick={() => handleClick('experiences')}>Experiences</p>
                <p className='cursor-pointer hover:text-[#0CBBA0] transition-colors text-sm lg:text-base' onClick={() => handleClick('contact')}>Contact</p>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className='md:hidden text-white text-2xl'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <HiX /> : <HiMenu />}
            </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='absolute top-16 left-0 w-full bg-[#100E17] bg-opacity-98 shadow-lg md:hidden'>
            <div className='flex flex-col items-center py-4 gap-4 text-white'>
                <p className='cursor-pointer hover:text-[#0CBBA0] transition-colors text-base' onClick={() => handleClick('home')}>Home</p>
                <p className='cursor-pointer hover:text-[#0CBBA0] transition-colors text-base' onClick={() => handleClick('about')}>About</p>
                <p className='cursor-pointer hover:text-[#0CBBA0] transition-colors text-base' onClick={() => handleClick('skills')}>Skills</p>
                <p className='cursor-pointer hover:text-[#0CBBA0] transition-colors text-base' onClick={() => handleClick('experiences')}>Experiences</p>
                <p className='cursor-pointer hover:text-[#0CBBA0] transition-colors text-base' onClick={() => handleClick('contact')}>Contact</p>
            </div>
          </div>
        )}
    </div>
  )
}

export default Navbar