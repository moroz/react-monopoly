import "./css/app.sass";
import Board from "./components/Board";
import { ReducerContext, useGameStateReducer } from "./store/context";
import StateDebugger from "./components/StateDebugger";
import { GameStage } from "./store/state";
import AddPlayers from "./components/AddPlayers";
import ControlPanel from "./components/ControlPanel";
import PlayerMarkers from "./components/PlayerMarkers";

function App() {
  const reducerTuple = useGameStateReducer();
  const [state] = reducerTuple;

  return (
    <ReducerContext.Provider value={reducerTuple}>
      <div className={String(state.stage)}>
        <StateDebugger />
        {!state || state.stage === GameStage.Preparation ? (
          <>
            <AddPlayers />
          </>
        ) : (
          <>
            <Board />
            <ControlPanel />
          </>
        )}
      </div>
    </ReducerContext.Provider>
  );
}

export default App;
