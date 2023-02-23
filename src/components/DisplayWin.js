import React from "react";
import Retry from "./Retry";
const DisplayWin = ({ finalMovesCount, setWin }) => {
  return (
    <div className="win-container">
      <h1>Nice Job!</h1>
      <h3 className="stats">
        You did a total of <span>{finalMovesCount}</span> moves
      </h3>

      <div
        onClick={(e) => {
          setWin(false);
        }}
      >
        <Retry />
      </div>
    </div>
  );
};

export default DisplayWin;
