import React from "react";
import AnimalList from "../components/common/AnimalList";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Navbar from "../components/Navbar/Navbar";
import ProductsList from "../components/Products/ProductsList";
import Animal from "../types/Animal";

import axios from "axios";

let PROJECT_ID = "bxabpyrr";
let DATASET = "production";
let QUERY = encodeURIComponent('*[_type == "animal"]');
let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

const ProductsPage = ({ animals }: any) => {
  const fakeDataAnimal: Animal = {
    name: "poppy",
    age: 14,
  };
  const animalData: Animal[] = animals;

  return (
    <main className="bg-[#EBEBEB] overflow-x-hidden">
      <div className="layout mx-auto w-fit max-w-[1380px]">
        <Navbar />
      </div>
      <div className="max-w-[1380px] mx-auto">
        <HeroBanner />
      </div>
      <div className="layout mx-auto w-fit max-w-[1380px]">
        <div className="w-full mt-5 mb-2">
          <h3 className="text-[1.5rem] text-text font-bold">Ofertas del dia</h3>
        </div>
        <ProductsList />
      </div>
      {/* <div className="w-[1366px] h-[20px] bg-slate-600">x</div> */}
      <div className="debug px-8">
        {animalData.map((anim, indx) => {
          return <AnimalList animal={anim} key={indx} />;
        })}
      </div>
    </main>
  );
};

export default ProductsPage;

export async function getStaticProps() {
  const res = await axios.get(URL);
  const animals = res.data.result;
  return {
    props: {
      animals,
    },
  };
}
