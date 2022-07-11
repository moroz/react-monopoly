import "./css/app.sass";
import { ReducerContext, useGameStateReducer } from "./store/context";
import NewGame from "./views/NewGame";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gameplay from "./views/Gameplay";
import Inventory from "./views/Inventory";

function App() {
  const reducerTuple = useGameStateReducer();
  const [state] = reducerTuple;

  return (
    <ReducerContext.Provider value={reducerTuple}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Gameplay />} />
          <Route path="/new" element={<NewGame />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </BrowserRouter>
    </ReducerContext.Provider>
  );
}

export default App;
