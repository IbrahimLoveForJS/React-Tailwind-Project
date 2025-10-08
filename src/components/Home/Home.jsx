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
  return <div>
    <Navbar />
    <Hero />
    <Category />
    <Values />
    <Products />
    <Discount />
    <Process />
    <Testimonials />
    <Footer />
  </div>;
}

export default Home;
