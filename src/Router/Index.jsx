import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Home from '../Component/Home/Home'
import Footer from '../Component/Footer/Footer'
import About from '../Component/About/About'
import Whatido from '../Component/About/Whatido'
import Skils from '../Component/Skils/Skils'
import Experiences from '../Component/Experiences/Experiences'
import Contact from '../Component/Contact/Contact'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Index = () => {
  const scroll= useRef(null);
  useEffect(()=>{
    const el = scroll.current
    gsap.fromTo(el,{left:0},{left:200,duration:5, ScrollTrigger:{
      trigger:el
    }})
  },[])
  return (
    <div ref={scroll}>
        <Navbar/>
        <Home/>
        <About/>
        <Whatido/>
        <Skils/>
        <Experiences/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Index