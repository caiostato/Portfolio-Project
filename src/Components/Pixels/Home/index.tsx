import React from "react";
import Image from "next/image";

import LandPixel from "../../../assets/pixels/land.svg";
import TubePixel from "../../../assets/pixels/tubo.svg";

const PixelsHome = () => {
  return (
    <div className="absolute">
      <Image src={TubePixel} alt="tube pixel image" />

      <Image src={LandPixel} alt="land pixel image" />
    </div>
  );
};

export { PixelsHome };
