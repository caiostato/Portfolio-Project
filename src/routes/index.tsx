import React from "react";
import { Route, Routes as Router } from "react-router-dom";

import { LandingPage } from "../pages/LandingPage";

const Routes = () => {
  return (
    <Router>
      <Route element={<LandingPage />} path="/" />
    </Router>
  );
};

export default Routes;
