import Banner from "../Banner/Banner";
import CategoryPage from "../CategoryPage/CategoryPage";
import BgSeaFood from "../../assets/seafood-banner.jpg";

function SeaFood() {
  return (
    <div>
      <CategoryPage
        title="Meat & SeaFood"
        bgImage={BgSeaFood}
        categories={["Meat", "Sea Food"]}
      />
    </div>
  );
}

export default SeaFood;
