import { arrowforward, book, question } from '../../assets/icons';

const NeedHelp = () => {
  return (
    <div className="flex items-center gap-7">
      <div
        className="my-9 1500px:w-[564px] 1500px:py-7 border rounded-[10px] flex flex-col items-center justify-center shadow"
        style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
      >
        <div className="mt-3 1500px:w-[70px] 1500px:h-[70px] rounded-[15px] bg-[#00FEA8] flex items-center justify-center ">
          <img src={book} alt="" className="1500px:w-[40px] 1500px:h-[40px]" />
        </div>

        <p className="mt-3 1500px:text-[32px] 1500px:leading-[52px] font-[600] font-poppins ">
          Duwitt Academy
        </p>

        <p className="mt-4 1500px:text-[18px] 1500px:leading-[28px] font-[400] font-poppins text-[#6E6E6E] ">
          Enroll in hands-on training to achieve your goals
        </p>

        <div className="mt-4 flex items-center gap-1 cursor-pointer">
          <p className="1500px:text-[18px] 1500px:leading-[27px] font-[600] font-poppins text-[#009A49] ">
            Get Started
          </p>
          <img src={arrowforward} alt="" />
        </div>
      </div>

      <div
        className="my-9 1500px:w-[564px] 1500px:py-7 border rounded-[10px] flex flex-col items-center justify-center shadow"
        style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
      >
        <div className="mt-3 1500px:w-[70px] 1500px:h-[70px] rounded-[15px] bg-[#00FEA8]  flex items-center justify-center ">
          <img src={question} alt="" className="1500px:w-[40px] 1500px:h-[40px]" />
        </div>

        <p className="mt-3 1500px:text-[32px] 1500px:leading-[52px] font-[600] font-poppins ">
          Contact Support
        </p>

        <p className="mt-4 1500px:text-[18px] 1500px:leading-[28px] font-[400] font-poppins text-[#6E6E6E] ">
          Contact our Support team and we&apos;ll be happy to help you!
        </p>

        <div className="mt-4 flex items-center gap-1 cursor-pointer">
          <p className="1500px:text-[18px] 1500px:leading-[27px] font-[600] font-poppins text-[#009A49] ">
            Contact us
          </p>
          <img src={arrowforward} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;
