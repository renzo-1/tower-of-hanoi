import React, { useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
// const createSliderWithTooltip = Slider.createSliderWithTooltip;
// const Range = createSliderWithTooltip(Slider.Range);

const DiscNums = ({ setDiscNum }) => {
  const marks = {
    16: 3,
    32: 4,
    48: 5,
    64: 6,
    80: 7,
    100: 8,
  };

  const handleRangeChange = (e) => {
    setDiscNum(marks[e]);
  };

  return (
    <>
      <div className="slider">
        <h2>Discs Number</h2>
        <Slider
          onChange={handleRangeChange}
          min={16}
          marks={marks}
          step={null}
          defaultValue={16}
        />
      </div>
    </>
  );
};

export default DiscNums;
