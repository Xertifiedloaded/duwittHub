/* eslint-disable react/prop-types */
import { useNavigate, useParams } from 'react-router-dom';
import Posts from './Posts';
import SearchHandle from './SearchHandle';
import HotTopic from './HotTopic';
import { useState } from 'react';
import TextEditor from './TextEditor';
import NeedHelp from '../../../utils/cards/NeedHelp';
import { posts } from '../../../utils/utilities';

const PostDetail = () => {
  const { id } = useParams();
  const postDetail = posts.filter((p) => p.id === Number(id));

  const navigate = useNavigate();
  const [activeTopic, setActiveTopic] = useState(0);

  return (
    <div className="1500px:w-[85%] mx-auto">
      <SearchHandle
        activeTopic={activeTopic}
        setActiveTopic={setActiveTopic}
        navigate={navigate}
      />

      <div className="flex gap-8">
        <div className="1500px:mt-[30px] 1500px:flex 1500px:flex-col">
          <Posts postDetail={postDetail} />

          <div className="mb-[150px] 1500px:w-[787px] 1500px:h-[394px] border py-6 px-6 flex justify-center rounded-[10px]">
            <div className="1500px:w-full mx-auto">
              <TextEditor />
              <button className="button 1500px:mt-[55px] 1500px:!w-[146px] text-[#fff] ">
                Post reply
              </button>
            </div>
          </div>
        </div>

        <HotTopic />
      </div>

      <div className='1500px:mt-[-40px] mb-[100px]'>
        <p className="1500px:text-[24px] 1500px:leading-[52px] font-[600] ">
          Need More help?
        </p>

        <NeedHelp />
      </div>
    </div>
  );
};

export default PostDetail;
