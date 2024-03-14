import React, { useState } from "react";

type CardProps = {
  imageUrl: string;
  description: string;
};

const ImageCards: React.FC<CardProps> = ({ imageUrl, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageUrl} alt="Image" />
      {isHovered && (
        <div>{description}</div>
      )}
    </div>
  );
};

export default ImageCards;
