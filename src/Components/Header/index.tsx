import React from "react";

const Header = () => {
  return (
    <div className="w-full h-24 border-b border-gray border-opacity-50 flex flex-row px-12 py-8 gap-10 justify-between">
      <a className="font-oswald font-bold text-2xl">CaioDev</a>
      <div className="flex flex-row gap-10 font-poppins font-normal text-lg">
        <a href="/">Home</a>
        <a href="/about">About me</a>
        <a href="/about">Projects</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default Header;
