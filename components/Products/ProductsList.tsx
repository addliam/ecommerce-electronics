import React from "react";
import ProductItem from "./ProductItem";

const ProductsList = () => {
  return (
    <section className="flex flex-col gap-3  ">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </section>
  );
};

export default ProductsList;
