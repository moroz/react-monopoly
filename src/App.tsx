import "./css/app.sass";
import Board from "./components/Board";
import { ReducerContext, useGameStateReducer } from "./store/context";
import StateDebugger from "./components/StateDebugger";
import { GameStage } from "./store/state";
import AddPlayers from "./components/AddPlayers";
import ControlPanel from "./components/ControlPanel";

function App() {
  const reducerTuple = useGameStateReducer();
  const [state] = reducerTuple;

  return (
    <ReducerContext.Provider value={reducerTuple}>
      <div className={String(state.stage)}>
        <Board />
        {state.stage === GameStage.Preparation ? <AddPlayers /> : null}
        <StateDebugger />
        {state.stage === GameStage.Gameplay ? <ControlPanel /> : null}
      </div>
    </ReducerContext.Provider>
  );
}

export default App;
