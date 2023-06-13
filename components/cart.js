import React from "react";
import Comp from "./comp";

const Cart = () => {
  return (
    <div className="bg-gradient-to-r from-pink-400 py-20 flex flex-col items-center space-y-24 via-rose-400 to-yellow-300">
        <p className="text-5xl font-bold text-white text-center">Order Now</p>
      <div className="flex justify-center items-center space-x-24 ">
        <Comp
          img={"/bg2.jpg"}
          head={"pizza"}
          text={"Lorem Ipsum has been the industry's standard dummy text"}
        />
        <Comp
          img={"/bg3.jpg"}
          head={"pasta"}
          text={"Lorem Ipsum has been the industry's standard dummy text"}
        />
        <Comp
          img={"/bg4.jpg"}
          head={"burger"}
          text={"Lorem Ipsum has been the industry's standard dummy text"}
          
        />
      </div>
      <div className="bg-gray-300/30 font-extrabold px-12 py-2 w-fit cursor-pointer rounded-2xl">
        Order
      </div>
    </div>
  );
};

export default Cart;
