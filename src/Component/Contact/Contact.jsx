import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

const Contact = () => {
  return (
    <div className="min-h-[100%] w-full mt-10 py-10 md:py-20 px-4 sm:px-6 md:px-8">
      <h1 className=" text-white font-bold text-2xl md:text-3xl w-full mb-8 md:mb-5 flex flex-col items-center justify-center ">
        Contact
      </h1>
      <div className="min-h-[90%] w-full flex items-center justify-center px-4 sm:px-6 md:px-8">
        <div className=" h-full w-full max-w-7xl mx-auto flex items-center justify-center">
          <div className=" w-full flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5">
            <div className=" min-h-[250px] md:h-[300px] w-full max-w-[360px] p-4 md:p-5 rounded border-2 border-[#202026] shadow-black shadow-2xl drop-shadow border-solid flex flex-col items-center gap-3 justify-center">
              <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full border-2 border-green-400 flex items-center justify-center">
                <FaLocationArrow className=" text-purple-500 text-2xl md:text-[28px] font-extrabold" />
              </div>
              <h2 className=" text-slate-100 font-bold text-lg md:text-xl">Address</h2>
              <p className=" text-slate-300 text-sm md:text-base">Bengaluru</p>
              <p className=" text-slate-300 text-sm md:text-base">India</p>
            </div>
            <div className="min-h-[250px] md:h-[300px] w-full max-w-[360px] p-4 md:p-5 border-2 rounded border-[#202026] shadow-black shadow-2xl drop-shadow border-solid flex flex-col items-center gap-3 justify-center">
              <div className=" w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full border-2 border-green-400 flex items-center justify-center">
                <MdOutlineMail className=" text-orange-400 text-2xl md:text-[28px] font-extrabold" />
              </div>
              <h2 className="text-slate-100 font-bold text-lg md:text-xl">Email</h2>
              <p className="text-slate-300 text-sm md:text-base break-all">roobanathi7@gmail.com</p>
            </div>
            <div className="min-h-[250px] md:h-[300px] w-full max-w-[360px] p-4 md:p-5 rounded border-2 border-[#202026] shadow-black shadow-2xl drop-shadow border-solid flex flex-col items-center gap-3 justify-center">
              <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full border-2 border-green-400 flex items-center justify-center">
                <MdLocalPhone className=" text-green-400 text-2xl md:text-[28px] font-extrabold" />
              </div>
              <h2 className="text-slate-100 font-bold text-lg md:text-xl">Phone</h2>
              <p className="text-slate-300 text-sm md:text-base">+91 9344494855</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex items-center justify-center mt-8 md:mt-10 px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-6xl mx-auto rounded overflow-hidden">
          <iframe
            title="my map"
            className="rounded w-full max-w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7410810348147!2d77.61368047465!3d12.924355787386672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d68a8c7a07%3A0xae2c3f4200e8357b!2sALONZO%20PG%20for%20GENTS!5e0!3m2!1sen!2sin!4v1767089727116!5m2!1sen!2sin" 
            height="300"
            width="100%"
            style={{border:0, minHeight: '300px', maxWidth: '100%'}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
