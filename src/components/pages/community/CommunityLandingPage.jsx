import { useState } from 'react';
import { mouse } from '../../../assets/icons';
import { hands, man, man2, redhands } from '../../../assets/images';
import { useNavigate } from 'react-router-dom';
import Posts from './Posts';
import ReactPaginate from 'react-paginate';
import SearchHandle from './SearchHandle';
import HotTopic from './HotTopic';
import { posts } from '../../../utils/utilities';
import NeedHelp from '../../../utils/cards/NeedHelp';

const CommunityLandingPage = () => {
  const navigate = useNavigate();
  const [activeTopic, setActiveTopic] = useState(0);
  const [topic, setTopic] = useState('All Topics');

  const [pageNumber, setPageNumber] = useState(0);

  const postPerPage = 5;
  const postsViewed = pageNumber * postPerPage;

  const displayPosts = posts?.slice(postsViewed, postsViewed + postPerPage);

  const pageCount = Math.ceil(posts?.length / postPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="mt-[40px] w-[80%] mx-auto 1500px:mt-[90px]">
        <h3 className="text-[12px] leading-[18px] 1500px:text-[18px] font-[500] 1500px:leading-[27px] font-poppins text-[#121212] text-center ">
          COMMUNITY
        </h3>

        <h1 className="mx-auto mt-[-12px] text-center 1500px:pt-6 text-[28px] leading-10 1500px:text-[62px] 1500px:leading-[72px] font-[700] font-poppins text-[#0d1111] ">
          Connect with peers,
          <br /> share and gain Insight
        </h1>

        <p className="1500px:w-[657px] mt-[-12px] mx-auto text-center 1500px:pt-[45px] text-[16px] leading-6 1500px:text-[24px] 1500px:leading-[32px] font-[400] font-poppins text-[#263238] ">
          Get all question answered by joining a community of the same pair
          groups
        </p>

        <p className="mt-[60px] 1500px:text-[14px] leading-[21px] font-[500] text-center ">
          Active Community Members
        </p>

        <div className="mt-2 flex items-center justify-center">
          <div className="1500px:w-[40px] 1500px:h-[40px] rounded-full bg-[#001c15]" />
          <div className="1500px:w-[40px] 1500px:h-[40px] rounded-full ml-[-18px] bg-[#1EBFC1]" />
          <div className="1500px:w-[40px] 1500px:h-[40px] rounded-full ml-[-18px] bg-[#FFC147]" />
          <div className="1500px:w-[40px] 1500px:h-[40px] rounded-full ml-[-18px] bg-[#FF947A]" />
          <div className="1500px:w-[40px] 1500px:h-[40px] rounded-full ml-[-18px] bg-[#BF83FF]" />
          <div className="1500px:w-[40px] 1500px:h-[40px] rounded-full ml-[-18px] bg-[#1EBFC1] flex items-center justify-center">
            <p className="1500px:text-[10px] leading-[15px] text-[#fff]">
              10k+
            </p>
          </div>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-[25px] 800px:grid-cols-2 800px:gap-[25px] 1000px:grid-cols-2 1000px:gap-[25px] 1200px:grid-cols-4 1200px:gap-[35px] mb-12 border-0 1200px:[&>*:nth-child(2)]:!mt-[35px] 1200px:[&>*:nth-child(4)]:!mt-[35px] ">
          <img src={man} alt="" className="1500px:w-[270px] 1500px:h-[356px]" />
          <img
            src={man2}
            alt=""
            className="1500px:w-[270px] 1500px:h-[356px]"
          />
          <img
            src={hands}
            alt=""
            className="1500px:w-[270px] 1500px:h-[356px]"
          />
          <img
            src={redhands}
            alt=""
            className="1500px:w-[270px] 1500px:h-[356px]"
          />
        </div>

        <div className="relative flex flex-col items-center justify-center gap-1">
          <img
            src={mouse}
            alt=""
            className="w-[18px] h-[25px] 1500px:w-[24px] 1500px:h-[36px] "
          />
          <a href="#scroll">
            <div className="absolute top-1 1500px:top-2 left-[39px] 1500px:left-[50%] transform translate-x-[-50%] w-[3px] h-[5px] 1500px:w-[4.8px] 1500px:h-[7.2px] border border-[#666270] rounded-full cursor-pointer " />
          </a>

          <p className="text-[14px] leading-[28px] 1500px:leading-[18px]">
            Scroll down
          </p>
        </div>

        <h3 className="mt-[50px] text-[18px] leading-6 1500px:text-[42px] font-[600] 1500px:leading-[52px] font-poppins text-center text-[#000000] ">
          Join a Discussion & Get answers on <br /> Duwitt Community Hub
        </h3>

        <SearchHandle activeTopic={activeTopic} setActiveTopic={setActiveTopic} setTopic={setTopic} navigate={navigate} landingPage={true} />

        <div className="flex gap-5">
          <div className="flex flex-col">
            <h3 className="mt-7 1500px:text-[24px] 1500px:leading-[50px] font-[600] ">
              {topic}
            </h3>

            {topic === 'All Topics' && (
              <Posts displayPosts={displayPosts} />
            )}

            {topic === 'Trending Topics' && (
              <Posts displayPosts={displayPosts} />
            )}

            {topic === 'Featured Topics' && (
              <Posts displayPosts={displayPosts} />
            )}

            {topic === 'Discussion' && (
              <Posts displayPosts={displayPosts} />
            )}

            <div className="mt-[40px]">
              <ReactPaginate
                nextLabel="Next >"
                previousLabel="< Prev"
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName="paginationContainer"
                pageLinkClassName="pageButton"
                previousLinkClassName="prevButton"
                nextLinkClassName="nextButton"
                activeClassName="paginationActive"
              />
            </div>
          </div>

          <HotTopic/>
        </div>

        <p className="mt-[100px] 1500px:text-[24px] 1500px:leading-[52px] font-[600] ">
          Need More help?
        </p>

        <NeedHelp />
      </div>
    </>
  );
};

export default CommunityLandingPage;
