/* eslint-disable react/prop-types */
import { FaAngleDown } from 'react-icons/fa6';
import { FaAngleUp } from 'react-icons/fa6';
import { IoIosCheckmark } from 'react-icons/io';
import { padlock } from '../../../assets/icons';
import { courseDetails } from '../../../utils/utilities';

const CourseDetails = ({
  active,
  setActive,
  currentModule,
  setCurrentModule,
}) => {
  const handleToggleCurrentModule = (id) => {
    setCurrentModule(currentModule === id ? null : id);
  };

  return (
    <>
      {courseDetails.map((courseDetail, index) => (
        <div
          key={index}
          className="my-2 w-[296px] 400px:w-[330px] 800px:w-[380px] 1000px:w-[500px] 1200px:w-full 1500px:w-[867px] bg-[#F1FFFA] px-3 py-2 1500px:py-8 rounded-[10px] "
        >
          <div className="flex items-center justify-between">
            <p className="text-[14px] leading-[21px] 1200px:text-[16px] 1500px:leading-[24px] font-[700] font-poppins ">
              {`Module ${index + 1}: Introduction to Cryptocurrencies`}
            </p>

            <div className="1500px:mr-[34px]">
              {currentModule === courseDetail.id ? (
                <FaAngleUp
                  size={22}
                  className="cursor-pointer"
                  onClick={() => handleToggleCurrentModule(courseDetail.id)}
                />
              ) : (
                <FaAngleDown
                  size={22}
                  className="cursor-pointer"
                  onClick={() => handleToggleCurrentModule(courseDetail.id)}
                />
              )}
            </div>
          </div>

          {currentModule === courseDetail.id && (
            <div className="my-1 1500px:my-2 1500px:flex items-center justify-between">
              <ul className="text-[10px] 700px:text-[12px] 1200px:text-[14px] leading-[15px] 1500px:text-[18px] 1500px:leading-[42px] cursor-pointer ">
                {courseDetail.contents.map((content, contentIndex) => (
                  <div key={contentIndex} className="flex items-center gap-2">
                    <div
                      className={`w-[24px] h-[24px] rounded-full flex items-center justify-center ${
                        active === 1
                          ? 'bg-[#000] hidden 1500px:flex'
                          : 'bg-[#1111112b] hidden 1500px:flex'
                      } `}
                    >
                      <IoIosCheckmark
                        size={20}
                        className="hidden 1500px:block text-[#fff]"
                      />
                    </div>
                    <li onClick={() => setActive(1)}>
                      <span className="text-[30px] 1500px:hidden">.</span>{' '}
                      {content}
                    </li>
                  </div>
                ))}
              </ul>

              <div className="mt-3 flex 1500px:flex-col gap-2 items-center ">
                <img
                  src={padlock}
                  alt=""
                  className="w-[18px] h-[18px] 1500px:w-[24px] 1500px:h-[26px]"
                />

                <button className="button !w-[62px] !h-[19px] 1500px:!w-[88px] 1500px:!h-[29px] text-[#00FEA8] font-[600] font-poppins text-[8px] leading-3 1500px:text-[10px] 1500px:leading-[21px] opacity-20 ">
                  Start Course
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default CourseDetails;
