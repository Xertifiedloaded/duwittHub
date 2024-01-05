import { Link } from 'react-router-dom';
import {
  crypto,
  cryptobitcoin,
  cryptofreebies,
  freebies,
} from '../../../assets/icons';
import CoursesCard from '../../../utils/cards/CoursesCard';

const Courses = () => {
  return (
    <div className="mt-[40px] 1500px:mt-[90px] w-[90%] 1500px:w-[80%] mx-auto ">
      <h3 className="text-[24px] leading-[40px] 800px:text-[30px] 1500px:text-[36px] 1500px:leading-[54px] font-[600] font-poppins text-[#000000] ">
        Our Courses
      </h3>

      <p className="mt-1 text-[14px] 800px:text-[16px] leading-[24px] 1500px:text-[18px] font-[400] font-poppins text-[#121212] ">
        Develop new skills and competencies for the digital <br /> economy in
        our and courses.
      </p>

      <p className="mt-5 text-[16px] 800px:text-[20px] leading-6 1500px:text-[24px] font-[500] font-poppins text-[#001c15] ">
        Course Preference
      </p>

      <div className="mt-3 flex items-center gap-5 flex-wrap">
        <label className="radio flex items-center gap-2 text-[12px]">
          Free
          <input type="radio" value="free" name="button" />
          <span></span>
        </label>

        <label className="radio flex items-center gap-2 text-[12px]">
          Intermediate
          <input type="radio" value="intermediate" name="button" />
          <span></span>
        </label>

        <label className="radio flex items-center gap-2 text-[12px]">
          Enrolled
          <input type="radio" value="enrolled" name="button" />
          <span></span>
        </label>

        <label className="radio flex items-center gap-2 text-[12px]">
          Completed courses
          <input type="radio" value="completed courses" name="button" />
          <span></span>
        </label>
      </div>

      <p className="mt-7 text-[18px] 800px:text-[24px] leading-6 1500px:text-[36px] 1500px:leading-[54px] font-[600] font-poppins text-[#000000]">
        Freebie Courses
      </p>

      <Link
        to="/course-details"
        className="mt-3 mb-6 flex items-center flex-wrap gap-5"
      >
        <CoursesCard image={freebies} courseTitle="Crypto 101" time="5mins" />
        <CoursesCard image={crypto} courseTitle="Crypto 102" time="10mins" />
        <CoursesCard
          image={cryptobitcoin}
          courseTitle="Crypto 103"
          time="5mins"
        />
        <CoursesCard
          image={cryptofreebies}
          courseTitle="Crypto 101"
          time="5mins"
        />
        <CoursesCard image={crypto} courseTitle="Crypto 102" time="10mins" />
        <CoursesCard
          image={cryptobitcoin}
          courseTitle="Crypto 103"
          time="5mins"
        />
        <CoursesCard image={crypto} courseTitle="Crypto 102" time="10mins" />
        <CoursesCard
          image={cryptobitcoin}
          courseTitle="Crypto 103"
          time="5mins"
        />
        <CoursesCard
          image={cryptofreebies}
          courseTitle="Crypto 101"
          time="5mins"
        />
      </Link>
    </div>
  );
};

export default Courses;
