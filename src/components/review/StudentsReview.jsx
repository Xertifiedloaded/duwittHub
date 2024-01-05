/* eslint-disable react/prop-types */
import { quote } from '../../assets/images';
import { studentReviews1, studentReviews2 } from '../../utils/utilities';

const StudentsReview = ({ isSmallScreen, studentReview, currentIndex }) => {
  return (
    <>
      {isSmallScreen ? (
        <div
          className="flex-shrink-0 my-6 w-full border border-[#F7E3FD] rounded-[10px] p-5 transition-all "
          style={{ transform: `translateX(-${currentIndex * 110}%)` }}
        >
          <div>
            <img src={quote} alt="" />

            <p className="my-2 1500px:text-[16px] 1500px:leading-6 text-[#ffffffb9] ">
              {studentReview.review}
            </p>

            <div className="flex items-center gap-2">
              <img
                src={studentReview.image}
                alt=""
                className="w-[28px] h-[28px] 1500px:h-[33px] 1500px:w-[33px] "
              />
              <p className="text-[#ffffff] text-[10px] leading-[15px] 1500px:text-[16px] 1500px:leading-6 ">
                {studentReview.student}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-[70px] w-[90%] mx-auto">
          <div className="flex items-center gap-5 1500px:gap-7 overflow-x-auto scrollbar ">
            {studentReviews1.map((studentReview) => (
              <div
                key={studentReview.id}
                className="flex-shrink-0 w-[335px] 800px:w-[420px] 1500px:w-[538px] border border-[#F7E3FD] rounded-[10px] p-5 "
              >
                <div>
                  <img src={quote} alt="" />

                  <p className="my-3 text-[10px] leading-[15px] 700px:text-[13px] 1500px:text-[16px] 1500px:leading-6 text-[#ffffffb9] ">
                    {studentReview.review}
                  </p>

                  <div className="flex items-center gap-2">
                    <img
                      src={studentReview.image}
                      alt=""
                      className="w-[28px] h-[28px] 1500px:h-[33px] 1500px:w-[33px] "
                    />
                    <p className="text-[#ffffff] text-[10px] leading-[15px] 700px:text-[13px] 1500px:text-[16px] 1500px:leading-6 ">
                      {studentReview.student}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-5 1500px:gap-7 overflow-x-auto scrollbar">
            {studentReviews2.map((studentReview) => (
              <div
                key={studentReview.id}
                className="flex-shrink-0 w-[335px] 800px:w-[420px] 1500px:w-[532px] border border-[#F7E3FD] rounded-[10px] p-5  "
              >
                <div>
                  <img src={quote} alt="" />

                  <p className="my-3 text-[10px] leading-[15px] 700px:text-[13px] 1500px:text-[16px] 1500px:leading-6 text-[#ffffffb9] ">
                    {studentReview.review}
                  </p>

                  <div className="flex items-center gap-2">
                    <img
                      src={studentReview.image}
                      alt=""
                      className="w-[28px] h-[28px] 1500px:h-[33px] 1500px:w-[33px] "
                    />
                    <p className="text-[#ffffff] text-[10px] leading-[15px] 700px:text-[13px] 1500px:text-[16px] 1500px:leading-6">
                      {studentReview.student}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default StudentsReview;
