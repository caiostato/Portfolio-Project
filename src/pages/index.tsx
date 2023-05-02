import { Download } from "lucide-react";
import Image from "next/image";

import Header from "@/components/Header";
import ButtonDefault from "@/components/Button/Default";

import Arrow from "../assets/arrowToRight.svg";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-blue">
      <Header />
      <div className="w-[40rem] font-poppins font-bold text-8xl mt-64 ml-52 relative">
        <Image
          src={Arrow}
          className="absolute left-[-6rem] top-[4rem]"
          alt="arrow pointing right"
        />
        <div className="">FRONT END</div>
        <span className=" text-green">DEVELOPER</span>
        <div className="pt-10 flex flex-row gap-10">
          <ButtonDefault bg={"green"}>Hire me</ButtonDefault>
          <ButtonDefault bg={"gray"}>
            <div className="flex gap-3">
              Download CV
              <Download color={"#fff"} size={25} />
            </div>
          </ButtonDefault>
        </div>
      </div>
    </div>
  );
};

export default Home;
