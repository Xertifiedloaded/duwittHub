/* eslint-disable react/prop-types */
const BlogCardComponent = ({
    image,
    date,
    subheading,
    paragraph,
    recentBlog,
  }) => {
    return (
      <div
        className={`${
          recentBlog
            ? '1500px:w-[403px] 1500px:h-[587px] bg-[#F1F1F1]'
            : '1500px:w-[587px] 1500px:h-[617px] bg-[#FFFFFF]'
        } w-full rounded-[8px]`}
      >
        <img
          src={image}
          alt=""
          className={`${
            recentBlog ? 'h-[305px]' : 'h-[329px]'
          } w-full object-cover rounded-t-[8px]`}
        />
  
        <div className="pt-5 w-[90%] mx-auto">
          <p
            className="text-[14px] 1500px:leading-[30px] 1500px:text-[16px] font-600 text-[#00FEA8]"
            style={{ fontFamily: 'Darker Grotesque, sans-serif' }}
          >
            {date}
          </p>
  
          <h3
            className={` ${
              recentBlog
                ? '1500px:text-[28px] 1500px:leading-[38px] '
                : '1500px:text-[36px] 1500px:leading-[38px] '
            } pt-3 1500px:pt-0 font-poppins font-[600] text-[#181817]`}
          >
            {subheading}
          </h3>
  
          <p className="pt-4 1500px:pt-2 1500px:leading-[30px] font-400 font-poppins ">
            {paragraph}
          </p>
  
          <p
            className="1500px:py-4 1500px:text-[23px] font-400 1500px:leading-[31.19px] text-[#181817] underline underline-offset-8 cursor-pointer "
            style={{ fontFamily: 'Darker Grotesques, sans-serif' }}
          >
            READ MORE
          </p>
        </div>
      </div>
    );
  };
  
  export default BlogCardComponent;
  