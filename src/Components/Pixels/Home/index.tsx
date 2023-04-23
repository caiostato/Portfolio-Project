import React from "react";

import LandPixel from "../../../assets/pixels/land.svg";
import TubePixel from "../../../assets/pixels/tubo.svg";

const PixelsHome = () => {
  return (
    <div className="absolute">
      <img src={TubePixel} alt="tube pixel image" />

      <img src={LandPixel} alt="land pixel image" />
    </div>
  );
};

export { PixelsHome };
