import { FC } from "react";
import { CardType } from "../../types";
import { StyledCard } from ".";

const Card: FC<CardType> = ({name, img, desc, content}) => {
  return (
    <StyledCard>
      <div className="card">
        <h3>{name}</h3>
        <div className="card-body">
          <img src={img} alt="classIMG" />
          <h5>{desc}</h5>
          <p>{content}</p>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
