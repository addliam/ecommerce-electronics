import React from "react";
import AnimalList from "../components/common/AnimalList";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Navbar from "../components/Navbar/Navbar";
import ProductsList from "../components/Products/ProductsList";
import ProductShort from "../types/ProductShort";

import { client, urlFor } from "../lib/sanityClient";

// 2023-12-8

const ProductsPage = ({ products }: any) => {
  const productsData: ProductShort[] = products.map((product: any) => ({
    imageSrc: urlFor(product.imageSrc).width(244).height(176).url(),
    name: product.name,
    slug: product.slug.current,
    currentPrice: product.currentPrice,
    oldPrice: product.oldPrice,
    description: product.description,
    rating: product.rating,
  }));

  console.log(productsData);

  return (
    <main className="bg-[#EBEBEB] overflow-x-hidden">
      <div></div>
      <div className="layout mx-auto w-fit max-w-[1380px]">
        <Navbar />
      </div>
      <div className="max-w-[1380px] mx-auto">
        <HeroBanner />
      </div>
      <div className="layout mx-auto w-fit max-w-[1380px]">
        <div className="w-full mt-5 mb-2">
          <h3 className="text-[1.5rem] text-text font-bold">Ofertas del dia</h3>
        </div>
        <ProductsList data={productsData} />
      </div>
    </main>
  );
};

export default ProductsPage;

export async function getStaticProps() {
  let QUERY = '*[_type == "product"]';
  const products = await client.fetch(QUERY);
  return {
    props: {
      products,
    },
  };
}
