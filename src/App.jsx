import { useRoutes } from 'react-router-dom';
import Landing from './components/pages/landing/HomePage';
import Academy from './components/pages/academy/Academy';
import Courses from './components/pages/academy/Courses';
import Layout from './components/layouts/MyLayout';
import Glossary from './components/pages/academy/Glossary';
import SingleCourseDetails from './components/pages/academy/SingleCourseDetails';
import AccessCoursePage from './components/pages/academy/AccessCoursePage';
import Blog from './components/pages/blog/Blog';
import SingleBlog from './components/blogPost/singleBlog/SingleBlog';
import Event from './components/pages/event/Event';
import Community from './components/pages/community/CommunityLandingPage';
import SingleEvent from './components/eventPost/singleEvent/SingleEvent';
import PostDetail from './components/pages/community/PostDetail';
import RegisterEvent from './components/registerEvent/RegisterEvent';
import CommunityPost from './components/pages/community/NewPost';
import FaqPage from './components/pages/faqPage/FaqPage';

export default function App() {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Landing key="landing" />,
        },
        {
          path: '/academy',
          element: <Academy key="academy" />,
        },
        {
          path: '/courses',
          element: <Courses key="courses" />,
        },
        {
          path: '/glossary',
          element: <Glossary key="glossary" />,
        },
        {
          path: '/course-details',
          element: <SingleCourseDetails key="singleCourseDetails" />,
        },
        {
          path: '/course-access',
          element: <AccessCoursePage key="accessCoursePage" />,
        },
        {
          path: '/community',
          element: <Community key="community" />,
        },
        {
          path: '/community/new-post',
          element: <CommunityPost key="communitypost" />,
        },

        {
          path: '/community/post-details/:id',
          element: <PostDetail key="postdetail" />,
        },
        {
          path: '/blog',
          element: <Blog key="blog" />,
        },
        {
          path: '/latest/:id',
          element: <SingleBlog />,
        },
        {
          path: '/events',
          element: <Event />,
        },
        {
          path: '/events/:id',
          element: <SingleEvent />,
        },
        {
          path: '/event/register',
          element: <RegisterEvent />,
        },
        {
          path: '/faq',
          element: <FaqPage />
        },
      ],
    },
  ]);
}
