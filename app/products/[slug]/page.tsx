import { supabase } from '../../../supabase/index';

export const revalidate = 0;


const ProductPage = async() => {
  let { data: products } = await supabase
  .from('product')
  .select("*")
  // Filters
  .eq('slug', 'Equal to')

  console.log(products)

  return (
    <div>ProductPage</div>
  )
}

export default ProductPage
