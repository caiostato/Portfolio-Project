import React from "react";

import { TypingBar } from "./TypingBar";

const NameDisplay = () => {
  return (
    <div className="text-hd font-fira flex items-center">
      <TypingBar text={"Caio Stato"} />
    </div>
  );
};

export { NameDisplay };
