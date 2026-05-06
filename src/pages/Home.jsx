import AnimatedSection from "../components/AnimatedSection";
import Banner from "../components/Banner";
import CardScroll from "../components/CardScroll";
import CardSection from "../components/CardSection";
import HeroCursorSection from "../components/HeroCursorSection";
import LetterAnimation from "../components/LetterAnimation";
import OurServices from "../components/OurServices";
import Semantic from "../components/Semantic";
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
      <CardScroll />
      <CardSection/>
      <LetterAnimation/>
    </div>
  )
};

export default Home;
