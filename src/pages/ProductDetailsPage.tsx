import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { productDetail } from "../assets/data";
import SingleProductDetails from "../components/SingleProductDetails";
const ProductDetailsPage = () => {
  return (
    <div>
      {/*Appending these components which I have defined */}
      <Announcements />
      <Navbar />
      {/*Mapping the details of the element received within the JSON Response to  SingleProductDetails Component 
       which will handle the data as per requirement
      */}
      {productDetail.map((product) => (
        <SingleProductDetails product={product} key={product.id} />
      ))}
      {/*Adding these components which I have defined */}
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
