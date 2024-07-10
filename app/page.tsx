"use client";
import { TypeAnimation } from "react-type-animation";
import Searchbar from "@/components/Searchbar";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { getAllProducts } from "@/lib/actions"
import ProductCard from "@/components/ProductCard"

const Home = async() => {
  const allProducts = await getAllProducts();
  return (
    <>
      <section className="px-6 md:px-20 border-2 border-purple-700">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">Happy Shopping</p>
            <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                Hi, Welcome to  </span>
              <TypeAnimation
                sequence={[
                  'Ecommerce - Best Price',
                  1000,
                  'Your Own Trusted Website',
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="inline-block"
              />
            </h1>
            <Searchbar /> 
          </div>
          <HeroSection />
        </div>
        <section className="trending-section">
          <h2 className="section-text"> Trending </h2>
          <div className="flex flex-wrap gap-x-8 gap-y-16">
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        </section>
      </section>
    </>
  );
}

export default Home;
