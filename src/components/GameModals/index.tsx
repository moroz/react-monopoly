import { useGameState } from "../../store/context";
import { TurnStage } from "../../store/state";
import BuyPropertyDialog from "./BuyPropertyDialog";

const GameModals = () => {
  const [{ currentTurn }] = useGameState();

  switch (currentTurn.turnStage) {
    case TurnStage.BuyPropertyDialog: {
      return <BuyPropertyDialog />;
    }

    default:
      return null;
  }
};

export default GameModals;
