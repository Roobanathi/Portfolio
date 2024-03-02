import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

const Contact = () => {
  return (
    <div className="h-[100%] w-full mt-10">
      <h1 className=" text-white font-bold text-3xl w-[95%] mb-5 flex flex-col items-center justify-center ">
        Contact
      </h1>
      <div className="h-[90%] w-full flex items-center justify-center">
        <div className=" h-full w-[90%] flex items-center  justify-evenly">
          <div className=" w-[90%] flex items-center justify-center gap-5">
            <div className=" h-[300px] w-[360px] p-5 rounded border-2 border-[#202026] shadow-black shadow-2xl drop-shadow border-solid flex flex-col items-center gap-3 justify-center">
              <div className="w-[100px] h-[100px] rounded-full border-2 border-green-400 flex items-center justify-center">
                <FaLocationArrow className=" text-purple-500 text-[28px]  font-extrabold" />
              </div>

              <h2 className=" text-slate-100 font-bold  text-xl">Address</h2>
              <p className=" text-slate-300">130/I, P.K.N Road</p>
              <p className=" text-slate-300">Sivakasi-626123 </p>
            </div>
            <div className="h-[300px] w-[360px] p-5  border-2 rounded border-[#202026] shadow-black shadow-2xl drop-shadow border-solid flex flex-col items-center gap-3 justify-center">
              <div className=" w-[100px] h-[100px] rounded-full border-2 border-green-400 flex items-center justify-center">
                <MdOutlineMail className=" text-orange-400 text-[28px]  font-extrabold" />
              </div>

              <h2 className="text-slate-100 font-bold  text-xl">Email</h2>
              <p className="text-slate-300 ">- roobanathi7@gmail.com</p>
              <p className="text-slate-300 ">- athirooban962002@gmail.com</p>
            </div>
            <div className="h-[300px] w-[360px] p-5  rounded border-2 border-[#202026] shadow-black shadow-2xl drop-shadow border-solid flex flex-col items-center gap-3 justify-center">
              <div className="w-[100px] h-[100px] rounded-full border-2 border-green-400 flex items-center justify-center">
                <MdLocalPhone className=" text-green-400 text-[28px]  font-extrabold" />
              </div>
              <h2 className="text-slate-100 font-bold  text-xl">Phone </h2>
              <p className="text-slate-300 ">+91 9344494855</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full h-full flex items-center justify-center mt-10 rounded">
        <iframe
        title="my map"
        className="rounded"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62969.996108290565!2d77.75142304741958!3d9.454264267156187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cee43d812d0d%3A0x8ce12e9dcdaa2a2c!2sSivakasi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709363862679!5m2!1sen!2sin"
          width="1120"
          height="450"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
