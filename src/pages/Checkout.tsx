import Announcements from "../components/Announcements";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CheckoutForm from "../components/CheckoutForm";
const Checkout = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <CheckoutForm />
      <Footer />
    </div>
  );
};

export default Checkout;
