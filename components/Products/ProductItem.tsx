import React from "react";
import Image from "next/image";

const StarYellow = () => {
  return (
    <Image
      src={"/assets/icons/star-yellow.svg"}
      alt="yellow star"
      width="12"
      height="12"
    ></Image>
  );
};
const StarGray = () => {
  return (
    <Image
      src={"/assets/icons/star-gray.svg"}
      alt="gray star"
      width="12"
      height="12"
    ></Image>
  );
};
const numberStars = 4;
const ProductItem = () => {
  return (
    <div className="flex flex-row w-auto bg-white">
      <div className="flex flex-row justify-center items-center w-[15.25em] h-[11em] ">
        <Image
          src={"/assets/images/macbook1.png"}
          width="224"
          height="142"
          alt="macbook"
        ></Image>
      </div>
      <div className="px-4 py-4 flex flex-col gap-3 max-w-[580px]">
        <div>
          <span className="text-[1.125em] text-text font-semibold">
            Apple Macbook Air (12 pulgadas, 2020, Chip M1, 256GB de SSD, 8 GB de
            RAM) - Gris espacial
          </span>
        </div>
        <div className="price flex flex-row gap-2">
          <span className="text-[14px] font-medium text-text">$25,000</span>
          <span className="text-[14px] font-medium text-primary line-through">
            $25.999
          </span>
          <div className="valoration flex flex-row gap-1">
            {Array(numberStars)
              .fill("x")
              .map((_) => (
                <StarYellow />
              ))}
            {Array(5 - numberStars)
              .fill("x")
              .map((_) => (
                <StarGray />
              ))}
          </div>
        </div>
        <div className="descr">
          <span className="text-[14px] text-subtextcolor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid hic
            reprehenderit dolor eos omnis dolore nisi ullam error corporis
            recusandae ...
          </span>
        </div>
      </div>
      <div className="buttons flex px-2 items-center pr-4">
        <div className="flex flex-col gap-2">
          <button className="text-[15px] w-[10em] text-center py-2 bg-primary text-white">
            Comprar ahora
          </button>
          <button className="text-[15px] w-[10em] py-2 bg-transparent border-[1px] border-primary text-primary">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
