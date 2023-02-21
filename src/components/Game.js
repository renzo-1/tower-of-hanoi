import React, { useEffect, useState } from "react";
import tower from "../assets/tower.svg";
import Disc from "./Disc";
import { useDrop } from "react-dnd";
const Game = ({ reset, setReset }) => {
  const [tower1, setTower1] = useState([
    { disc: 0, currTower: 1 },
    { disc: 1, currTower: 1 },
    { disc: 2, currTower: 1 },
    { disc: 3, currTower: 1 },
    { disc: 4, currTower: 1 },
    { disc: 5, currTower: 1 },
  ]);
  const [tower2, setTower2] = useState([]);
  const [tower3, setTower3] = useState([]);

  useEffect(() => {
    if (reset) {
      setTower1([
        { disc: 0, currTower: 1 },
        { disc: 1, currTower: 1 },
        { disc: 2, currTower: 1 },
        { disc: 3, currTower: 1 },
        { disc: 4, currTower: 1 },
        { disc: 5, currTower: 1 },
      ]);
      setTower2([]);
      setTower3([]);
    }
  }, [reset]);

  useEffect(() => {
    if (tower2.length > 0 || tower3.length > 0) setReset(false);
  }, [tower1, tower2]);
  const [{ isOver1 }, dropRef1] = useDrop(() => ({
    accept: "disc",
    drop: (disc) => addDiscToTower1(disc),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const [{ isOver2 }, dropRef2] = useDrop(() => ({
    accept: "disc",
    drop: (disc) => addDiscToTower2(disc),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver3 }, dropRef3] = useDrop(() => ({
    accept: "disc",
    drop: (disc) => addDiscToTower3(disc),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const removeDisc = (disc) => {
    if (disc.currTower === 1) {
      setTower1((prevDiscs) => {
        console.log("tw1", prevDiscs);
        console.log("d", disc);
        const newPrevDiscs = [...prevDiscs];
        newPrevDiscs.pop();
        return newPrevDiscs;
      });
    } else if (disc.currTower === 2) {
      setTower2((prevDiscs) => {
        console.log("tw2", prevDiscs);
        console.log("d", disc);
        const newPrevDiscs = [...prevDiscs];
        newPrevDiscs.pop();
        return newPrevDiscs;
      });
    } else {
      setTower3((prevDiscs) => {
        console.log("tw3", prevDiscs);
        console.log("d", disc);
        const newPrevDiscs = [...prevDiscs];
        newPrevDiscs.pop();
        return newPrevDiscs;
      });
    }
  };

  const addDiscToTower1 = (disc) => {
    // do no thing if the disc have not changed tower.
    if (disc.currTower === 1) return;
    // removes disc from previous tower
    removeDisc(disc);
    setTower1((prevDiscs) => [...prevDiscs, { ...disc, currTower: 1 }]);
  };

  const addDiscToTower2 = (disc) => {
    if (disc.currTower === 2) return;
    removeDisc(disc);
    setTower2((prevDiscs) => [...prevDiscs, { ...disc, currTower: 2 }]);
  };

  const addDiscToTower3 = (disc) => {
    if (disc.currTower === 3) return;
    removeDisc(disc);
    setTower3((prevDiscs) => [...prevDiscs, { ...disc, currTower: 3 }]);
  };

  return (
    <div className="game">
      <div className="tower-container">
        <div ref={dropRef1} id="tower1" className="discs">
          {tower1.map((disc, i) => {
            return <Disc key={i} disc={disc} i={i} discNum={tower1.length} />;
          })}
        </div>
      </div>
      <div className="tower-container">
        <div ref={dropRef2} id="tower2" className="discs">
          {tower2.map((disc, i) => {
            return <Disc key={i} disc={disc} i={i} discNum={tower2.length} />;
          })}
        </div>
      </div>
      <div className="tower-container">
        <div ref={dropRef3} id="tower3" className="discs">
          {tower3.map((disc, i) => {
            return <Disc key={i} disc={disc} i={i} discNum={tower3.length} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Game;
