import React from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Navbar from "../components/Navbar/Navbar";

const ProductsPage = () => {
  return (
    <main className="w-screen">
      <div className="layout mx-auto w-fit max-w-[1380px]">
        <Navbar />
      </div>
      <div className="max-w-[1380px] mx-auto">
        <HeroBanner />
      </div>
      <div className="layout mx-auto w-fit max-w-[1380px]">
        <Navbar />
      </div>
    </main>
  );
};

export default ProductsPage;
