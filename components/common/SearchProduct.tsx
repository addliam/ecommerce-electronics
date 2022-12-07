import React from "react";
import Image from "next/image";

const SearchProduct = () => {
  return (
    <div className="h-[30px] flex flex-row gap-[0] w-fit items-center">
      <input
        className="border-[1px] text-[16px] w-[400px] border-[#8A8FB9] px-[8px] py-[2px]  "
        type="text"
        placeholder="Search product"
      />
      <button className="bg-primary border-[1px] border-[#8A8FB9] px-[12px] h-[30px]">
        <Image
          src="/assets/icons/Search.svg"
          alt="search"
          width="18"
          height="18"
        ></Image>
      </button>
    </div>
  );
};

export default SearchProduct;
