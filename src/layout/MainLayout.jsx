import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageLoader from "../components/PageLoader";
import Home from "../pages/Home";


const MainLayout = () => {
  return (
    <div className="min-h-screen px-3 bg-gray-100">
      <PageLoader/>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
};

export default MainLayout;
