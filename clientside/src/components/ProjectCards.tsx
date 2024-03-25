import React from "react";
import style from "../components/ProjectCards.module.css";

type CardProps = {
  name: string;
  imageUrl: string;
  description: string;
  button1Text: string;
};

const Card: React.FC<CardProps> = ({
  name,
  imageUrl,
  description,
  button1Text,
}) => {
  return (
    <div className="container-lg">
      <div className={style.cardBackground}>
      <div className={style.pcard}>
        <h1 className="font-mono center leading-loose text-white font-bold">{name}</h1>
        <img src={imageUrl} alt="Card" className="mb-4" />
        <p className="mb-4 leading-relaxed">{description}</p>
        <div className="flex">
          <button
            className="mr-4 w-1/2 font-bold font-mono transition transform hover:-translate-y-1"
          >
            {button1Text}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
