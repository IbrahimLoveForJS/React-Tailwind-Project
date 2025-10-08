import Category from "../Category/Category";
import Discount from "../Discount/Discount";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Process from "../Process/Process";
import Products from "../Products/Products";
import Testimonials from "../Testimonials/Testimonials";
import Values from "../Values";

function Home() {
  return (
    <div>
      <Hero />
      <Category />
      <Values />
      <Products />
      <Discount />
      <Process />
      <Testimonials />
    </div>
  );
}

export default Home;
