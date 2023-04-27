import React from "react";
import classes from "./card.module.css";

const Card = ({ name, imagesrc }) => {
  return (
    <div className={classes.Card}>
      <div className={classes.CardContainer}>
        <img className={classes.CardImage} src={imagesrc} alt={name} />
        <h1 className={classes.CardName} dangerouslySetInnerHTML={{__html: name}}></h1>
      </div>
    </div>
  );
};

export default Card;