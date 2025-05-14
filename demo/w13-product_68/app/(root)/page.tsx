// import sampleData from '@/db/sample-data';
import ProductList_68 from '@/components/shared/product_68/product-list_68';
import { getLatestProducts_xx } from '@/lib/actions/product.actions_68';

// const delay = (ms) =>
//   new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });

const HomePage_68 = async () => {
  // await delay(5000);
  // console.log('sampleData', sampleData);
  const latestProducts = await getLatestProducts_xx();
  return (
    <>
      <ProductList_68 data={latestProducts} title='Newest Arrival' />
    </>
  );
};
export default HomePage_68;
