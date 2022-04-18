import React from "react";
import Educexp from "./Educexp";
import Practexp from "./Practexp";
import Userbiodata from "./Userbiodata";
import "./styles/cv.css";
const Cv = () => {
  return (
    <div className="Cvdetails">
      <Userbiodata />

      <div className="experience">
        <Educexp />
        <hr />
        <Practexp />
      </div>
    </div>
  );
};

export default Cv;
