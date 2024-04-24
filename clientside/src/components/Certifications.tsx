import React from "react";
import testout from "../assets/testoutsecpro.png";

const Certifications: React.FC = () => {
  return (
    <>
      <h1 className="sub-heading container-lg">Certifications</h1>
      <div className="container-lg flex border">
        <img src={testout} alt="Testout cert from school" width="150" />
      </div>
    </>
  );
};

export default Certifications;
