import React from "react";
import HeroItem from "./HeroItem";
import HeroContent from "../../types/HeroContent";

const HeroBanner = () => {
  const fakeData1: HeroContent = {
    text: "50% de descuento en Apple Watch",
    image: {
      src: "/assets/images/reloj.png",
      alt: "watch",
      width: "200",
      height: "200",
    },
    slug: "/product-slug1",
  };
  const fakeData2: HeroContent = {
    text: "40% de descuento en Headphones",
    image: {
      src: "/assets/images/audifonos.png",
      alt: "headphones",
      width: "240",
      height: "240",
    },
    slug: "/product-slug2",
  };
  return (
    <section className="w-full flex flex-row justify-center-center gap-4 py-4 px-[12.375em] bg-[#4852C1]">
      <HeroItem hero={fakeData1} />
      <HeroItem hero={fakeData2} />
    </section>
  );
};

export default HeroBanner;
