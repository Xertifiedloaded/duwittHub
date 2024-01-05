import React from 'react';

const LandingPageCourses = () => {
  return (
    <div className="w-full flex justify-center py-9">
      <div className=" w-[157px] h-[75px] flex items-center justify-center border rounded-[25px] bg-[#E7FFF7]">
        <div className="flex gap-4 bottom-4">
          <div className=" relative w-[36px] h-[40px] bg-[#00FEA8] rounded-l-md rounded-r-[3px] flex justify-center ">
            <div className="absolute w-[28px] h-[4px] bg-[#001c15] bottom-2" />
          </div>

          <p className="text-[14px] text-[#0D1111] font-500 font-poppins leading-[18px] ">
            Courses <br />
            1000+
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPageCourses;
