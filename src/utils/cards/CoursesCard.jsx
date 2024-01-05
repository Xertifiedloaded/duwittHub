/* eslint-disable react/prop-types */
import { clock } from '../../assets/icons';

const CoursesCard = ({image, courseTitle, time, }) => {
  return (
    <div
      className="w-[293px] 400px:w-[330px] 400px:h-[380px] 1000px:w-[330px] h-[383px] 1500px:w-[375px] 1500px:h-[428px] rounded-[10px] shadow cursor-pointer "
      style={{ boxShadow: '0px 4px 4px 0px #0000001A' }}
    >
      <img
        src={image}
        alt=""
        className="w-full h-[214px] 1500px:h-[239.61px] rounded-t-[10px] object-cover "
      />

      <div className="w-[90%] mx-auto">
        <p className="pt-4 text-[18px] leading-[24.51px] text-[#001c15] font-[700] ">
          {courseTitle}
        </p>

        <div className="mt-8 flex gap-[2px] items-center">
          <div className="w-[18px] h-[18px] border border-[#111111] rounded-full flex items-center justify-center ">
            <img src={clock} alt="" />
          </div>

          <div className="flex items-center gap-6">
            <p className="1500px:text-[12px] 1500px:leading-[16.34px] font-400 ">
              {time} read
            </p>

            <div className="w-[64px] h-[18px] bg-[#09FF9E] rounded-[3px] flex items-center justify-center ">
              <p className="text-[9px] 1500px:text-[10px] leading-[10.89px] text-[#001C15] ">
                Free
              </p>
            </div>
          </div>
        </div>
        <p className="mt-[50px] text-[12px] leading-[16.34px] text-[#009A49] font-[600] underline underline-offset-8 ">
          View Post
        </p>
      </div>
    </div>
  );
};

export default CoursesCard;
