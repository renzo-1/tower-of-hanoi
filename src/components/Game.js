import React, { useEffect, useState } from "react";
import Disc from "./Disc";
import { useDrop } from "react-dnd";
import DisplayWin from "./DisplayWin";

const Game = ({ isPlay, setIsPlay, setMovesCount, movesCount, discNum }) => {
  const [tower1, setTower1] = useState([]);
  const [tower2, setTower2] = useState([]);
  const [tower3, setTower3] = useState([]);
  const [isWin, setIsWin] = useState(false);

  useEffect(() => {
    const discs = [];
    for (let i = 0; i < discNum; i++) {
      discs.push({ disc: i, currTower: 1 });
    }
    // resets disc
    if (!isPlay && !isWin) {
      setTower1(discs);
      setTower2([]);
      setTower3([]);
    }
  }, [discNum, isPlay, isWin]);

  useEffect(() => {
    // if a disc is placed to tower 2 or tower 3, the game will start.
    if (tower2.length > 0 || tower3.length > 0) {
      setIsPlay(true);
    }
    // if win, stop isPlay and display isWin
    if (tower3.filter((e, i) => e.disc === i).length === discNum) {
      setIsPlay(false);
      setIsWin(true);
    }
  }, [tower2, tower3]);

  // creates a droping references
  const [{ isOver1 }, dropRef1] = useDrop(() => ({
    accept: "disc",
    // if dropped on this drop references, run the function
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

  const popPrevDisc = (prevDiscs) => {
    const newPrevDiscs = [...prevDiscs];
    newPrevDiscs.pop();
    return newPrevDiscs;
  };

  const removeDisc = (disc) => {
    setMovesCount((prev) => prev + 1);
    if (disc.currTower === 1) {
      setTower1((prevDiscs) => popPrevDisc(prevDiscs));
    } else if (disc.currTower === 2) {
      setTower2((prevDiscs) => popPrevDisc(prevDiscs));
    } else if (disc.currTower === 3) {
      setTower3((prevDiscs) => popPrevDisc(prevDiscs));
    }
  };

  const addDiscToTower1 = (disc) => {
    // do no thing if the disc have not changed tower.
    if (disc.currTower === 1) return;
    setTower1((prevDiscs) => {
      // if the disc currently on top of the tower is shorter that the one being placed, don't accept the move
      if (prevDiscs[prevDiscs.length - 1]?.disc > disc.disc) {
        return prevDiscs;
      } else {
        // removes disc from its previous tower
        removeDisc(disc);
        // inserts the new disc to this tower
        return [...prevDiscs, { ...disc, currTower: 1 }];
      }
    });
  };

  const addDiscToTower2 = (disc) => {
    if (disc.currTower === 2) return;
    setTower2((prevDiscs) => {
      if (prevDiscs[prevDiscs.length - 1]?.disc > disc.disc) {
        return prevDiscs;
      } else {
        removeDisc(disc);
        return [...prevDiscs, { ...disc, currTower: 2 }];
      }
    });
  };

  const addDiscToTower3 = (disc) => {
    if (disc.currTower === 3) return;
    setTower3((prevDiscs) => {
      if (prevDiscs[prevDiscs.length - 1]?.disc > disc.disc) {
        return prevDiscs;
      } else {
        removeDisc(disc);
        return [...prevDiscs, { ...disc, currTower: 3 }];
      }
    });
  };

  return (
    <>
      {isWin && (
        <DisplayWin
          setIsWin={setIsWin}
          setMovesCount={setMovesCount}
          setIsPlay={setIsPlay}
          movesCount={movesCount}
        />
      )}
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
    </>
  );
};

export default Game;
