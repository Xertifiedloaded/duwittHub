/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { cryptoIntro } from '../../../assets/images';
import Ratings from './Ratings';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const AccessCoursePage = () => {
  const [rating, setRating] = useState(3.4);
  return (
    <div className="w-[90%] mt-[40px] 1500px:mt-[100px] 1500px:w-[90%] mx-auto">
      <h1 className="text-[14px] 400px:text-[16px] 800px:text-[20px] 1000px:text-[26px] 700px:w-[85%] mx-auto 1500px:text-[32px] 1500px:leading-[48px] font-[600] mb-3 ">
        Module 1: Introduction to Cryptocurrencies
      </h1>

      <div className="flex items-center gap-6">
        <div className=" relative w-full 700px:w-[85%] mx-auto 1500px:w-[1148px] rounded-[10px] border border-[#00000071] ">
          <div className="relative w-full">
            <img
              src={cryptoIntro}
              alt=""
              className="1500px:w-full 1500px:h-[632px] rounded-t-[10px] object-contain"
            />

            <p className="absolute text-center top-[45px] left-0 400px:left-[20px] 400px:top-[75px] 700px:top-[140px] 700px:left-[70px] 1000px:left-[165px] 1200px:left-[250px] 1500px:left-[250px] 1500px:mt-[100px] text-[28px] leading-[42px] 1500px:text-[40px] 1500px:leading-[60px] font-[600]">
              Introduction to Cryptocurrencies
            </p>
          </div>

          <div className="700px:hidden w-full px-8 h-[70px] border-b border-[#00000071] flex items-center justify-between ">
            <div className="flex items-center gap-2">
              <div className="w-[24px] h-[24px] flex items-center justify-center rounded-full border ">
                <FaAngleLeft size={16} className="cursor-pointer" />
              </div>

              <p className="text-[12px] leading-[18px] ">Prev</p>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-[12px] leading-[18px]">Next</p>

              <div className="w-[24px] h-[24px] flex items-center justify-center rounded-full border">
                <FaAngleRight size={16} className="cursor-pointer" />
              </div>
            </div>
          </div>

          <p className="text-center text-[16px] leading-6 1000px:text-[20px] 1500px:text-[24px] 1500px:leading-9 font-[600] mt-3 ">
            Rate this course
          </p>

          <p className="text-center text-[12px] leading-3 1000px:text-[14px] 1500px:text-[16px] 1500px:leading-6 ">
            Let us know what you think about this course ?
          </p>

          <div className="mt-3 pb-4 flex items-center justify-center border-b border-[#00000071]">
            <Ratings rating={rating} />
          </div>

          <div className="my-4 1500px:my-8 flex items-center justify-between w-[90%] mx-auto">
            <button className="button 1500px:text-[16px] 1500px:leading-6 font-[600] !w-[121px] !h-[36px] text-[10px] leading-[14px] 1500px:!w-[209px] 1500px:!h-[55px] !bg-[#D9D9D9] hover:!bg-[#d9d9d9d7]  ">
              Restart this section
            </button>
            <button className="button text-[10px] leading-3 1500px:text-[16px] 1500px:leading-6 font-[600] !w-[146px] !h-[36px] 1500px:!w-[310px] 1500px:!h-[55px] !bg-[#001C15] !text-[#00FEA8] hover:!bg-[#001c15e9]  ">
              I have completed these section
            </button>
          </div>

          <div className="hidden absolute 700px:top-[50%] 700px:transform 700px:translate-y-[-50%] 700px:left-[-70px] 700px:w-[32px] 700px:h-[32px] rounded-full border 700px:flex items-center justify-center ">
            <FaAngleLeft size={20} className="cursor-pointer" />
          </div>

          <div className="hidden absolute 700px:top-[50%] 700px:transform 700px:translate-y-[-50%] 700px:right-[-70px] 700px:w-[32px] 700px:h-[32px] rounded-full border 700px:flex items-center justify-center ">
            <FaAngleRight size={20} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessCoursePage;
