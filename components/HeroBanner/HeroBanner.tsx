import React from "react";
import HeroItem from "./HeroItem";

const HeroBanner = () => {
  return (
    <section className="w-full flex flex-row justify-center-center gap-4 py-4 px-[198px] bg-[#4852C1]">
      <HeroItem />
      <HeroItem />
    </section>
  );
};

export default HeroBanner;
