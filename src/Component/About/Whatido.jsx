import React from "react";
import { BiBullseye } from "react-icons/bi";
import { FaCode } from "react-icons/fa6";
import { MdOutlineDataObject } from "react-icons/md";



const Whatido = () => {
  return (
    <div className="h-[300px] w-full">
      <h1 className=" text-white font-bold text-3xl w-[95%] flex items-center justify-center ">What I Do</h1>
      <div className="h-[90%] w-full flex items-center justify-center">
        <div className=" h-full w-[90%] flex items-center  justify-evenly">
         <div className=" w-[90%] flex items-center justify-center gap-5">
         <div className=" h-[90%] w-[360px] p-5 rounded border-2 border-[#202026] shadow-black shadow-2xl drop-shadow border-solid flex flex-col items-start gap-3 justify-center">
            <MdOutlineDataObject className=" text-purple-500 text-[28px]  font-extrabold"/>

            <h2 className=" text-slate-100 font-bold  text-xl">Back-end Development</h2>
            <p className=" text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              architecto cum molestias vero aperiam. Doloremque voluptas vel ad
              porro amet deleniti error quisquam et? Vel!
            </p>
          </div>
          <div className="h-[90%] w-[360px] p-5  border-2 rounded border-[#202026] shadow-black shadow-2xl drop-shadow border-solid flex flex-col items-start gap-3 justify-center">
          <BiBullseye className=" text-orange-400 text-[28px]  font-extrabold"/>

            <h2 className="text-slate-100 font-bold  text-xl">Trainer</h2>
            <p className="text-slate-300 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              architecto cum molestias vero aperiam. Doloremque voluptas vel ad
              porro amet deleniti error quisquam et? Vel!
            </p>
          </div>
          <div className="h-[90%] w-[360px] p-5  rounded border-2 border-[#202026] shadow-black shadow-2xl drop-shadow border-solid flex flex-col items-start gap-3 justify-center">
          <FaCode className=" text-green-400 text-[28px]  font-extrabold"/>

            <h2 className="text-slate-100 font-bold  text-xl">Frount-end Development</h2>
            <p className="text-slate-300 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              architecto cum molestias vero aperiam. Doloremque voluptas vel ad
              porro amet deleniti error quisquam et? Vel!
            </p>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Whatido;
