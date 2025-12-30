import React from 'react'

const CircularProgress = ({ percentage }) => {
  const size = 70;
  const mdSize = 90;
  const radius = 27; // radius for small screen (70/2 - 8)
  const mdRadius = 35; // radius for medium screen (90/2 - 10)
  const circumference = 2 * Math.PI * radius;
  const mdCircumference = 2 * Math.PI * mdRadius;
  const offset = circumference - (percentage / 100) * circumference;
  const mdOffset = mdCircumference - (percentage / 100) * mdCircumference;

  return (
    <div className="relative w-[70px] h-[70px] md:w-[90px] md:h-[90px] flex items-center justify-center">
      {/* Small screen SVG */}
      <svg 
        className="transform -rotate-90 w-full h-full absolute md:hidden"
        viewBox="0 0 70 70"
      >
        <circle
          cx="35"
          cy="35"
          r="27"
          stroke="#475569"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="35"
          cy="35"
          r="27"
          stroke="#0CBBA0"
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
        />
      </svg>
      {/* Medium+ screen SVG */}
      <svg 
        className="transform -rotate-90 w-full h-full absolute hidden md:block"
        viewBox="0 0 90 90"
      >
        <circle
          cx="45"
          cy="45"
          r="35"
          stroke="#475569"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="45"
          cy="45"
          r="35"
          stroke="#0CBBA0"
          strokeWidth="10"
          fill="none"
          strokeDasharray={mdCircumference}
          strokeDashoffset={mdOffset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <p className="text-slate-300 text-sm md:text-base font-medium">{percentage}%</p>
      </div>
    </div>
  );
};

const Skils = () => {
  return (
    <div className=' w-full min-h-[500px] flex items-center justify-center py-10 md:py-20 px-4 sm:px-6 md:px-8'>
      <div className=' w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4'>
        <div className=' w-full lg:w-[50%] h-[100%] flex flex-col gap-4 md:gap-5 items-center justify-evenly'>
          <p className=' text-white font-bold text-2xl md:text-3xl mb-3'>Technical Skills</p>
          <div className=' w-full max-w-[500px] lg:max-w-none lg:w-[80%] flex flex-col gap-4 md:gap-5'>
           <div className='w-full'>
           <div className=' flex w-full items-center justify-between'>
              <p className=' text-slate-300 font-bold text-base md:text-xl'>Node.js</p>
              <p className=' text-slate-300 font-bold text-base md:text-xl'>90%</p>
            </div>
            <div className=' w-full h-2 bg-slate-300 rounded-md relative'>
              <p className=' w-[90%] h-2 bg-[#0CBBA0] absolute rounded-md '></p>
            </div>
           </div>
         
          </div>
          <div className=' w-full max-w-[500px] lg:max-w-none lg:w-[80%] flex flex-col gap-4 md:gap-5'>
           <div className='w-full'>
           <div className=' flex w-full items-center justify-between'>
              <p className=' text-slate-300 font-bold text-base md:text-xl'>NestJS</p>
              <p className=' text-slate-300 font-bold text-base md:text-xl'>85%</p>
            </div>
            <div className=' w-full h-2 bg-slate-300 rounded-md relative'>
              <p className=' w-[85%] h-2 bg-[#0CBBA0] absolute rounded-md '></p>
            </div>
           </div>
         
          </div>
          <div className=' w-full max-w-[500px] lg:max-w-none lg:w-[80%] flex flex-col gap-4 md:gap-5'>
           <div className='w-full'>
           <div className=' flex w-full items-center justify-between'>
              <p className=' text-slate-300 font-bold text-base md:text-xl'>Express.js</p>
              <p className=' text-slate-300 font-bold text-base md:text-xl'>88%</p>
            </div>
            <div className=' w-full h-2 bg-slate-300 rounded-md relative'>
              <p className=' w-[88%] h-2 bg-[#0CBBA0] absolute rounded-md '></p>
            </div>
           </div>
         
          </div>
          <div className=' w-full max-w-[500px] lg:max-w-none lg:w-[80%] flex flex-col gap-4 md:gap-5'>
           <div className='w-full'>
           <div className=' flex w-full items-center justify-between'>
              <p className=' text-slate-300 font-bold text-base md:text-xl'>React.js</p>
              <p className=' text-slate-300 font-bold text-base md:text-xl'>85%</p>
            </div>
            <div className=' w-full h-2 bg-slate-300 rounded-md relative'>
              <p className=' w-[85%] h-2 bg-[#0CBBA0] absolute rounded-md '></p>
            </div>
           </div>
         
          </div>
          <div className=' w-full max-w-[500px] lg:max-w-none lg:w-[80%] flex flex-col gap-4 md:gap-5'>
           <div className='w-full'>
           <div className=' flex w-full items-center justify-between'>
              <p className=' text-slate-300 font-bold text-sm md:text-xl'>MongoDB & MySQL</p>
              <p className=' text-slate-300 font-bold text-base md:text-xl'>82%</p>
            </div>
            <div className=' w-full h-2 bg-slate-300 rounded-md relative'>
              <p className=' w-[82%] h-2 bg-[#0CBBA0] absolute rounded-md '></p>
            </div>
           </div>
         
          </div>
        </div>
        <div className=' w-full lg:w-[50%] flex flex-col mt-6 lg:mt-10 h-full gap-4 items-center justify-evenly' >
          <p className=' text-white font-bold text-2xl md:text-3xl mb-3'>Professional Skills</p>
          <div className=' w-full max-w-[400px] lg:max-w-none lg:w-[70%] h-[100%] gap-6 md:gap-8 grid grid-cols-2'>
          <div className=' w-full h-full flex items-center flex-col gap-3 md:gap-4 justify-center'>
            <CircularProgress percentage={90} />
            <p className=' text-white text-sm md:text-md text-center'>Communication</p>
          </div>
          <div className=' w-full h-full flex items-center flex-col gap-3 md:gap-4 justify-center'>
            <CircularProgress percentage={85} />
            <p className=' text-white text-sm md:text-md text-center'>Team Work</p>
          </div>
          <div className=' w-full h-full flex items-center flex-col gap-3 md:gap-4 justify-center'>
            <CircularProgress percentage={90} />
            <p className=' text-white text-sm md:text-md text-center'>Project Management</p>
          </div>
          <div className=' w-full h-full flex items-center flex-col gap-3 md:gap-4 justify-center'>
            <CircularProgress percentage={90} />
            <p className=' text-white text-sm md:text-md text-center'>Creativity</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skils