import React from "react";

const Experiences = () => {
  return (
    <div className="w-full min-h-[100%] flex items-center justify-center py-10 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-7xl mx-auto h-[100%] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
        {/* Education */}
        <div className=" w-full lg:w-[50%] flex flex-col items-center justify-evenly">
          <p className="text-white text-xl md:text-2xl mb-5 font-semibold">Education</p>

          <div className=" flex flex-col items-center gap-6 md:gap-10 justify-evenly w-full" >

            <div className="w-full max-w-[500px] lg:max-w-none lg:w-[90%] min-h-[200px] bg-[#1F1E24] p-4 md:p-5 justify-evenly rounded-md shadow-2xl transition-shadow shadow-black flex flex-col items-start">
              <p className=" text-slate-200 font-semibold text-lg md:text-xl">Bachelor's Degree from <span className="text-[#0CBBA0]">Bharathiar University</span></p>
              <p className=" text-slate-200 text-base md:text-lg">2019 - 2022</p>
              <p className=" text-slate-200 text-sm md:text-base">
                Completed Bachelor's Degree with focus on computer science and software development fundamentals.
              </p>
            </div>
          </div>
        </div>
        {/* Work Experience*/}
        <div className=" w-full lg:w-[50%] flex flex-col items-center justify-evenly">
          <p className="text-white text-xl md:text-2xl mb-5 font-semibold">Work Experience</p>

          <div className=" flex flex-col items-center gap-6 md:gap-10 justify-evenly w-full" >

            <div className="w-full max-w-[500px] lg:max-w-none lg:w-[90%] min-h-[300px] bg-[#1F1E24] p-4 md:p-5 justify-evenly rounded-md shadow-2xl transition-shadow shadow-black flex flex-col items-start">
              <p className=" text-slate-200 font-semibold text-base md:text-xl">Full-stack Developer at <span className="text-[#0CBBA0]">Creedom (Formally known as - Casttree)</span></p>
              <p className=" text-slate-200 text-sm md:text-lg">Mar 2025 – Present</p>
              <p className=" text-slate-200 text-xs md:text-sm mb-2">Company Type: Product Based | Project: Creedom (Mobile Application)</p>
              <ul className=" text-slate-200 text-xs md:text-sm list-disc list-inside space-y-1">
                <li>Developed and maintained scalable backend applications using Node.js and NestJS</li>
                <li>Built responsive and reusable frontend components using React.js</li>
                <li>Designed and implemented RESTful APIs with proper validation and authentication</li>
                <li>Worked with MongoDB and MySQL for efficient data management</li>
                <li>Deployed applications on Vercel and Netlify</li>
              </ul>
            </div>
            <div className="w-full max-w-[500px] lg:max-w-none lg:w-[90%] min-h-[300px] bg-[#1F1E24] p-4 md:p-5 justify-evenly rounded-md shadow-2xl transition-shadow shadow-black flex flex-col items-start">
              <p className=" text-slate-200 font-semibold text-base md:text-xl">Junior Software Engineer at <span className="text-[#0CBBA0]">Vimix Technology Private Ltd</span></p>
              <p className=" text-slate-200 text-sm md:text-lg">Mar 2022 – Mar 2025</p>
              <p className=" text-slate-200 text-xs md:text-sm mb-2">Company Type: Product & Service Based</p>
              <ul className=" text-slate-200 text-xs md:text-sm list-disc list-inside space-y-1">
                <li>Developed RESTful backend APIs using Node.js and Express.js</li>
                <li>Built responsive web interfaces using React.js</li>
                <li>Designed and managed relational data using MySQL</li>
                <li>Worked on projects: CodePurple (Product Website) and HireIn5 (Service-Based Project)</li>
                <li>Performed API testing, debugging, and issue fixing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
