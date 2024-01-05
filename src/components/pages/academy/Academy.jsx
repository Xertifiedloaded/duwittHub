/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { folder2, mouse } from '../../../assets/icons';
import academy from '../../../assets/images/academy-landing-page.png';
import students from '../../../assets/images/group-of-people.png';
import { bigfoot, giantlady } from '../../../assets/images';
import StudentsReview from '../../review/StudentsReview';
import { members, studentReviews } from '../../../utils/utilities';
import { useEffect, useState } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa6';

const Academy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 750);
  const [manualSlide, setManualSlide] = useState(false);
  const autoSlideInterval = 3000;

  useEffect(() => {
    const resizeScreen = () => {
      setIsSmallScreen(window.innerWidth < 750);
    };

    window.addEventListener('resize', resizeScreen);

    return () => {
      window.removeEventListener('resize', resizeScreen);
    };
  }, []);

  const prevSlide = () => {
    setManualSlide(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? studentReviews.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setManualSlide(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === studentReviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    let slideInterval;

    if (isSmallScreen) {
      slideInterval = setInterval(() => {
        if (!manualSlide) {
          nextSlide();
        }
        setManualSlide(false);
      }, autoSlideInterval);
    }

    return () => clearInterval(slideInterval);
  }, [isSmallScreen, manualSlide]);

  return (
    <>
      <div className="mt-[40px] w-full 1500px:mt-[70px] flex flex-col items-center justify-center">
        <div className="w-[80%] mx-auto">
          <h3 className="text-[12px] 400px:text-[16px] leading-[18px] 1500px:text-[18px] font-[500] 1500px:leading-[27px] font-poppins text-[#121212] text-center ">
            ACADEMY
          </h3>

          <h1 className="1500px:w-[90%] mx-auto my-2 400px:my-3 1500px:my-0 text-center 1500px:pt-6 text-[25px] 400px:text-[30px] leading-10 1500px:text-[62px] 1500px:leading-[72px] font-[700] font-poppins text-[#0d1111] ">
            Unlock the knowledge of Cryptocurrency on Duwitt Academy
          </h1>

          <p className="1500px:w-[50%] mt-3 1500px:mt-[-10px] mx-auto text-center text-[16px] 400px:text-[18px] 1500px:pt-[45px] leading-6 1500px:text-[24px] 1500px:leading-[32px] font-[400] font-poppins text-[#263238] ">
            Your trusted source for comprehensive education in the digital asset
            realm
          </p>
        </div>

        <div className="relative w-[80%] mx-auto mt-5 400px:mt-6 800px:mt-9 ">
          <img src={academy} alt="" className="w-[95%] h-[172px] 400px:h-[200px] 800px:h-[300px] 1000px:h-[340px] 1200px:h-[380px] 1500px:h-[520px] mx-auto rounded-[8px] " />

          <div className="absolute top-[-15px] right-[-8px] 400px:top-[-22px] 400px:right-[-14px] 700px:top-[-27px] 700px:right-[-10px] 1000px:top-[-32px] 1000px:right-[-10px] 1200px:top-[-32px] 1200px:right-[-8px] 1500px:top-[-37px] 1500px:right-[-8px] rounded-full p-[6px] 400px:p-2 700px:p-3 bg-[#00FEA8] w-[42px] h-[42px] 400px:w-[60px] 400px:h-[60px] 700px:w-[72px] 700px:h-[72px] 1000px:w-[90px] 1000px:h-[90px] 1500px:w-[103px] 1500px:h-[100px] flex items-center justify-center z-[-1] ">
            <div className="rounded-full bg-[#001C15] w-full h-full" />
          </div>
        </div>

        <div className="relative my-6 flex flex-col items-center justify-center gap-1">
          <img
            src={mouse}
            alt=""
            className="w-[18px] h-[25px] 400px:w-[21px] 400px:h-[30px] 1500px:w-[24px] 1500px:h-[36px] "
          />
          <a href="#scroll">
            <div className="absolute top-1 400px:top-[6px] 1500px:top-2 left-[39px] 400px:left-[38px] w-[3px] h-[5px] 400px:w-[4px] 1500px:w-[5px] 400px:h-[7px] border border-[#666270] rounded-full cursor-pointer " />
          </a>

          <p className="text-[14px] leading-[28px] 1500px:leading-[18px]">
            Scroll down
          </p>
        </div>

        <div className="w-[80%] mx-auto 1500px:w-[50%] flex items-center flex-col">
          <h3 className="text-[18px] 400px:text-[28px] leading-6 1500px:text-[40px] font-[600] 1500px:leading-[52px] font-poppins text-center text-[#000000] ">
            Start a journey of Life changing experience
          </h3>

          <p className="mt-3 1500px:mt-6 text-center text-[12px] 400px:text-[15px] leading-[18px] 1500px:text-[18px] 1500px:leading-[24px] text-[#121212] font-[400] font-poppins 1500px:w-[546px] ">
            Develop new skills and competencies for the digital economy in our
            courses.
          </p>
        </div>

        <div className="mt-5 1500px:mt-0 w-[80%] mx-auto">
          <div className="1500px:mt-[60px] 1500px:flex justify-center gap-6 ">
            <div className="w-full 1500px:w-[587px] bg-[#F2F2F2] rounded-[8px] pb-4 1500px:pb-0 ">
              <img
                src={students}
                alt=""
                className="w-full 1500px:h-[329px] object-cover"
              />

              <h3 className="w-[90%] mx-auto mt-3 1500px:mt-6 text-[18px] leading-6 400px:text-[21px] 1500px:text-[24px] 1500px:leading-[38px] font-[600] font-poppins text-[#181817]">
                Gain a more profound expertise in the realm of cryptocurrencies.
              </h3>

              <p className="w-[90%] mx-auto my-3 400px:my-4 1500px:my-5 text-[12px] 400px:text-[15px] 1500px:text-[18px] 1500px:leading-[30px] font-[400] font-poppins text-[#6E6E6E]">
                Start a course learn and get familiar with the crypto world
                today with a free courses on duwitt Academy
              </p>

              <div className="w-[90%] mx-auto">
                <button className="button text-[#ffffff] font-[600] font-poppins 1500px:text-[18px] 1500px:leading-[27px] hover:bg-[#001c15e7] ">
                  <Link to="/courses">Start now</Link>
                </button>
              </div>
            </div>

            <div className="mt-[30px] 1500px:mt-0 1500px:flex-col items-center">
              <div className="1500px:w-[558px] bg-[#F2F2F2] py-6 rounded-[8px] ">
                <div className="flex pl-[18px] 400px:pl-[30px] 1000px:pl-[40px] 1200px:pl-[45px] 1500px:pl-[30px] ">
                  {members?.map((member) => (
                    <div key={member.id} className="ml-[-4px]  ">
                      <img
                        src={member.image}
                        alt=""
                        className="w-[27px] h-[30px] 400px:w-[40px] 400px:h-[40px] 1500px:w-[50px] 1500px:h-[50px] "
                      />
                    </div>
                  ))}
                </div>

                <div className="w-[92%] mx-auto flex flex-col">
                  <h3 className="mt-5 text-[16px] leading-6 400px:text-[20px] 1500px:text-[24px] 1500px:leading-[36px] font-[600] font-poppins text-[#000000]">
                    Join Members from different part of the world in learning
                    about Cryptocurrencies
                  </h3>

                  <p className="my-[7px] 1500px:my-3 text-[14px] 400px:text-[16px] 1500px:text-[18px] leading-[27px] font-[400] font-poppins text-[#6E6E6E]">
                    We will assist you in cryptocurrency, blockchain technology,
                    trading strategies, and financial management as you embark
                    on your path to financial freedom.
                  </p>

                  <p
                    className="1500px:text-[23px] font-[700] 1500px:leading-[31.19px] text-[#181817] underline underline-offset-8 cursor-pointer "
                    style={{ fontFamily: 'Darker Grotesque, sans-serif' }}
                  >
                    <Link to="/courses">START NOW</Link>
                  </p>
                </div>
              </div>

              <div className="mt-[27px] 1500px:mt-[16px] py-7 w-full 1500px:w-[558px] bg-[#F2F2F2] rounded-[8px] ">
                <div className="w-[90%] mx-auto">
                  <div className="theme-folder2 w-[50px] h-[50px] 1500px:w-[62px] 1500px:h-[62px] flex items-center justify-center rounded-[12px] ">
                    <img
                      src={folder2}
                      alt=""
                      className="w-[19px] -[22px] 1500px:w-[24px] 1500px:h-[28px] text-[#001C15] "
                    />
                  </div>

                  <p className="pt-3 text-[14px] leading-6 1500px:text-[16px] 1500px:leading-[24px] font-[400] font-poppins ">
                    Ready to know more?
                  </p>

                  <p className="pt-1 text-[16px] 400px:text-[20px] leading-6 1500px:text-[24px] 1500px:leading-[36px] font-[600] ">
                    Learn crypto terms the smartest way
                  </p>

                  <button className="mt-6 button text-[#ffffff] font-[600] font-poppins 1500px:text-[18px] 1500px:leading-[27px] hover:bg-[#001c15e7] ">
                    <Link
                      to="/glossary"
                      className="text-[12px] leading-[24px] 1500px:text-[18px] 1500px:leading-[27px]"
                    >
                      Go to Glossary
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div id="scroll" className="mt-[85px]">
            <h2 className="text-[18px] 400px:text-[30px] 400px:leading-9 leading-6 1500px:text-[40px] 1500px:leading-[52px] font-poppins font-[600] text-[#000000] text-center ">
              What are you looking to learn?
            </h2>

            <p className="400px:w-[85%] 1500px:w-[40%] mx-auto mt-[6px] 400px:mt-3 1500px:mt-4 text-[12px] 400px:text-[15px] leading-[18px] 1500px:text-[18px] 1500px:leading-[24px] font-[400] font-poppins text-[#121212] text-center ">
              Develop new skills and competencies for the digital economy in our
              courses.
            </p>

            <div className="mt-[30px] 1200px:mt-[50px] w-full bg-[#DEF6F5] py-5 px-4 1200px:px-[70px] pb-9 1500px:py-9 1200px:flex 1200px:items-center 1200px:gap-x-[100px] rounded-[18px] ">
              <div className="flex-1">
                <p className="text-center 1200px:text-left text-[18px] leading-[38px]">
                  Starter pack
                </p>

                <p className="text-center 1200px:text-left my-2 text-[24px] 400px:text-[30px] leading-[38px] 1500px:text-[36px] font-[600] ">
                  Explore and Access Starter pack Courses
                </p>

                <p className="text-center 1200px:text-left my-5 text-[16px] leading-[30px] 400px:text-[18px] text-[#6E6E6E] ">
                  Start a course learn and get familiar with the crypto world
                  today with a free courses on duwitt Academy
                </p>

                <p
                  className="text-center 1200px:text-left my-6 text-[23px] leading-[31px] font-[700] text-[#181817] underline underline-offset-8 cursor-pointer"
                  style={{ fontFamily: 'Darker Grotesque' }}
                >
                  START NOW
                </p>
              </div>

              <div className="flex-2 mt-[40px] 1500px:mt-0">
                <img
                  src={giantlady}
                  alt=""
                  className="w-full h-[238px] 400px:h-[396px] "
                />
              </div>
            </div>

            <div className="mt-[30px] mb-[60px] 1200px:mt-[50px] w-full bg-[#DEF6F5] py-5 px-4 1200px:pl-[50px] pb-9 1500px:py-9 1200px:flex 1200px:items-center 1200px:gap-x-[100px] rounded-[18px] ">
              <div>
                <img
                  src={bigfoot}
                  alt=""
                  className="hidden 1200px:block flex-2 1500px:w-full 1500px:h-[396px]"
                />
              </div>

              <div className="flex-1">
                <p className="1200px:mt-9 1500px:mt-0 text-center 1200px:text-left text-[18px] leading-[38px]">
                  Advance pack
                </p>

                <p className="text-center 1200px:text-left my-2 text-[24px] 400px:text-[31px] leading-[38px] 1500px:text-[36px] font-[600]  ">
                  Expand your Knowledge with Advance Courses
                </p>

                <p className="text-center 1200px:text-left mt-4 text-[16px] leading-[30px] 400px:text-[18px] 1500px:leading-[30px] text-[#6E6E6E] ">
                  Start a course learn and get familiar with the crypto world
                  today with free courses on duwitt Academy
                </p>

                <div className="flex justify-center 1200px:block">
                  <button className="button my-8 text-[18px] leading-[27px] 1500px:leading-[31px] text-[#00FEA8] !bg-[#001c15c0] !rounded-[10px] !w-[150px] !h-[48px] 1500px:!w-[230px] 1500px:!h-[55px] ">
                    Coming Soon
                  </button>
                </div>
              </div>

              <div>
                <img
                  src={bigfoot}
                  alt=""
                  className="1200px:hidden w-full h-[238px] 400px:h-[396px] "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#000A09] py-[30px] 1500px:py-[50px]">
          <div className="flex items-center justify-center">
            {members?.map((member) => (
              <div key={member.id} className="ml-[-4px]  ">
                <img
                  src={member.image}
                  alt=""
                  className="w-[30px] h-[30px] 700px:w-[40px] 700px:h-[40px] 1500px:w-[50px] 1500px:h-[50px]"
                />
              </div>
            ))}
          </div>

          <h3 className="text-[24px] leading-[28px] 700px:text-[30px] 1500px:text-[40px] 1500px:leading-[52px] font-poppins font-[600] text-[#ffffff] text-center py-6 ">
            What Our students are saying about us
          </h3>

          {isSmallScreen ? (
            <>
              <div className="flex items-center gap-9 px-5 transition-transform overflow-hidden">
                {studentReviews.map((studentReview) => (
                  <StudentsReview
                    key={studentReview.id}
                    studentReview={studentReview}
                    isSmallScreen={isSmallScreen}
                    currentIndex={currentIndex}
                  />
                ))}
              </div>

              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center gap-5">
                  <div className="w-[24px] h-[24px] border border-[#fff] flex items-center justify-center rounded-full ">
                    <button onClick={() => prevSlide()}>
                      <FaArrowLeftLong size={12} className="text-[#fff]" />
                    </button>
                  </div>

                  <div className="flex items-center gap-1">
                    {studentReviews.map((s, index) => (
                      <div
                        key={s.id}
                        className={`${
                          index === currentIndex
                            ? 'w-[20px] h-[20px] bg-[#00FEA8]'
                            : 'w-[12px] h-[12px] bg-[#fff]'
                        }  rounded-full  `}
                        onClick={() => setCurrentIndex(index)}
                      />
                    ))}
                  </div>

                  <div className="w-[24px] h-[24px] border border-[#fff] flex items-center justify-center rounded-full">
                    <button onClick={() => nextSlide()}>
                      <FaArrowRight className="text-[#fff]" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <StudentsReview />
          )}
        </div>
      </div>
    </>
  );
};

export default Academy;
