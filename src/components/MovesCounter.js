import React from "react";

const MovesCounter = ({ movesCount }) => {
  return (
    <div className="moves">
      <h2>
        Moves: <span>{movesCount}</span>
      </h2>
    </div>
  );
};

export default MovesCounter;
