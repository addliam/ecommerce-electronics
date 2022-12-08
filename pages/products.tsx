import React from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Navbar from "../components/Navbar/Navbar";
import ProductsList from "../components/Products/ProductsList";

const ProductsPage = () => {
  return (
    <main className="w-screen bg-[#EBEBEB]">
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
        <ProductsList />
      </div>
      <div className="w-[1366px] h-[4px] bg-slate-600">x</div>
    </main>
  );
};

export default ProductsPage;
