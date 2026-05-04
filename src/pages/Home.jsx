import Banner from "../components/Banner";
import Semantic from "../components/Semantic";
import TopBanner from "../components/TopBanner";

const Home = () => {
  return (
    <div>
      <section className="w-full my-4">
        <TopBanner />
      </section>
      <Banner />
      <Semantic/>
    </div>
  )
};

export default Home;
