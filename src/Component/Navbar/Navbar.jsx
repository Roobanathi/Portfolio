import React from 'react'
// import About from '../About/About'
const Navbar = () => {
  return (
    <div className='flex items-center justify-center h-20 w-screen'>
        <div className=' flex items-center justify-evenly h-full w-full '>
            <p className=' h-10  text-white  font-medium text-lg w-24 bg-[#0CBBA0] flex items-center justify-center rounded-lg'>Rooban</p>
            <div className=' w-2/4 flex items-center justify-evenly text-white'>
                <p>Home</p>
                <p>About</p>
                <p>Skills</p>
                <p>Experiences</p>
                <p>Portfoilo</p>
                <p>Contact</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar