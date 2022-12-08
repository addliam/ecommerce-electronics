import React, { useState } from "react";
import Image from "next/image";
import HeroItem from "./HeroItem";
import HeroContent from "../../types/HeroContent";
import Slider from "./Slider";

const HeroBanner = () => {
  const [index, setIndex] = useState(0);
  const fakeData1: HeroContent = {
    text: "50% de descuento en Apple Watch",
    image: {
      src: "/assets/images/reloj.png",
      alt: "watch",
    },
    slug: "/product-slug1",
  };
  const fakeData2: HeroContent = {
    text: "40% de descuento en Headphones",
    image: {
      src: "/assets/images/audifonos.png",
      alt: "headphones",
    },
    slug: "/product-slug2",
  };
  const fakeData3: HeroContent = {
    text: "20% de descuento en Auriculares",
    image: {
      src: "/assets/images/audifonos.png",
      alt: "headphones",
    },
    slug: "/product-slug2",
  };
  const offsetItemPercentage = 52;
  const TwoSlidesOnPixels = 966;
  const numberElements = 5;
  const maxIndex = Math.ceil(numberElements / 2);
  const moveLeft = () => {
    setIndex((prev): any => {
      if (prev <= 0) {
        return 0;
      } else {
        return prev - 1;
      }
    });
  };
  const moveRight = () => {
    setIndex((prev): any => {
      if (prev >= maxIndex - 1) {
        return prev;
      } else {
        return prev + 1;
      }
    });
  };
  return (
    <section className="w-full relative py-4 bg-[#4852C1] overflow-hidden">
      <div
        onClick={() => moveLeft()}
        className="cursor-pointer absolute z-20 left-[7em] top-[40%] rounded-[50%] w-fit h-fit px-2 py-2"
      >
        <Image
          src="/assets/icons/chevron-left.svg"
          width={32}
          height={32}
          alt="chevron left"
        ></Image>
      </div>
      <div
        onClick={() => moveRight()}
        className="cursor-pointer absolute z-20 right-[7em] top-[40%] rounded-[50%] w-fit h-fit px-2 py-2"
      >
        <Image
          src="/assets/icons/chevron-right.svg"
          width={32}
          height={32}
          alt="chevron left"
        ></Image>
      </div>
      <div
        style={{ maxWidth: `${TwoSlidesOnPixels}px` }}
        className="overflow-hidden mx-auto h-auto"
      >
        <div
          style={{
            transform: `translateX(-${
              TwoSlidesOnPixels * index + index * 16
            }px)`,
          }}
          className="smoothTransition flex flex-row gap-4 justify-center-center"
        >
          <HeroItem hero={fakeData1} />
          <HeroItem hero={fakeData2} />
          <HeroItem hero={fakeData3} />
          <HeroItem hero={fakeData2} />
          <HeroItem hero={fakeData2} />
          <HeroItem hero={fakeData3} />
        </div>
      </div>
      <div className="py-3 mt-2 w-full flex items-center justify-center">
        <Slider index={index} total={maxIndex} />
      </div>
    </section>
  );
};

export default HeroBanner;
