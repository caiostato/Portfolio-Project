"use client";
import Card from "@/components/Card";

import Anya from "@/assets/anya.jpg";
import Gaara from "@/assets/gaara.jpg";

const Projects = () => {
  return (
    <>
      <div className="w-[60%] mx-auto mt-40 ">
        <div className="w-full flex items-center flex-col">
          <div className="text-purple-650 text-4xl py-4 font-semibold font-poppins tracking-tighter">
            Meus Projetos
          </div>
          <div className="flex flex-col gap-20">
            <Card
              title={"Project Title "}
              desc={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ea
            iste id voluptates maiores cupiditate dolor! Dolorum cum sapiente
            tempore amet consectetur consequuntur aperiam! At perspiciatis ab ea
            architecto voluptatum.`}
              imageDesktop={Anya}
              imageIphone={Gaara}
            />
            <Card
              inversed
              title={"Project Title "}
              desc={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ea
            iste id voluptates maiores cupiditate dolor! Dolorum cum sapiente
            tempore amet consectetur consequuntur aperiam! At perspiciatis ab ea
            architecto voluptatum.`}
              imageDesktop={Anya}
              imageIphone={Gaara}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
