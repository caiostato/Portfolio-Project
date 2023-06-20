import Card from "@/components/Card";

import Anya from "@/assets/anya.jpg";

const Projects = () => {
  return (
    <>
      <main className="w-[45%] mx-auto mt-52">
        <div className="flex flex-row gap-10 justify-around">
          <Card
            src={Anya}
            title={`Project Title`}
            desc={`daduhauhdahuduha daduhauhd ahuduha daduhauhda huduha daduhauhdahuduha`}
          />
          <Card src={Anya} title={`Project Title`} />
          <Card src={Anya} title={`Project Title`} />
        </div>
      </main>
    </>
  );
};

export default Projects;
