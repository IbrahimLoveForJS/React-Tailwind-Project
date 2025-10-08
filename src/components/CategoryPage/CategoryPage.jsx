import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import ProductList from "../ProductList/ProductList";

function CategoryPage({title, bgImage, categories=[]}) {
    
    let filteredItems = categories.includes('All') ? ProductList : ProductList.filter(product => categories.includes(product.category))
    
    const renderProduct = filteredItems.map(
    ({ id, name, price, category, image }) => {
      return <Cards image={image} title={name} price={price}/>
    }
  );

  return (
    <div className="">
      <Banner title={title} bgImage={bgImage}/>
      <div className="max-w-[1400px] mx-auto px-10 grid md:grid-cols-4 grid-cols-1 gap-9 py-20">
        {renderProduct}
      </div>
    </div>
  );
}

export default CategoryPage;
