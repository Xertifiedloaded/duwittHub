import Faq from '../../faq/Faq';
import Community from '../../community/Community';
import Slide from '../../slider/carosel/Slide';
import Blog from '../../blog/Blog';
import Reason from '../../reason/ReasonPage';
import Members from '../../members/Members';
import TabUi from '../../tab/tabUi/TabUi';
import Hero from '../../hero/Hero';
export default function Landing() {
  return (
    <>
      <div>
        <Hero/>
        <Community />
        <Members />
        <Reason />
        <TabUi />
        <Faq />
        <Slide />
        <Blog />
      </div>
    </>
  );
}
