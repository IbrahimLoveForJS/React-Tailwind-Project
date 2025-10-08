import Category from "../Category/Category";
import Discount from "../Discount/Discount";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";
import Values from "../Values";

function Home() {
  return <div>
    <Navbar />
    <Hero />
    <Category />
    <Values />
    <Products />
    <Discount />
  </div>;
}

export default Home;
