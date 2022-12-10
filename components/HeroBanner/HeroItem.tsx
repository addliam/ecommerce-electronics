import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProductOffer from "../../types/ProductOffer";

interface HeroItemProps {
  hero: ProductOffer;
}

const HeroItem = ({ hero }: HeroItemProps) => {
  return (
    <div className="gradient_banner flex-shrink-0 h-[250px] w-[475px] px-[28px] py-[28px] relative">
      <div>
        <p className="text-[24px] text-white font-semibold max-w-[220px] leading-snug">
          {hero.text}
        </p>
        <span className="text-white text-[16px] mt-4 block relative underlinewhite ">
          <Link href={hero.slug}>Comprar ahora</Link>
        </span>
      </div>
      <div className="absolute top-4 right-4 ">
        <Image
          src={hero.imageSrc}
          alt={"banner offer product"}
          width={240}
          height={240}
        ></Image>
      </div>
    </div>
  );
};

export default HeroItem;
