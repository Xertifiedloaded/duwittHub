import { arrowRight } from '../../assets/icons';
import { features } from '../utilities';

const Features = () => {
  return (
    <div className="flex flex-wrap items-center gap-6 m-9">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="w-[283px] h-[316px] bg-[#E5FFF6] rounded-xl pt-9"
        >
          <div className="w-[85%] mx-auto">
            <div
              className={`w-[64px] h-[64px] flex items-center justify-center rounded-[8px] ${feature.theme} `}
            >
              {<img src={feature.logo} alt="" width={24} height={28} />}
            </div>

            <h2 className="pt-5 1500px:text-[20px] font-[600] 1500px:leading-[30px]">
              {feature.subheading}
            </h2>

            <p className="pt-5 text-[#9DA6A5] 1500px:text-[16px] font-[400] 1500px:leading-[27px] ">
              {feature.paragraph}
            </p>

            <div className="flex items-end">
              <p className="pt-5 text-[#000000] 1500px:text-[16px] font-[400] 1500px:leading-[27px] ">
                Get started
              </p>

              <img src={arrowRight} alt="arrow" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
