import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroItem = () => {
  return (
    <div className="gradient_1 h-[250px] w-[475px] px-[28px] py-[28px] relative">
      <div>
        <p className="text-[24px] text-white font-semibold max-w-[220px] leading-snug">
          50% de descuento en Apple Watch
        </p>
        <span className="text-white text-[16px] mt-4 block relative underlinewhite ">
          <Link href={"/watch-slug"}>Comprar ahora</Link>
        </span>
      </div>
      <div className="absolute top-4 right-4 ">
        <Image
          src="/assets/images/reloj.png"
          alt="watch"
          width="200"
          height="200"
        ></Image>
      </div>
    </div>
  );
};

export default HeroItem;
