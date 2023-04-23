import React from "react";

type HeaderButtonType = {
  text: string;
  hasBorder?: boolean;
};

const HeaderButton = ({ text, hasBorder = false }: HeaderButtonType) => {
  return (
    <div
      className={`w-52 h-20 flex justify-center cursor-pointer group transition-all duration-500 ${
        hasBorder ? "border-r border-accent-blueg" : ""
      }`}
    >
      <div className=" font-medium text-bt text-secondary-gray-50 my-auto group-hover:hover:text-secondary-white transition-all duration-200">
        _{text}
      </div>
    </div>
  );
};

export { HeaderButton };
