import React from "react";

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(bg1.jpg)`,
      }}
      className="group relative   bg-cover w-full h-[640px]   bg-center bg-no-repeat "
    >
      <div className="bg-rose-500/40 absolute top-[50%] left-24 -translate-y-[50%] w-[550px] pl-12 pr-36 py-12">
        <p className="text-white font-semibold text-4xl pb-3">LOREM IPSUM</p>
        <p className="text-white">
          orem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
