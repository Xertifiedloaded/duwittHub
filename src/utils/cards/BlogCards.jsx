/* eslint-disable react/prop-types */

import { crypto } from '../../assets/icons';
import BlogCardComponent from './BlogCardComponent';

const BlogCard = ({ recentBlog }) => {
  return (
    <div
      className={`${
        recentBlog ? 'w-[85%] lg:w-[70%] 1300px:w-[85%] mx-auto' : ''
      }  `}
    >
      <div
        className={`grid grid-cols-1 ${
          recentBlog ? '1500px:grid-cols-3 1500px:gap-y-7' : ''
        } `}
      >
        <BlogCardComponent
          image={crypto}
          date="2023-11-21"
          subheading="How to collaborate with companies"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non nisl tincidunt ut elementum turpis."
          recentBlog={true}
        />

        <BlogCardComponent
          image={crypto}
          date="2023-11-21"
          subheading="How to collaborate with companies"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non nisl tincidunt ut elementum turpis."
          recentBlog={true}
        />

        <BlogCardComponent
          image={crypto}
          date="2023-11-21"
          subheading="How to collaborate with companies"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non nisl tincidunt ut elementum turpis."
          recentBlog={true}
        />
        <BlogCardComponent
          image={crypto}
          date="2023-11-21"
          subheading="How to collaborate with companies"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non nisl tincidunt ut elementum turpis."
          recentBlog={true}
        />
        <BlogCardComponent
          image={crypto}
          date="2023-11-21"
          subheading="How to collaborate with companies"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non nisl tincidunt ut elementum turpis."
          recentBlog={true}
        />
      </div>
    </div>
  );
};

export default BlogCard;
