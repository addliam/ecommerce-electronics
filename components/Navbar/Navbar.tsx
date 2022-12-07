import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchProduct from "../common/SearchProduct";

const Navbar = () => {
  return (
    <nav className="h-[4.25em] w-fit flex items-center gap-2">
      <ul className="flex flex-row items-center w-fit ">
        <li className="px-[1em] py-[.25em]">
          <Link href={"/"}>
            <Image
              src={"/assets/icons/drake-icon.svg"}
              width="35"
              height="35"
              alt="drake main brand"
            ></Image>
          </Link>
        </li>
        <li className="px-[1em] py-[.25em]">
          <Link href={"/products"}>Productos</Link>
        </li>
        <li className="px-[1em] py-[.25em]">
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li className="px-[1em] py-[.25em]">
          <Link href={"/store"}>Tienda</Link>
        </li>
        <li className="px-[1em] py-[.25em]">
          <Link href={"/contact"}>Contacto</Link>
        </li>
        <li className="px-[1em] py-[.25em]">
          <Link href={"/cart"}>
            <Image
              src={"/assets/icons/shopping-cart.svg"}
              alt="shopping cart"
              width="32"
              height="32"
            ></Image>
          </Link>
        </li>
      </ul>
      <SearchProduct />
    </nav>
  );
};

export default Navbar;
