"use client";
import Image from "next/image";

import IphoneDeviceMockup from "@/components/DeviceMockup/Iphone";
import DesktopDeviceMockup from "@/components/DeviceMockup/Desktop";

interface CardProps {
  title: string;
  desc: string;
  imageDesktop: any;
  imageIphone: any;
  inversed?: boolean;
}

const Card = ({
  title,
  desc,
  imageDesktop,
  imageIphone,
  inversed = false,
}: CardProps) => {
  return (
    <div
      className={`flex ${
        inversed ? "flex-row-reverse" : "flex-row"
      } gap-20 justify-around w-full py-20`}
    >
      <div className="px-8 w-1/3 flex flex-col items-center text-zinc-900 text-lg">
        <div className=" font-semibold text-2xl pb-2">{title}</div>
        <div className="text-center">{desc}</div>
      </div>
      <div className="w-full relative scale-100 ">
        <div className=" flex flex-col">
          <div className="scale-110">
            <DesktopDeviceMockup>
              <Image
                src={imageDesktop}
                alt="project image"
                width={278}
                height={156}
              />
            </DesktopDeviceMockup>
          </div>
          <div className="absolute w-10 scale-50 left-[8%] top-[-10%]">
            <IphoneDeviceMockup>
              <Image
                src={imageIphone}
                alt="project image"
                width={272}
                height={572}
              />
            </IphoneDeviceMockup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
