import Category from "../Category/Category";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Values from "../Values";

function Home() {
  return <div>
    <Navbar />
    <Hero />
    <Category />
    <Values />
  </div>;
}

export default Home;
