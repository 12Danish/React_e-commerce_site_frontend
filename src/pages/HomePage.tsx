import Announcements from "../components/announcements";
import Navbar from "../components/navbar";
import Slider from "../components/slider";
import Categories from "../components/categories";

const HomePage = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default HomePage;
