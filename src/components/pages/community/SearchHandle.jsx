/* eslint-disable react/prop-types */
import { FiSearch } from 'react-icons/fi';
import { FaPlus } from 'react-icons/fa6';

const SearchHandle = ({ activeTopic, setActiveTopic, setTopic, navigate, landingPage }) => {
  return (
    <div className="mt-9 1500px:w-full 1500px:h-[98px] border rounded-[10px] bg-[#001C15] flex items-center justify-between px-5 ">
      <div className="flex items-center gap-4">
        <p
          className={`1500px:text-[18px] 1500px:leading-[50px] cursor-pointer ${
            activeTopic === 1 ? 'text-[#00FEA8]' : 'text-[#FFFFFF]'
          }`}
          onClick={() => {
            landingPage ? setTopic('All Topics') : null;
            setActiveTopic(1);
          }}
        >
          All Topics
        </p>
        <p
          className={`1500px:text-[18px] 1500px:leading-[50px] cursor-pointer ${
            activeTopic === 2 ? 'text-[#00FEA8]' : 'text-[#FFFFFF]'
          }`}
          onClick={() => {
            landingPage ? setTopic('Trending Topics') : null;
            setActiveTopic(2);
          }}
        >
          Trending topics
        </p>
        <p
          className={`1500px:text-[18px] 1500px:leading-[50px] cursor-pointer ${
            activeTopic === 3 ? 'text-[#00FEA8]' : 'text-[#FFFFFF]'
          }`}
          onClick={() => {
            landingPage ? setTopic('Featured Topics'): null;
            setActiveTopic(3);
          }}
        >
          Featured topics
        </p>
        <p
          className={`1500px:text-[18px] 1500px:leading-[50px] cursor-pointer ${
            activeTopic === 4 ? 'text-[#00FEA8]' : 'text-[#FFFFFF]'
          }`}
          onClick={() => {
            landingPage ? setTopic('Discussion') : null;
            setActiveTopic(4);
          }}
        >
          Discussion
        </p>
      </div>

      <div className="flex items-center gap-2">
        <div className="1500px:w-[354px] 1500px:h-[46px] rounded-[10px] bg-[#ffffff] flex items-center gap-3 px-2 ">
          <FiSearch size={20} />
          <input
            type="text"
            placeholder="Search all related questions"
            className="w-full outline-none placeholder:text-[#0000007e]"
          />
        </div>

        <button
          className="button 1500px:!w-[148px] 1500px:!h-[48px] !bg-[#00FEA8] !rounded-[10px] flex items-center justify-center gap-3 "
          onClick={() => navigate('/community/new-post')}
        >
          <p className="1500px:text-[16px] 1500px:leading-6 ">New Post</p>
          <FaPlus size={24} className="text-[#292D32]" />
        </button>
      </div>
    </div>
  );
};

export default SearchHandle;
