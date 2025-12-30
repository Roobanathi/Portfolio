import React from "react";
import AboutBanner from "../../Assets/ab-img.png";
import { BsDownload } from "react-icons/bs";
import CV from "../../Assets/Athi_Rooban_Resume.pdf";

const About = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Athi_Rooban_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-[500px] w-full flex items-center justify-center py-10 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="h-[100%] w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
       
       <div className="w-full flex-shrink-0 md:w-auto flex items-center justify-center">
         <img className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto object-contain" src={AboutBanner} alt="About Banner" />
       </div>
      
        <div className="w-full md:w-[50%] flex-shrink-0 flex flex-col justify-evenly items-center md:items-start gap-4 md:gap-6" >
          <h1 className=" text-white font-bold text-2xl md:text-3xl text-center md:text-left">About Me</h1>
          <p className=" text-white font-semibold text-sm md:text-base text-center md:text-left w-full md:w-[90%]">
            Full-Stack Developer with 2.7+ years of experience in building scalable web applications using 
            Node.js, NestJS, and React.js. Strong expertise in designing and developing RESTful APIs, integrating 
            frontend and backend systems, and working with MongoDB and MySQL databases. Hands-on 
            experience in deploying applications on Vercel and Netlify, ensuring performance and reliability.
          </p>
          <div className="flex flex-col w-full md:w-[90%] gap-3">
          <div className=" w-full text-white items-center justify-center md:justify-start flex flex-wrap gap-2">
            <p className=" h-7 md:h-6 px-3 md:px-0 md:w-20 rounded-md flex items-center justify-center border border-green-500 text-xs md:text-sm">Node.js</p>
            <p className=" h-7 md:h-6 px-3 md:px-0 md:w-20 rounded-md flex items-center justify-center border border-green-500 text-xs md:text-sm">NestJS</p>
            <p className=" h-7 md:h-6 px-3 md:px-0 md:w-20 rounded-md flex items-center justify-center border border-green-500 text-xs md:text-sm">Express.js</p>
            <p className=" h-7 md:h-6 px-3 md:px-0 md:w-20 rounded-md flex items-center justify-center border border-green-500 text-xs md:text-sm">React.js</p>
          </div>
          <div className="w-full text-white items-center justify-center md:justify-start flex flex-wrap gap-2">
          <p className=" h-7 md:h-6 px-3 md:px-0 md:w-24 rounded-md flex items-center justify-center border border-green-500 text-xs md:text-sm">MongoDB</p>
            <p className=" h-7 md:h-6 px-3 md:px-0 md:w-16 rounded-md flex items-center justify-center border border-green-500 text-xs md:text-sm">MySQL</p>
            <p className=" h-7 md:h-6 px-3 md:px-0 md:w-20 rounded-md flex items-center justify-center border border-green-500 text-xs md:text-sm">REST APIs</p>
            <p className=" h-7 md:h-6 px-3 md:px-0 md:w-20 rounded-md flex items-center justify-center border border-green-500 text-xs md:text-sm">Vercel</p>
          </div>
          </div>
          <button 
            onClick={handleDownloadCV}
            className=" h-10 text-white w-full sm:w-40 rounded-lg flex items-center justify-center bg-[#0CBBA0] hover:bg-[#0aa88a] transition-colors cursor-pointer"
          >
            Download-CV   <BsDownload className=" ml-2 text-lg"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
