import React from "react";
import ProductItem from "./ProductItem";
import ProductShort from "../../types/ProductShort";

type ProductsListProps = {
  data: ProductShort[];
};

const ProductsList = ({ data }: ProductsListProps) => {
  return (
    <section className="flex flex-col gap-3  ">
      {data.length > 0 ? (
        data.map((product, indx) => (
          <ProductItem product={product} key={indx} />
        ))
      ) : (
        <></>
      )}
    </section>
  );
};

export default ProductsList;
