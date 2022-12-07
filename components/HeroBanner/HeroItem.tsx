import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeroContent from "../../types/HeroContent";

interface HeroItemProps {
  hero: HeroContent;
}

const HeroItem = ({ hero }: HeroItemProps) => {
  return (
    <div className="gradient_banner h-[250px] w-[475px] px-[28px] py-[28px] relative">
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
          src={hero.image.src}
          alt={hero.image.alt}
          width={hero.image.width}
          height={hero.image.height}
        ></Image>
      </div>
    </div>
  );
};

export default HeroItem;
