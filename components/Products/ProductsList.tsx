import React from "react";
import ProductItem from "./ProductItem";
import ProductShort from "../../types/ProductShort";

const ProductsList = () => {
  const fakeData: ProductShort = {
    imageSrc: "/assets/images/macbook1.png",
    name: "Apple Macbook Air (13 pulgadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM) - Gris espacial",
    slug: "apple-macbkook-air13",
    currentPrice: 25000,
    oldPrice: 25999,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab in sapiente eaque praesentium doloribus voluptatibus facere repellat dicta, accusantium ...",
    rating: 4.3,
  };
  return (
    <section className="flex flex-col gap-3  ">
      {Array(5)
        .fill(0)
        .map((x, indx) => (
          <ProductItem product={fakeData} key={indx} />
        ))}
    </section>
  );
};

export default ProductsList;
