import React from "react";
import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="py-3 bg-white sticky top-0 left-0 z-50 h-fit shadow-md grid place-items-center grid-cols-12">
      <div className="flex justify-center items-center space-x-16 col-span-11 ">
        <div className="hover:underline text-xl font-serif tracking-wide underline-offset-4 decoration-2 decoration-rose-500 font-semibold text-gray-800 cursor-pointer">
          Home
        </div>
        <div className="hover:underline text-xl font-serif tracking-wide underline-offset-4 decoration-2 decoration-rose-500 font-semibold text-gray-800 cursor-pointer">
          Order
        </div>
        <div className="hover:underline text-xl font-serif tracking-wide underline-offset-4 decoration-2 decoration-rose-500 font-semibold text-gray-800 cursor-pointer">
          Food
        </div>
        <div className="hover:underline text-xl font-serif tracking-wide underline-offset-4 decoration-2 decoration-rose-500 font-semibold text-gray-800 cursor-pointer">
          Restaurant
        </div>
        <div className="hover:underline text-xl font-serif tracking-wide underline-offset-4 decoration-2 decoration-rose-500 font-semibold text-gray-800 cursor-pointer">
          Testimonials
        </div>
        <div className="hover:underline text-xl font-serif tracking-wide underline-offset-4 decoration-2 decoration-rose-500 font-semibold text-gray-800 cursor-pointer">
          Contact us
        </div>
      </div>
      <div className="flex space-x-3">
        <FaWhatsapp  size={25} />
        <AiOutlineShoppingCart size={25}/>
      </div>
    </div>
  );
};

export default Navbar;
