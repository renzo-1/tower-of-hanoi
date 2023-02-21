import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Game from "./components/Game";
import Timer from "./components/Timer";
import resetBtn from "./assets/retry-btn.svg";
import { useState } from "react";
function App() {
  const [reset, setReset] = useState(true);

  return (
    <DndProvider backend={HTML5Backend}>
      <header>
        <Timer reset={reset} setReset={setReset} />
        <img
          onClick={(e) => setReset(true)}
          class="reset-btn"
          src={resetBtn}
          alt="reset button"
        ></img>
      </header>
      <Game reset={reset} setReset={setReset} />
    </DndProvider>
  );
}

export default App;
