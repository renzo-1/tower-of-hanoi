import {
  MultiBackend,
  DndProvider,
  TouchTransition,
  MouseTransition,
} from "react-dnd-multi-backend";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import Game from "./components/Game";
import { useState } from "react";
import MovesCounter from "./components/MovesCounter";
import DiscNums from "./components/DiscNums";
import Retry from "./components/Retry";
const HTML5toTouch = {
  backends: [
    {
      id: "html5",
      backend: HTML5Backend,
      transition: MouseTransition,
    },
    {
      id: "touch",
      backend: TouchBackend,
      options: { enableMouseEvents: true },
      transition: TouchTransition,
    },
  ],
};
function App() {
  const [play, setPlay] = useState(false);
  const [movesCount, setMovesCount] = useState(0);
  const [discNum, setDiscNum] = useState(3);

  return (
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
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
