import React from "react";
import { BiBullseye } from "react-icons/bi";
import { FaCode } from "react-icons/fa6";
import { MdOutlineDataObject } from "react-icons/md";



const Whatido = () => {
  return (
    <div className="min-h-[400px] w-full py-10 md:py-20 px-4 sm:px-6 md:px-8">
      <h1 className=" text-white font-bold text-2xl md:text-3xl w-full flex items-center justify-center mb-6 md:mb-8">What I Do</h1>
      <div className="min-h-[90%] w-full flex items-center justify-center">
        <div className=" h-full w-full max-w-7xl mx-auto flex items-center justify-evenly">
         <div className=" w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-5">
         <div className=" min-h-[280px] md:h-[90%] w-full max-w-[360px] p-4 md:p-5 rounded border-2 border-[#202026] shadow-black shadow-2xl drop-shadow border-solid flex flex-col items-start gap-3 justify-center">
            <MdOutlineDataObject className=" text-purple-500 text-2xl md:text-[28px] font-extrabold"/>

            <h2 className=" text-slate-100 font-bold text-lg md:text-xl">Back-end Development</h2>
            <p className=" text-slate-300 text-sm md:text-base">
              Developing scalable backend applications using Node.js, NestJS, and Express.js. 
              Designing and implementing RESTful APIs with proper validation, authentication, 
              and error handling. Working with MongoDB and MySQL databases for efficient data management.
            </p>
          </div>
          <div className="min-h-[280px] md:h-[90%] w-full max-w-[360px] p-4 md:p-5 border-2 rounded border-[#202026] shadow-black shadow-2xl drop-shadow border-solid flex flex-col items-start gap-3 justify-center">
          <BiBullseye className=" text-orange-400 text-2xl md:text-[28px] font-extrabold"/>

            <h2 className="text-slate-100 font-bold text-lg md:text-xl">API Development</h2>
            <p className="text-slate-300 text-sm md:text-base">
              Building robust RESTful APIs with comprehensive testing using Postman. 
              Integrating frontend and backend systems seamlessly. Implementing CRUD operations 
              and business logic across full-stack applications with clean architecture principles.
            </p>
          </div>
          <div className="min-h-[280px] md:h-[90%] w-full max-w-[360px] p-4 md:p-5 rounded border-2 border-[#202026] shadow-black shadow-2xl drop-shadow border-solid flex flex-col items-start gap-3 justify-center">
          <FaCode className=" text-green-400 text-2xl md:text-[28px] font-extrabold"/>

            <h2 className="text-slate-100 font-bold text-lg md:text-xl">Front-end Development</h2>
            <p className="text-slate-300 text-sm md:text-base">
              Creating responsive and reusable frontend components using React.js, ensuring 
              smooth user experience. Building dynamic and user-friendly web interfaces. 
              Deploying applications on Vercel and Netlify with optimized performance.
            </p>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Whatido;
