import Balancer from "react-wrap-balancer";

import Header from "@/components/Header";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-blue">
      <Header />
      <div className="w-[28rem] font-poppins mt-64 ml-52 flex flex-col gap-6">
        <div className="flex flex-row gap-6 font-bold text-8xl">
          <div className="">About</div>
          <span className=" text-green">me</span>
        </div>
        <Balancer ratio={0.5} className="font-normal text-white text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis
        </Balancer>
      </div>
    </div>
  );
};

export default Home;
