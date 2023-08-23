import React, { useState } from "react";
import { Rain } from "react-rainfall";

const Rotate = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(false);
  const [num3, setNum3] = useState(false);
  const [num4, setNum4] = useState(false);
  return (
    <div className="relative overflow-hidden w-screen h-screen bg-gray-900">
      <Rain
        numDrops={500}
        // rainEffect="rainbow"
        showImpact={true}
        dropletColor="rgb(0, 144, 255)"
      />

      <div className="flex space-x-4">
        <div
          onClick={() => {
            setNum1(1);
          }}
          className="p-4 bg-gray-200 rounded-xl w-fit cursor-pointer"
        >
          1
        </div>
        <div
          onClick={() => {
            setNum1(2);
          }}
          className="p-4 bg-gray-200 rounded-xl w-fit cursor-pointer"
        >
          1
        </div>
        <div
          onClick={() => {
            setNum1(3);
          }}
          className="p-4 bg-gray-200 rounded-xl w-fit cursor-pointer"
        >
          1
        </div>
        <div
          onClick={() => {
            setNum1(4);
          }}
          className="p-4 bg-gray-200 rounded-xl w-fit cursor-pointer"
        >
          1
        </div>
      </div>
      <div className={`top-[100px] -right-[0%] absolute`}>
        <div
          className={`relative w-[500px] transition-all duration-1000 h-[500px] rounded-full ${
            num1 == 4
              ? "rotate-90"
              : num1 == 3
              ? "rotate-180"
              : num1 == 1
              ? "-rotate-90"
              : "rotate-0"
          } bg-rose-200  `}
        >
          <picture>
            <img
              src="/bg2.jpg"
              alt=""
              className="rounded-full saturate-200 w-48 h-48 border-8 top-0 border-gray-200/10 backdrop-blur-xl -translate-y-[50%] -translate-x-[50%] left-[50%] absolute "
            />
          </picture>
          <picture>
            <img
              src="/bg1.jpg"
              alt=""
              className="rounded-full hue-rotate-180 w-48 h-48 top-[50%] -translate-y-[60%]  -translate-x-[50%] left-0 absolute "
            />
          </picture>
          <picture>
            <img
              src="/bg3.jpg"
              alt=""
              className="rounded-full grayscale w-48 h-48 top-[50%] -translate-y-[60%] -translate-x-[50%] -right-[50%] absolute "
            />
          </picture>
          <picture>
            <img
              src="/bg4.jpg"
              alt=""
              className="rounded-full w-48 h-48 -bottom-[50%] -translate-y-[60%] -translate-x-[50%] left-[50%] absolute "
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Rotate;
