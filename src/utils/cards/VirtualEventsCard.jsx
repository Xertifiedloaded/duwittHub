/* eslint-disable react/prop-types */
import { clock } from '../../assets/icons';

const VirtualEventsCard = ({ image, subheading, date, time }) => {
  return (
    <div className="m-9 1500px:w-[375px] 1500px:h-[440px] rounded-[10px] bg-[#F1F1F1] pt-4 ">
      <img
        src={image}
        alt=""
        className="1500px:w-[346px] 1500px:234.16px rounded-[10px] mx-auto "
      />

      <div className="w-[95%] mx-auto">
        <div className="mt-4 1500px:w-[101px] 1500px:h-[30px] rounded-[10px] bg-[#D9FFF2] flex items-center justify-center ">
          <p className="1500px:text-[14px] font-[400] 1500px:leading-[18.48px] ">
            Virtual
          </p>
        </div>

        <p className="mt-6 1500px:text-[18px] 1500px:leading-[23.76px] font-[600] font-poppins ">
          {subheading}
        </p>

        <div className="flex items-center gap-3 mt-8 ">
          <div className="1500px:w-[13.5px] 1500px:h-[13.5px] border border-[#111111] rounded-full flex items-center justify-center ">
            <img src={clock} alt="" />
          </div>

          <p className="1500px:text-[16px] 1500px:leading-[21.12px] font-[400] font-poppins ">
            {date} {time} EDT
          </p>
        </div>
      </div>
    </div>
  );
};

export default VirtualEventsCard;
