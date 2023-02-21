import React from "react";
import { useDrag } from "react-dnd";
const Disc = ({ disc, i, discNum }) => {
  const widthRate = 20;
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "disc",
    item: disc,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={i === discNum - 1 ? dragRef : null}
      className="disc"
      style={{
        cursor: i === discNum - 1 ? "grab" : "default",
        backgroundColor: "#fff",
        width: `${150 - widthRate * disc.disc}px`,
        height: "25px",
        zIndex: "5",
        border: isDragging ? "2px solid red" : "2px solid blue",
      }}
      id={disc.disc}
      name={disc.disc}
    ></div>
  );
};

export default Disc;
