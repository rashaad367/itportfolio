import React from "react";

type StepProps = {
  number: string;
  imageUrl: string;
};

const StepImage: React.FC<StepProps> = ({ number, imageUrl }) => {
  return (
    <>
      <div className="m-9">
        <h3 className="text-white">Step {number}</h3>
        <img src={imageUrl} alt="my project step" width="400" />
      </div>
    </>
  );
};

export default StepImage;
