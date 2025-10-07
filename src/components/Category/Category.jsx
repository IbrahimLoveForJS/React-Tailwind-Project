import Heading from "../Heading/Heading";
import FruitsCat from "../../assets/fruits-and-veggies.png";
import DairyCat from "../../assets/dairy-and-eggs.png";
import SeaFoodCat from "../../assets/meat-and-seafood.png";
import Button from "../Button/Button";

function Category() {
  const renderCards = category.map(({ id, title, description, image }) => {
    return (
        // Card
      <div className="flex-1 basis-[300px]" key={id}>
        {/* Card Image */}
        <div className="w-full min-h-[30vh] relative -mb-10">
          <img src={image} alt={title} className="absolute bottom-0"/>
        </div>

        {/* Card Content */}

        <div className="bg-zinc-100 pt-17 p-8 rounded-xl">
          <h3 className="text-zinc-800 text-3xl font-bold">{title}</h3>
          <p className="text-zinc-600 mt-3 mb-9">{description}</p>
          <Button>See All</Button>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1200px] mx-auto px-10 py-20">
        <Heading highlight="Shop" heading="by Category" />
        {/* Category Cards */}
        <div className="flex flex-wrap gap-10 md:mt-15">{renderCards}</div>
      </div>
    </section>
  );
}

export default Category;

const category = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description:
      "Fruits & Veggies Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: FruitsCat,
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Dairy & Eggs Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: DairyCat,
  },
  {
    id: 3,
    title: "Meat & SeaFood",
    description:
      "Meat & SeaFood High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: SeaFoodCat,
  },
];
