import { useState } from 'react';
import { certificate, folder2, padlock, progress } from '../../../assets/icons';
import CourseDetails from './CourseDetails';
import { useNavigate } from 'react-router-dom';

const SingleCourseDetails = () => {
  const [active, setActive] = useState(0);
  const [currentModule, setCurrentModule] = useState(null);

  const navigate = useNavigate();

  return (
    <section className="w-[90%] mt-[40px] 1500px:mt-[90px] mx-auto">
      <h2 className="font-[600] 1000px:text-[32px] 1000px:leading-[27.2px]">
        Welcome back !
      </h2>

      <div className="700px:flex 700px:justify-between 700px:gap-6">
        <div className="flex-col flex-1">
          <div className="mt-9 w-[296px] 400px:w-[330px] 800px:w-[380px] 1000px:w-[500px] 1200px:w-full 1500px:w-[867px] bg-[#F1FFFA] px-3 py-2 1500px:py-6 rounded-[10px] ">
            <p className="text-[14px] 1500px:text-[16px] 1500px:leading-[24px] font-[700] font-poppins ">
              Course Progress
            </p>

            <div className="flex items-center justify-between">
              <img
                src={progress}
                alt=""
                className="py-3 w-[60%] 700px:w-[75%] 100px:w-full"
              />

              <button
                className="button !w-[80px] !h-[30px] 1500px:!w-[112px] 1500px:!h-[40px] text-[12px] text-[#00FEA8] font-[600] font-poppins 1500px:text-[14px] 1500px:leading-[21px] hover:bg-[#001c15e7] "
                onClick={() => navigate(`/course-access`)}
              >
                Enroll Now
              </button>
            </div>
            <p className="1500px:w-[10px] font-[700]">0%</p>
          </div>

          <p className="mt-5 text-[14px] 1500px:text-[18px] 1500px:leading-[27px] font-[600] font-poppins ">
            Course Outline
          </p>

          <CourseDetails
            active={active}
            setActive={setActive}
            currentModule={currentModule}
            setCurrentModule={setCurrentModule}
          />

          <div className="my-3 w-[296px] 400px:w-[330px] 800px:w-[380px] 1000px:w-[500px] 1200px:w-full 1500px:w-[867px] 1500px:h-[131px] bg-[#F1FFFA] px-3 py-4 1500px:py-8 rounded-[10px] ">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[14px] leading-[21px] 1500px:text-[16px] 1500px:leading-[24px] font-[700] font-poppins ">
                  Take Test: Test your Knowledge
                </p>

                <button className="1500px:hidden button !w-[62px] !h-[19px] 1500px:!w-[88px] 1500px:!h-[29px] text-[#00FEA8] font-[600] font-poppins text-[8px] leading-3 1500px:text-[10px] 1500px:leading-[21px] opacity-20 ">
                  Start Course
                </button>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <img
                  src={padlock}
                  alt=""
                  className="w-[18px] h-[18px] 1500px:w-[24px] 1500px:h-[26px]"
                />

                <button className="hidden 1500px:block button 1500px:!w-[88px] 1500px:!h-[29px] !bg-[#] text-[#00FEA8] font-[600] font-poppins 1500px:text-[10px] 1500px:leading-[21px] opacity-20 ">
                  Start Course
                </button>
              </div>
            </div>
          </div>

          <div className="my-3 mb-7 w-[296px] 400px:w-[330px] 800px:w-[380px] 1000px:w-[500px] 1200px:w-full 1500px:w-[867px] 1500px:h-[131px] bg-[#F1FFFA] px-3 py-4 1500px:py-8 rounded-[10px] ">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <div>
                  <p className="text-[14px] 1500px:text-[16px] 1500px:leading-[24px] font-[700] font-poppins ">
                    Certificate
                  </p>

                  <button className="1500px:hidden button !w-[62px] !h-[19px] 1500px:!w-[88px] 1500px:!h-[29px] text-[#00FEA8] font-[600] font-poppins text-[8px] leading-3 1500px:text-[10px] 1500px:leading-[21px] opacity-20 ">
                    download
                  </button>
                </div>

                <img
                  src={certificate}
                  alt=""
                  className="w-[18px] h-[18px] 1500px:w-[24px] 1500px:h-[26px]"
                />
              </div>

              <div className="flex flex-col gap-4 items-center">
                <img
                  src={padlock}
                  alt=""
                  className="w-[18px] h-[18px] 1500px:w-[24px] 1500px:h-[26px]"
                />

                <button className="hidden 1500px:block button 1500px:!w-[88px] 1500px:!h-[29px] !bg-[#] text-[#00FEA8] font-[600] font-poppins 1500px:text-[10px] 1500px:leading-[21px] opacity-20 ">
                  download
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-9 border border-[#000000] rounded-[5px] w-[296px] 400px:w-[330px] h-[290px] 1500px:w-[364px] 1500px:h-[317px] px-3 py-6 ">
          <div className="w-[62px] h-[62px] bg-[#00FEA8] rounded-[8px] flex items-center justify-center ">
            <img src={folder2} alt="" />
          </div>

          <p className="mt-4 text-[14px] leading-[21px] 1500px:text-[16px] 1500px:leading-[24px] font-[400] font-poppins ">
            Ready to know more?
          </p>

          <p className="my-4 text-[18px] leading-[27px] 1500px:text-[24px] 1500px:leading-[36px] font-[600] font-poppins ">
            Learn crypto terms the smartest way
          </p>

          <button className="button mt-3 text-[18px] leading-[27px] text-[#00FEA8] !w-[188px] !h-[50px] !rounded-[10px] hover:bg-[#001c15e7]  " onClick={()=> navigate('/glossary')}>
            Go to Glossary
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleCourseDetails;
