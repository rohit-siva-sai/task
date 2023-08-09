import React, { useState } from "react";
import styles from "../styles/Demo.module.css";
const Demo = () => {
  const [name, setName] = useState("hue-rotatse-180");
  let l = 1782;
  // let array = new Array()
  let d = 14;
  return (
    <div>
      <div
        className={`${styles.bg1} max-w-screen  overflow-hidden bg-contain relative`}
      >
        <div>
          <picture>
            <img
              src="/homebg1.webp"
              className={`brightness-110 ${name}  contrast-150s   saturate-15s0 xhue-rotate-180`}
              alt=""
            />
          </picture>
        </div>
        <div className="absolute -top-24 left-0 rotate-0 z-20">
          <picture>
            <img
              src="https://i.gifer.com/2ii5.gif"
              className=" rotate-12 opacity-5 border mix-blend-lighten w-[1500px] h-[1000px]"
              alt=""
            />
          </picture>
        </div>
        <div className="flex fixed bottom-4 left-4 space-x-2 z-50">
          <div
            onClick={() => {
              setName("contrast-150");
            }}
            className="w-8 h-8 flex justify-center items-center font-semibold bg-gray-50/10 rounded-full cursor-pointer p-2 text-white "
          >
            1
          </div>
          <div
            onClick={() => {
              setName("contrast-200");
            }}
            className="w-8 h-8 flex justify-center items-center font-semibold bg-gray-50/10 rounded-full cursor-pointer p-2 text-white "
          >
            2
          </div>
          <div
            onClick={() => {
              setName("saturate-150");
            }}
            className="w-8 h-8 flex justify-center items-center font-semibold bg-gray-50/10 rounded-full cursor-pointer p-2 text-white "
          >
            3
          </div>
          <div
            onClick={() => {
              setName("saturate-200");
            }}
            className="w-8 h-8 flex justify-center items-center  bg-gray-50/10 rounded-full cursor-pointer font-semibold text-white "
          >
            4
          </div>
          <div
            onClick={() => {
              setName("grayscale");
            }}
            className="w-8 h-8 flex justify-center items-center font-semibold bg-gray-50/10 rounded-full cursor-pointer p-2 text-white "
          >
            5
          </div>
          <div
            onClick={() => {
              setName("sepia");
            }}
            className="w-8 h-8 flex justify-center items-center font-semibold bg-gray-50/10 rounded-full cursor-pointer p-2 text-white "
          >
            6
          </div>
          <div
            onClick={() => {
              setName("invert");
            }}
            className="w-8 h-8 flex justify-center items-center font-semibold bg-gray-50/10 rounded-full cursor-pointer p-2 text-white "
          >
            7
          </div>
          <div
            onClick={() => {
              setName("hue-rotate-15");
            }}
            className="w-8 h-8 flex justify-center items-center font-semibold bg-gray-50/10 rounded-full cursor-pointer p-2 text-white "
          >
            8
          </div>
          <div
            onClick={() => {
              setName("hue-rotate-30");
            }}
            className="w-8 h-8 flex justify-center items-center font-semibold bg-gray-50/10 rounded-full cursor-pointer p-2 text-white "
          >
            9
          </div>
          <div
            onClick={() => {
              setName("hue-rotate-60");
            }}
            className="w-8 h-8 flex justify-center items-center font-semibold bg-gray-50/10 rounded-full cursor-pointer p-2 text-white "
          >
            10
          </div>
          <div
            onClick={() => {
              setName("hue-rotate-90");
            }}
            className="w-8 h-8 flex justify-center items-center font-semibold bg-gray-50/10 rounded-full cursor-pointer p-2 text-white "
          >
            11
          </div>
          <div
            onClick={() => {
              setName("-hue-rotate-30");
            }}
            className="w-8 h-8 flex justify-center items-center font-semibold bg-gray-50/10 rounded-full cursor-pointer p-2 text-white "
          >
            12
          </div>
          <div
            onClick={() => {
              setName("-hue-rotate-60");
            }}
            className="w-8 h-8 flex justify-center items-center font-semibold bg-gray-50/10 rounded-full cursor-pointer p-2 text-white "
          >
            13
          </div>
          <div
            onClick={() => {
              setName("-hue-rotate-90");
            }}
            className="w-8 h-8 flex justify-center items-center font-semibold bg-gray-50/10 rounded-full cursor-pointer p-2 text-white "
          >
            14
          </div>
          <div
            onClick={() => {
              setName("-hue-rotate-180");
            }}
            className="w-8 h-8 flex justify-center items-center font-semibold bg-gray-50/10 rounded-full cursor-pointer p-2 text-white "
          >
            15
          </div>
         
        </div>

        {/* <div className={`z-40 absolute top-0 flex justify-center w-full scale-150 h-[150vh] ${styles.effect}`}>
       {[...Array(100)].map((u,index)=>{
          return (
            <p className={`w-[2px] \ left-[${Math.floor(Math.random() *  1700)}px] delay-[${Math.random()*7 - 7 }s] duration-[${Math.random()*3}s] ${styles.rain} `}   >hgsvhsvhgvs</p>
          )
        })}
       </div> */}
        <div className="grid  w-full h-full text-white  grid-cols-2 absolute top-0 left-0 ">
          <div
            className={`bg-gradient-to-b from-[#000AFF]/[0.32] from-[84%] via-[#510202]/[0.3] to-[#260606]/[0.50] mix-blend-overlay bg-opacity-[0.32] border-white z-40 basis-[52%] md:basis-[51%] `}
          >
            <div className="h-990px"></div>
          </div>
          <div
            className={`bg-gradient-to-b from-[#FF0000]/[0.12] from-[88%]  via-[#034E06]/[0.8] to-[#061E4D]/[0.60] mix-blend-color-burn basis-[48%] md:basis-[49%] h-990px`}
          >
            <div className="h-990px"></div>
          </div>
        </div>
        <div className="h-800px absolute top-0 left-0 w-screen  grid  justify-items-center  grid-cols-2">
          <picture>
            <img
              src="/thunder3.gif"
              className={`${styles.opacity} h-[990px] `}
              alt=""
            />
          </picture>
          <picture>
            <img
              src="/thunder3.gif"
              className={`${styles.opacity} h-[990px]`}
              alt=""
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Demo;
