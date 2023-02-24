import React from "react";
import Retry from "./Retry";
const DisplayWin = ({ setIsWin, movesCount, setMovesCount }) => {
  return (
    <div className="win-container">
      <h1>Nice Job!</h1>
      <h3 className="stats">
        You did a total of <span>{movesCount}</span> moves
      </h3>

      <div
        onClick={(e) => {
          setIsWin(false);
          setMovesCount(0);
        }}
      >
        <Retry />
      </div>
    </div>
  );
};

export default DisplayWin;
