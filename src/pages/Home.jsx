import Banner from "../components/Banner";
import TopBanner from "../components/TopBanner";

const Home = () => {
  return (
    <div>
      <section className="w-full my-4">
        <TopBanner />
      </section>
      <Banner />
    </div>
  )
};

export default Home;
