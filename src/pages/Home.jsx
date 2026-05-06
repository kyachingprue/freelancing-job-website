import AnimatedSection from "../components/AnimatedSection";
import Banner from "../components/Banner";
import HeroCursorSection from "../components/HeroCursorSection";
import LetterAnimation from "../components/LetterAnimation";
import OurServices from "../components/OurServices";
import Semantic from "../components/Semantic";
import StackedCards from "../components/StackedCards";
import TopBanner from "../components/TopBanner";

const Home = () => {
  return (
    <div>
      <section className="w-full mb-2">
        <TopBanner />
      </section>
      <Banner />
      <Semantic />
      <AnimatedSection />
      <OurServices />
      <HeroCursorSection />
      <StackedCards />
      <LetterAnimation/>
    </div>
  )
};

export default Home;
