import React from "react";
import Comp from "./comp";

const Cart = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 py-12 flex flex-col items-center space-y-24 via-rose-500 to-yellow-500">
        <p className="text-3xl font-semibold text-white text-center">Order Now</p>
      <div className="flex justify-center items-center space-x-24 ">
        <Comp
          img={"/bg2.jpg"}
          head={"pizza"}
          text={"lorehsvhgs sadhwvddwewe  dwjdgvwdjhvwejb jh sdjwhdv"}
        />
        <Comp
          img={"/bg3.jpg"}
          head={"pasta"}
          text={"lorehsvhgs sadhwvddwewe  dwjdgvwdjhvwejb jh sdjwhdv"}
        />
        <Comp
          img={"/bg4.jpg"}
          head={"burger"}
          text={"lorehsvhgs sadhwvddwewe  dwjdgvwdjhvwejb jh sdjwhdv"}
        />
      </div>
      <div className="bg-gray-300/30 px-4 py-2 w-fit rounded-2xl">
        Order now
      </div>
    </div>
  );
};

export default Cart;
