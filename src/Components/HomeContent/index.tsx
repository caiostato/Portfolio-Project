import React from "react";

import { NameDisplay } from "../NameDisplay";
import { DefaultButton } from "../Button/DefaultButton";
import { PixelsHome } from "../Pixels/Home";

import LandImage from "../../assets/pixels/land.svg";
import CenterLandImage from "../../assets/pixels/centerLand.png";
import SmallLandImage from "../../assets/pixels/smallLand.png";
import TubeImage from "../../assets/pixels/tubo.svg";
import CloudImage from "../../assets/pixels/cloud.png";
import ComputerImage from "../../assets/pixels/ComputerLand/computer.svg";
import LandComputerImage from "../../assets/pixels/ComputerLand/land.svg";
import QuestionMarkRImage from "../../assets/pixels/ComputerLand/questionMarkRight.svg";
import QuestionMarkCImage from "../../assets/pixels/ComputerLand/questionMarkCenter.svg";
import QuestionMarkLImage from "../../assets/pixels/ComputerLand/questionMarkLeft.svg";

const HomeContent = () => {
  const handleClick = () => {
    //make download
  };

  return (
    <div className="h-full w-full flex justify-end flex-col">
      <div className="h-full w-full px-20 pt-32 font-fira">
        <div className="text-secondary-white text-tt font-default">
          Hi all. I am
        </div>
        <div className="">
          <NameDisplay />
        </div>
        <div className="text-accent-purple text-[48px] ">
          {">"} Front End developer
        </div>
        <div className="flex flex-1 flex-col pt-10 text-secondary-gray-100 font-semibold text-tt">
          <div>// welcome to my portfolio, press Z</div>
          <div>// you can also see my projects on</div>
        </div>
        <div className="text-bt py-4">
          <span className="text-accent-purplevivid">const </span>
          <span className="text-secondary-green">githubLink</span> ={" "}
          <a href="https://github.com/caiostato" className="text-accent-skin">
            “https://github.com/caiostato”{" "}
          </a>
        </div>
        <div className="w-fit h-fit pt-4">
          <DefaultButton text={"curriculum"} onClick={handleClick} />
        </div>
      </div>
      <div className="absolute top-[35%] left-[45%]">
        <img
          width={200}
          height={200}
          src={CenterLandImage}
          alt="tube pixel image"
        />
      </div>
      <div className="absolute top-[42%] left-[90%]">
        <img
          width={200}
          height={200}
          src={SmallLandImage}
          alt="tube pixel image"
        />
      </div>
      <div className="absolute top-[82%] left-[86%]">
        <img
          className=""
          src={LandComputerImage}
          alt="tube pixel image"
          width={150}
          height={150}
        />
      </div>
      <div className="absolute top-[77%] left-[6%]">
        <img src={TubeImage} alt="tube pixel image" />
      </div>
      <div className="absolute top-[73.6%] ">
        <img width={350} height={350} src={LandImage} alt="tube pixel image" />
      </div>
      <div className="absolute top-[20%] left-[70%]">
        <img src={CloudImage} alt="tube pixel image" width={500} height={500} />
      </div>
      <div className="absolute top-[65%] left-[45%]">
        <img src={CloudImage} alt="tube pixel image" width={500} height={500} />
      </div>
      <div className="absolute top-[50%] left-[55%]">
        <img
          className="animate-moveIsland"
          src={LandComputerImage}
          alt="tube pixel image"
          width={450}
          height={450}
        />
      </div>
      <div className="absolute top-[45%] left-[55%]">
        <img
          src={ComputerImage}
          alt="tube pixel image"
          width={400}
          height={400}
        />
      </div>
      <div className="absolute top-[45%] left-[72%]">
        <img
          className="animate-scale"
          src={QuestionMarkLImage}
          alt="tube pixel image"
          width={75}
          height={75}
        />
      </div>
      <div className="absolute top-[40%] left-[63%]">
        <img
          className="animate-scale1"
          src={QuestionMarkCImage}
          alt="tube pixel image"
          width={100}
          height={100}
        />
      </div>
      <div className="absolute top-[50%] left-[58%] ">
        <img
          className="animate-scale2"
          src={QuestionMarkRImage}
          alt="tube pixel image"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
};

export { HomeContent };
