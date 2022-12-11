import React from "react";
import Image from "next/image";
import ProductShort from "../../types/ProductShort";

const StarYellow = () => {
  return (
    <div className="w-[14px] h-[14px] flex justify-center items-center">
      <Image
        src={"/assets/icons/star-yellow.svg"}
        alt="yellow star"
        width={12}
        height={12}
      ></Image>
    </div>
  );
};
const StarGray = () => {
  return (
    <div className="w-[14px] h-[14px] flex justify-center items-center">
      <Image
        src={"/assets/icons/star-gray.svg"}
        alt="gray star"
        width={12}
        height={12}
      ></Image>
    </div>
  );
};

type ProductItemProps = {
  product: ProductShort;
};

const formatThreeDigits = (value: number): string => {
  let str = `${value}`;
  let res = "";
  let len = str.length;
  for (let i = len - 1; i >= 0; i--) {
    res += str[i];
    if ((len - i) % 3 === 0 && i !== 0) {
      res += ",";
    }
  }
  return res.split("").reverse().join("");
};

const ProductItem = ({ product }: ProductItemProps) => {
  const numberStars = product.rating ? ~~product.rating : 1;
  const excedent = 5 - numberStars;

  const buyThisItem = () => {
    console.log(`Trying buy item with ID: ${product._id}`);
  };

  return (
    <div className="flex flex-row w-auto bg-white">
      <div className="px-2 py-3 flex flex-row justify-center items-center w-[15.25em] min-h-[11em] ">
        <div className="w-full h-full relative flex justify-center items-center">
          <Image
            src={product.imageSrc}
            alt={product.slug}
            fill={true}
            style={{ objectFit: "contain" }}
          ></Image>
        </div>
      </div>
      <div className="px-4 py-4 flex flex-col gap-3 max-w-[580px]">
        <div>
          <span className="text-[1.125em] text-text font-semibold">
            {product.name}
          </span>
        </div>
        <div className="price flex flex-row gap-2">
          <span className="text-[14px] font-medium text-text">
            {`$${formatThreeDigits(product.currentPrice)}`}
          </span>
          <span className="text-[14px] font-medium text-primary line-through">
            {`$${formatThreeDigits(product.oldPrice)}`}
          </span>
          <div className="valoration items-center flex flex-row gap-1 w-auto h-auto">
            {Array(numberStars)
              .fill("x")
              .map((_, indx) => (
                <StarYellow key={indx} />
              ))}
            {Array(excedent)
              .fill("x")
              .map((_, indx) => (
                <StarGray key={indx} />
              ))}
          </div>
        </div>
        <div className="descr">
          <span className="text-[14px] text-subtextcolor">
            {/* 226 len */}
            {product.description.length < 226
              ? product.description
              : `${product.description.split("").slice(0, 226).join("")}...`}
          </span>
        </div>
      </div>
      <div className="buttons flex px-2 items-center pr-4">
        <div className="flex flex-col gap-2">
          <button
            onClick={() => buyThisItem()}
            className="text-[15px] w-[10em] text-center py-2 bg-primary text-white"
          >
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
