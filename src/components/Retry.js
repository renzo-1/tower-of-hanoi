import React from "react";
import resetBtn from "../assets/retry-btn.svg";
const Retry = ({ setIsPlay, setMovesCount }) => {
  return (
    <img
      onClick={(e) => {
        setIsPlay(false);
        setMovesCount(0);
      }}
      className="reset-btn"
      src={resetBtn}
      alt="reset button"
    ></img>
  );
};

export default Retry;
