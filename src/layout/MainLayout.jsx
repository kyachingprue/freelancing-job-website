import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageLoader from "../components/PageLoader";
import Home from "../pages/Home";


const MainLayout = () => {
  return (
    <div className="min-h-screen py-3 px-3 bg-gray-200">
      <PageLoader/>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
};

export default MainLayout;
