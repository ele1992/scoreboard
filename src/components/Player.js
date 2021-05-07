import React from "react";
import "./Player.scss";

export default function Player({ name, score, id, incrementscore }) {
  const onClickIncrement = () => {
    incrementscore(id);
  };
  return (
    <li className="Player">
      <div className="percentage_coloring" style={{ width: score + "%" }} />
      <p>
        {name}(Score:{score})<button onClick={onClickIncrement}>+1</button>
      </p>
    </li>
  );
}
