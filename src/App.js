import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Game from "./components/Game";
import { useState, useEffect } from "react";
import MovesCounter from "./components/MovesCounter";
import DiscNums from "./components/DiscNums";
import Retry from "./components/Retry";

function App() {
  const [play, setPlay] = useState(false);
  const [movesCount, setMovesCount] = useState(0);
  const [discNum, setDiscNum] = useState(3);

  return (
    <DndProvider backend={HTML5Backend}>
      <header>
        <MovesCounter movesCount={movesCount} />
        <Retry setPlay={setPlay} setMovesCount={setMovesCount} />
      </header>

      <h1 className="title">Tower of Hanoi</h1>
      <div className="intro-bg"></div>

      <Game
        play={play}
        movesCount={movesCount}
        discNum={discNum}
        setPlay={setPlay}
        setMovesCount={setMovesCount}
      />
      <DiscNums setDiscNum={setDiscNum} />
    </DndProvider>
  );
}

export default App;
