import React from "react";
import HeroItem from "./HeroItem";
import HeroContent from "../../types/HeroContent";

const HeroBanner = () => {
  const fakeData: HeroContent = {
    text: "50% de descuento en Apple Watch",
    image: {
      src: "/assets/images/reloj.png",
      alt: "watch",
      width: "200",
      height: "200",
    },
  };
  return (
    <section className="w-full flex flex-row justify-center-center gap-4 py-4 px-[198px] bg-[#4852C1]">
      <HeroItem hero={fakeData} />
      <HeroItem hero={fakeData} />
    </section>
  );
};

export default HeroBanner;
