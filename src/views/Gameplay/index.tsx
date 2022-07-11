import Board from "../../components/Board";
import ControlPanel from "../../components/ControlPanel";
import StateDebugger from "../../components/StateDebugger";
import GameModals from "../../components/GameModals";
import { useEffect } from "react";
import { useGameState } from "../../store/context";
import { GameStage } from "../../store/state";

import { useHistory } from "react-router";

const Gameplay = () => {
  const [{ stage }] = useGameState();
  const history = useHistory();

  useEffect(() => {
    if (stage !== GameStage.Gameplay) {
    }
  });

  return (
    <div className="gameplay">
      <Board />
      <StateDebugger />
      <ControlPanel />
      <GameModals />
    </div>
  );
};

export default Gameplay;
