import { Link } from 'react-router-dom';
import LeaderBoard from './LeaderBoard';

const HotTopic = () => {
  return (
    <div className="mt-7">
      <h3 className="1500px:text-[24px] 1500px:leading-[50px] font-[600] ">
        Hot Topics
      </h3>

      <p className="1500px:text-[18px] 1500px:leading-[32px] my-3 ">
        Advancing your career in the Crypto space{' '}
        <Link to={``} className="text-[#03CF9C] cursor-pointer">
          Read More
        </Link>
      </p>
      <p className="1500px:text-[18px] 1500px:leading-[32px] my-3 ">
        Advancing your career in the Crypto space{' '}
        <Link to={``} className="text-[#03CF9C] cursor-pointer">
          Read More
        </Link>
      </p>
      <p className="1500px:text-[18px] 1500px:leading-[32px] my-3 ">
        Advancing your career in the Crypto space{' '}
        <Link to={``} className="text-[#03CF9C] cursor-pointer">
          Read More
        </Link>
      </p>
      <p className="1500px:text-[18px] 1500px:leading-[32px] my-3 ">
        Advancing your career in the Crypto space{' '}
        <Link to={``} className="text-[#03CF9C] cursor-pointer">
          Read More
        </Link>
      </p>

      <h3 className="mt-[60px] 1500px:text-[24px] 1500px:leading-[50px] font-[600] ">
        Leader Board
      </h3>

      <LeaderBoard />

      <Link
        to={``}
        className="block mt-6 text-[#03CF9C] cursor-pointer underline"
      >
        View all
      </Link>

      <div className="mt-[80px]">
        <h3 className="1500px:text-[24px] 1500px:leading-[50px] font-[600] ">
          Upcoming Events
        </h3>

        <p className="1500px:text-[18px] 1500px:leading-[32px] my-3 ">
          Advancing your career in the Crypto space{' '}
          <Link to={``} className="text-[#03CF9C] cursor-pointer">
            Read More
          </Link>
        </p>
        <p className="1500px:text-[18px] 1500px:leading-[32px] my-3 ">
          Advancing your career in the Crypto space{' '}
          <Link to={``} className="text-[#03CF9C] cursor-pointer">
            Read More
          </Link>
        </p>
        <p className="1500px:text-[18px] 1500px:leading-[32px] my-3 ">
          Advancing your career in the Crypto space{' '}
          <Link to={``} className="text-[#03CF9C] cursor-pointer">
            Read More
          </Link>
        </p>
        <p className="1500px:text-[18px] 1500px:leading-[32px] my-3 ">
          Advancing your career in the Crypto space{' '}
          <Link to={``} className="text-[#03CF9C] cursor-pointer">
            Read More
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HotTopic;
