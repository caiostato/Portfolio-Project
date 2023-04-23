import React from "react";

import { HeaderButton } from "../Button/HeaderButton";
import { TitleButton } from "../Button/TitleButton";

const Header = () => {
  return (
    <div className="h-32 mx-20 w-auto border-b border-b-accent-blueg grid grid-flow-col ">
      <div className="mt-8">
        <TitleButton text="CaioStato" />
      </div>
      <div className="flex flex-row justify-self-end mt-12">
        <HeaderButton hasBorder={true} text="hello" />
        <HeaderButton hasBorder={true} text="projects" />
        <HeaderButton hasBorder={true} text="about-me" />
        <HeaderButton text="contact-me" />
      </div>
    </div>
  );
};

export { Header };
