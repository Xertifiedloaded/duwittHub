/* eslint-disable react/prop-types */
import { FiEye } from 'react-icons/fi';
import { BiLike } from 'react-icons/bi';
import { FiMessageSquare } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Posts = ({ displayPosts, postDetail }) => {
  const navigate = useNavigate();
  return (
    <div>
      {displayPosts
        ? displayPosts.map((post, index) => {
            let initials = post.author
              .split(' ')
              .map((word) => word[0])
              .join('');

            return (
              <div
                key={index}
                className="1500px:w-[790px] border rounded-[10px] p-3 my-3 cursor-pointer"
                onClick={() => navigate(`/community/post-details/${post.id}`)}
              >
                <div className="flex items-center gap-3">
                  <div className="1500px:w-[40px] 1500px:h-[40px] rounded-full bg-[#001c15] flex items-center justify-center ">
                    <p className="1500px:text-[16px] 1500px:leading-[32px] text-[#00FEA8] ">
                      {initials}
                    </p>
                  </div>

                  <p className="1500px:text-[16px] leading-8 ">
                    {post.author} posted on the Crypto disscussion
                  </p>
                </div>

                <p className="mt-2 1500px:text-[24px] 1500px:leading-9 font-[600] ">
                  {post.title}
                </p>

                <p className="mt-2 1500px:text-[14px] 1500px:leading-6 w-[95%] ">
                  {post.content}
                </p>

                <div className="flex items-center my-6 gap-[44px]">
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-1">
                      <FiEye size={24} />
                      <p>{post.impressions}</p>
                    </div>

                    <div className="flex items-center gap-1">
                      <BiLike />
                      <p>{post.likes}</p>
                    </div>

                    <div className="flex items-center gap-1">
                      <FiMessageSquare />
                      <p>{post.comments.length}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="1500px:w-[30px] 1500px:h-[30px] rounded-full bg-[#001c15] flex items-center justify-center ">
                      <p className="1500px:text-[14px] 1500px:leading-[32px] text-[#00FEA8] ">
                        {initials}
                      </p>
                    </div>

                    <p className="1500px:text-[14px] font-[600]">
                      {post.createdAt} ago
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        : postDetail.map((post, index) => {
            let initials = post.author
              .split(' ')
              .map((word) => word[0])
              .join('');

            return (
              <>
                <div
                  key={index}
                  className="1500px:w-[790px] border rounded-[10px] p-3 my-3 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="1500px:w-[40px] 1500px:h-[40px] rounded-full bg-[#001c15] flex items-center justify-center ">
                      <p className="1500px:text-[16px] 1500px:leading-[32px] text-[#00FEA8] ">
                        {initials}
                      </p>
                    </div>

                    <p className="1500px:text-[16px] leading-8 ">
                      {post.author} posted on the Crypto disscussion
                    </p>
                  </div>

                  <p className="mt-2 1500px:text-[24px] 1500px:leading-9 font-[600] ">
                    {post.title}
                  </p>

                  <p className="mt-2 1500px:text-[14px] 1500px:leading-6 w-[95%] ">
                    {post.content}
                  </p>

                  <div className="flex items-center my-6 gap-[44px]">
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-1">
                        <FiEye size={24} />
                        <p>{post.impressions}</p>
                      </div>

                      <div className="flex items-center gap-1">
                        <BiLike />
                        <p>{post.likes}</p>
                      </div>

                      <div className="flex items-center gap-1">
                        <FiMessageSquare />
                        <p>{post.comments.length}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="1500px:w-[30px] 1500px:h-[30px] rounded-full bg-[#001c15] flex items-center justify-center ">
                        <p className="1500px:text-[14px] 1500px:leading-[32px] text-[#00FEA8] ">
                          {initials}
                        </p>
                      </div>

                      <p className="1500px:text-[14px] font-[600]">
                        {post.createdAt} ago
                      </p>
                    </div>
                  </div>
                </div>

                <div key={index}>
                  {post?.comments?.map((comment, index) => {
                    let initials = comment.user
                      .split(' ')
                      .map((word) => word[0])
                      .join('');

                    return (
                      <div
                        key={index}
                        className="1500px:w-[790px] border rounded-[10px] p-3 my-3 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className="1500px:w-[40px] 1500px:h-[40px] rounded-full bg-[#001c15] flex items-center justify-center ">
                            <p className="1500px:text-[16px] 1500px:leading-[32px] text-[#00FEA8] ">
                              {initials}
                            </p>
                          </div>

                          <p className="1500px:text-[16px] leading-8 ">
                            {comment?.user} replied on the crypto discussion
                          </p>
                        </div>

                        <p className="mt-2 1500px:text-[14px] 1500px:leading-6 w-[95%] ">
                          {comment?.userComment}
                        </p>

                        <div className="flex items-center my-6 gap-[44px]">
                          <div className="flex items-center gap-5">
                            <div className="flex items-center gap-1">
                              <FiEye size={24} />
                              <p>{comment?.impressions}</p>
                            </div>

                            <div className="flex items-center gap-1">
                              <BiLike />
                              <p>{comment?.likes}</p>
                            </div>

                            <div className="flex items-center gap-1">
                              <FiMessageSquare />
                              <p>{comment?.replies?.length}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <div className="1500px:w-[30px] 1500px:h-[30px] rounded-full bg-[#001c15] flex items-center justify-center ">
                              <p className="1500px:text-[14px] 1500px:leading-[32px] text-[#00FEA8] ">
                                {initials}
                              </p>
                            </div>

                            <p className="1500px:text-[14px] font-[600]">
                              {comment?.createdAt} ago
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            );
          })}
    </div>
  );
};

export default Posts;
