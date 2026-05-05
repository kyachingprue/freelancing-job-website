import { ArrowRightIcon } from "lucide-react";
import image from "../assets/announcement.jpg"
import LogoSlider from "./LogoSlider";

const Semantic = () => {
  return (
    <section className="w-full py-10">
      <LogoSlider/>
      <div className="px-4 py-12 flex justify-between items-center flex-col md:flex-row gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-bold pb-24 text-black">
            A global team of search-first content marketers engineering semantic
            relevancy & category <br /> signals for both the internet and people
          </h2>
        </div>
        <div className="flex-1">
          <h2 className="text-4xl md:text-7xl font-medium text-black">
            Driving Demand &{' '}
            <span className="inline-flex items-center gap-2 whitespace-nowrap">
              Discovery
              <img
                className="w-12 h-12 md:w-20 md:h-20 rounded-xl"
                src={image}
                alt="Announcement image"
              />
            </span>
          </h2>
          {/* Button */}
          <div className="pt-6 flex items-center gap-4">
            <button className="bg-white text-black flex gap-3 items-center font-medium py-3 px-5 rounded-full">
              Our Story <ArrowRightIcon size={20} />{' '}
            </button>
            <button className=" text-black flex items-center gap-3 font-medium py-3 px-5">
              Our Services <ArrowRightIcon size={20} />{' '}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Semantic;
