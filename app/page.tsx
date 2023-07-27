import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Epic Saas',
};

export default function Home() {
  return (
    <main className="w-full h-screen md:grid grid-cols-2 bg-white">
      <div className="bg-[#ff6f69] border-r-gray-700 border-r-2">
        <div className="w-full h-full flex flex-col items-center justify-center text-start ">
          <div className="w-full p-10">
            <h1 className="text-8xl font-normal text-black text-start">
              The most <br /> epic products
            </h1>
            <p className="text-start text-3xl text-black font-normal mt-3 ">
              All the most epic things on the
              internet, all in one place
            </p>
            <button className="px-7 py-5 mt-3 rounded-md text-3xl font-light bg-black shadow-sm text-white max-w-max outline-none">
              <Link href="/products">
                Explore Products
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#ffeead] border-r-gray-700 flex justify-center items-center">
        <Image
          src="/images/home.png"
          alt="hero"
          width={600}
          height={600}
        />
      </div>
    </main>
  );
}
