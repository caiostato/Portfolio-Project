import React from "react";
import Image from "next/image";

import DownloadSVG from "../../../assets/download.svg";

type DefaultButtonType = {
  text: string;
  onClick: () => void;
};

const DefaultButton = ({ text, onClick }: DefaultButtonType) => {
  return (
    <div
      className="flex items-center gap-6 border border-secondary-green hover:border-secondary-green2 transition-all duration-400 px-8 py-4 rounded-full cursor-pointer"
      onClick={onClick}
    >
      <Image src={DownloadSVG} alt={"download icon"} />
      <div className="text-secondary-white underline">{text}</div>
    </div>
  );
};

export { DefaultButton };
