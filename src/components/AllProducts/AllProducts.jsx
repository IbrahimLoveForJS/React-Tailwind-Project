import BgAll from '../../assets/all-banner.jpg'
import CategoryPage from '../CategoryPage/CategoryPage';

function AllProducts() {
  return <div>
    <CategoryPage title='All Products' bgImage={BgAll} categories={['All']}/>
  </div>;
}

export default AllProducts;
