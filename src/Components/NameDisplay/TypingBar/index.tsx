import React, { useState } from "react";

import TypeWriter from "typewriter-effect";

type TypingBarType = {
  text: string;
};

const TypingBar = ({ text }: TypingBarType) => {
  return (
    <TypeWriter
      onInit={(typewritter) => {
        typewritter.changeDelay(200).typeString(text).start();
      }}
    />
  );
};

export { TypingBar };
