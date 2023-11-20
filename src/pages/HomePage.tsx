import Announcements from "../components/Announcements";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import ProductList from "../components/ProductList";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";


const HomePage = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
      <ProductList />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;
