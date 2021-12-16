import { useGameState } from "../../store/context";
import { TurnStage } from "../../store/state";
import BuyPropertyDialog from "./BuyPropertyDialog";
import PayRentDialog from "./PayRentDialog";

const GameModals = () => {
  const [{ currentTurn }] = useGameState();

  switch (currentTurn.turnStage) {
    case TurnStage.BuyPropertyDialog: {
      return <BuyPropertyDialog />;
    }

    case TurnStage.PayRentDialog: {
      return <PayRentDialog />;
    }

    default:
      return null;
  }
};

export default GameModals;
