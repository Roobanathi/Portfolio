import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Home from '../Component/Home/Home'
import Footer from '../Component/Footer/Footer'
import About from '../Component/About/About'
import Whatido from '../Component/About/Whatido'
import Skils from '../Component/Skils/Skils'

const Index = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <Whatido/>
        <Skils/>
        <Footer/>
    </div>
  )
}

export default Index