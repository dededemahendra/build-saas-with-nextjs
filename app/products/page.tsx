import ProductCard from '@/components/card/ProductCard';
import { supabase } from '../../supabase/index';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products ',
};

const ProductsPage = async () => {
  let { data: products } = await supabase
    .from('product')
    .select('*');

  console.log(products);

  return (
    <main className="bg-white h-full w-full">
      <div className="h-[200px] flex justify-center items-center bg-[#ffeead] border-b-gray-700 border-b-2">
        <h1 className="text-6xl font-normal text-black ">
          The latest products
        </h1>
      </div>
      <div className="min-h-[100px] bg-white px-10 py-5 flex justify-center">
        <div className=" grid grid-cols-3 gap-6 justify-content-center ">
          {products?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
