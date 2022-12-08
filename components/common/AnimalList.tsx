import React from "react";
import Animal from "../../types/Animal";

type AnimalProps = {
  animal: Animal;
};
const AnimalList = ({ animal }: AnimalProps) => {
  return (
    <div>
      <span>{animal.name} -</span>
      <span> {animal.age}</span>
    </div>
  );
};

export default AnimalList;
