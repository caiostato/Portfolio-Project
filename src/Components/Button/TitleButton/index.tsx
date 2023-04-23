import React from "react";

type TitleButtonType = {
  text: string;
};

const TitleButton = ({ text }: TitleButtonType) => {
  const string1 = "<";
  const string2 = "/>";
  return (
    <div className={`w-52 h-32 flex justify-center cursor-pointer`}>
      <a
        href=""
        className=" font-default text-tt text-secondary-gray-100 my-auto font-fira"
      >
        {string1} {text} {string2}
      </a>
    </div>
  );
};

export { TitleButton };
