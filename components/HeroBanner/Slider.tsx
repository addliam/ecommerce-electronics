import React from "react";

type SliderProps = {
  index: number;
  total: number;
};

const InactiveCircle = () => {
  return <div className="w-[12px] rounded-[50%] h-[12px] bg-[#EEEEEE]"></div>;
};
const ActiveCircle = () => {
  return <div className="w-[14px] rounded-[50%] h-[14px] bg-primary"></div>;
};

const Slider = ({ index, total }: SliderProps) => {
  return (
    <div className="flex flex-row gap-3">
      {Array(total)
        .fill("x")
        .map((_, indx) => {
          return index === indx ? <ActiveCircle /> : <InactiveCircle />;
        })}
    </div>
  );
};

export default Slider;
