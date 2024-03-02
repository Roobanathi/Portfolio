import React from 'react'

const Skils = () => {
  return (
    <div className=' w-[100%] h-[500px] flex items-center justify-center'>
      <div className=' w-[90%] flex items-center justify-center'>
        <div className=' w-[50%] h-[100%] flex flex-col  gap-5 items-center justify-evenly'>
          <p className=' text-white font-bold text-3xl mb-3'>Technical Skills</p>
          <div className=' w-[60%] flex flex-col '>
           <div className='w-full'>
           <div className=' flex w-full items-center justify-between'>
              <p className=' text-slate-300 font-bold text-xl'>Html & Css</p>
              <p className=' text-slate-300 font-bold text-xl'>90%</p>
            </div>
            <div className=' w-full h-2 bg-slate-300 rounded-md relative'>
              <p className=' w-[90%] h-2 bg-[#0CBBA0] absolute rounded-md '></p>
            </div>
           </div>
         
          </div>
          <div className=' w-[60%] flex flex-col '>
           <div className='w-full'>
           <div className=' flex w-full items-center justify-between'>
              <p className=' text-slate-300 font-bold text-xl'>Java Script</p>
              <p className=' text-slate-300 font-bold text-xl'>85%</p>
            </div>
            <div className=' w-full h-2 bg-slate-300 rounded-md relative'>
              <p className=' w-[85%] h-2 bg-[#0CBBA0] absolute rounded-md '></p>
            </div>
           </div>
         
          </div>
          <div className=' w-[60%] flex flex-col '>
           <div className='w-full'>
           <div className=' flex w-full items-center justify-between'>
              <p className=' text-slate-300 font-bold text-xl'>Node js</p>
              <p className=' text-slate-300 font-bold text-xl'>90%</p>
            </div>
            <div className=' w-full h-2 bg-slate-300 rounded-md relative'>
              <p className=' w-[90%] h-2 bg-[#0CBBA0] absolute rounded-md '></p>
            </div>
           </div>
         
          </div>
          <div className=' w-[60%] flex flex-col '>
           <div className='w-full'>
           <div className=' flex w-full items-center justify-between'>
              <p className=' text-slate-300 font-bold text-xl'>React Js</p>
              <p className=' text-slate-300 font-bold text-xl'>80%</p>
            </div>
            <div className=' w-full h-2 bg-slate-300 rounded-md relative'>
              <p className=' w-[80%] h-2 bg-[#0CBBA0] absolute rounded-md '></p>
            </div>
           </div>
         
          </div>
          <div className=' w-[60%] flex flex-col '>
           <div className='w-full'>
           <div className=' flex w-full items-center justify-between'>
              <p className=' text-slate-300 font-bold text-xl'>Python</p>
              <p className=' text-slate-300 font-bold text-xl'>60%</p>
            </div>
            <div className=' w-full h-2 bg-slate-300 rounded-md relative'>
              <p className=' w-[60%] h-2 bg-[#0CBBA0] absolute rounded-md '></p>
            </div>
           </div>
         
          </div>
        </div>
        <div className=' w-[40%] flex flex-col mt-10 h-full gap-4 items-center justify-evenly' >
          <p className=' text-white font-bold text-3xl mb-3'>Professional Skills</p>
          <div className=' w-[60%] h-[100%] gap-8 grid grid-cols-2'>
          <div className=' w-[100%] h-[100%]  flex items-center flex-col gap-4 justify-center'>
            <div className='w-[90px] h-[90px] border-8 border-slate-300 relative rounded-full flex items-center justify-center'>
              <p className=' border-8 w-[90px] h-[90px] rounded-full border-[#0CBBA0] absolute'></p>
              
                <p className=' text-slate-300' >95%</p>
              
            </div>
            <p className=' text-white text-md'>Communication</p>

          </div>
          <div className=' w-[100%] h-[100%]  flex items-center flex-col gap-4 justify-center'>
            <div className='w-[90px] h-[90px] border-8 border-slate-300 relative rounded-full flex items-center justify-center'>
              <p className=' border-8 w-[90px] h-[90px] rounded-full border-[#0CBBA0] absolute'></p>
              
                <p className=' text-slate-300' >95%</p>
              
            </div>
            <p className=' text-white text-md '>Team Work</p>

          </div>
          <div className=' w-[100%] h-[100%]  flex items-center flex-col gap-4 justify-center'>
            <div className='w-[90px] h-[90px] border-8 border-slate-300 relative rounded-full flex items-center justify-center'>
              <p className=' border-8 w-[90px] h-[90px] rounded-full border-[#0CBBA0] absolute'></p>
              
                <p className=' text-slate-300' >95%</p>
              
            </div>
            <p className=' text-white text-md w-full '>Project Management</p>

          </div>
          <div className=' w-[100%] h-[100%]  flex items-center flex-col gap-4 justify-center'>
            <div className='w-[90px] h-[90px] border-8 border-slate-300 relative rounded-full flex items-center justify-center'>
              <p className=' border-8 w-[90px] h-[90px] rounded-full border-[#0CBBA0] absolute'></p>
              
                <p className=' text-slate-300' >95%</p>
              
            </div>
            <p className=' text-white text-md '>Creativity</p>

          </div>
         
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skils