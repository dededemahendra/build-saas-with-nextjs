import Link from 'next/link';
import Image from 'next/image';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const ProductCard = ({ product }: any) => {
  return (
    <div className="card border-2 border-gray-700">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={`/images/${product.slug}.png`}
          alt={product.name}
          width={400}
          height={500}
          className=" z-20"
        />
      </Link>
      <div className="p-3 border-t-2 border-t-gray-700">
        <h3 className="text-black text-2xl font-serif ">
          {product.name}
        </h3>
      </div>

      <div className=" border-t-2 border-t-gray-700 flex justify-between items-center capitalize w-full ">
        <Link href={`/products/${product.slug}`} className='w-full'>
          <button className=" text-slate-800 border-r-2 border-r-gray-700 text-xl bg-[#baffc9] px-5 py-2 cursor-pointer w-full flex items-center gap-2 ">
            Let's Check
            <BsFillArrowRightCircleFill />
          </button>
        </Link>

        <p className="text-black lowercase text-xl px-5 py-2 cursor-pointer w-7/12 ">
          #{product.category}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
