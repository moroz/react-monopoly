import "./css/app.sass";
import Board from "./components/Board";
import { ReducerContext, useGameStateReducer } from "./store/context";
import StateDebugger from "./components/StateDebugger";

function App() {
  const reducerTuple = useGameStateReducer();

  return (
    <ReducerContext.Provider value={reducerTuple}>
      <Board />
      <StateDebugger />
    </ReducerContext.Provider>
  );
}

export default App;
