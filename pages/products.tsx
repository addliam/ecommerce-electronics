import React, { useEffect } from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Navbar from "../components/Navbar/Navbar";
import ProductsList from "../components/Products/ProductsList";
import ProductShort from "../types/ProductShort";
import ProductOffer from "../types/ProductOffer";
import { client, urlFor } from "../lib/sanityClient";

// 2023-12-8

const ProductsPage = ({ products, offers }: any) => {
  const productsData: ProductShort[] = products.map((product: any) => ({
    _id: product._id,
    imageSrc: urlFor(product.imageSrc).width(244).height(176).url(),
    name: product.name,
    slug: product.slug.current,
    currentPrice: product.currentPrice,
    oldPrice: product.oldPrice,
    description: product.description,
    rating: product.rating,
  }));
  const offersData: ProductOffer[] = offers.map((offer: any) => ({
    slug: offer.slug,
    imageSrc: urlFor(offer.image).url(),
    text: offer.text,
  }));
  return (
    <main className="bg-[#EBEBEB] overflow-x-hidden">
      <div></div>
      <div className="layout mx-auto w-fit max-w-[1380px]">
        <Navbar />
      </div>
      <div className="max-w-[1380px] mx-auto">
        <HeroBanner offers={offersData} />
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
  let QUERYOFFER = `*[_type == "productoffer"] {
    image,
    text,
    "slug": *[_id == ^.productref._ref][0].slug.current
  }`;
  const offers = await client.fetch(QUERYOFFER);
  return {
    props: {
      products,
      offers,
    },
  };
}
