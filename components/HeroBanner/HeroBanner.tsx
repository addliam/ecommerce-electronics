import React, { useState } from "react";
import Image from "next/image";
import HeroItem from "./HeroItem";
import ProductOffer from "../../types/ProductOffer";
import Slider from "./Slider";

type HeroBannerProps = {
  offers: ProductOffer[];
};

const HeroBanner = ({ offers }: HeroBannerProps) => {
  const [index, setIndex] = useState(0);

  const offsetItemPercentage = 52;
  const TwoSlidesOnPixels = 966;
  const numberElements = offers.length;
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
          {offers.map((offer, indx) => (
            <HeroItem key={indx} hero={offer} />
          ))}
        </div>
      </div>
      <div className="py-3 mt-2 w-full flex items-center justify-center">
        <Slider index={index} total={maxIndex} />
      </div>
    </section>
  );
};

export default HeroBanner;
