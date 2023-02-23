import React from "react";
import { useDrag } from "react-dnd";
import { useMediaQuery } from "./MediaQueryHook";

const Disc = ({ disc, i, discNum }) => {
  const isMatchMedia = useMediaQuery("(min-width: 700px)");

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
        cursor: i === discNum - 1 ? "pointer" : "default",
        width: isMatchMedia
          ? `${200 - 20 * disc.disc}px`
          : `${130 - 15 * disc.disc}px`,
        border: isDragging ? "2px solid red" : "",
      }}
      id={disc.disc}
      name={disc.disc}
    ></div>
  );
};

export default Disc;
