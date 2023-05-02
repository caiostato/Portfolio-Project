import Header from "@/components/Header";
import Card from "@/components/Card";

import { useFetch } from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import { RepositoryType } from "@/@types/Repositories";

const Home = () => {
  const { data: repositories } = useFetch<RepositoryType[]>();

  console.log(repositories);

  return (
    <div className="w-screen h-screen bg-blue">
      <Header />
      <div className="mt-56 ml-52">
        <div className="w-fit font-poppins flex flex-row font-bold text-8xl gap-6">
          <div className="">My recent</div>
          <span className=" text-green">projects</span>
        </div>

        <div className="py-10 flex flex-row gap-12">
          {repositories?.map((repo) => {
            return <Card name={repo.full_name} desc={repo.description} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
