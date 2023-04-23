import React from "react";

import { Header } from "../../Components/Header";
import { HomeContent } from "../../Components/HomeContent";

const LandingPage = () => {
  return (
    <div className="w-screen h-screen text-secondary-white">
      <header>
        <Header />
      </header>
      <main>
        <HomeContent />
      </main>
    </div>
  );
};

export { LandingPage };
