import FieldData from "../../../data/field_data";
import { Property } from "../../../interfaces/fields";
import { ActionType } from "../../../store/actions";
import { useGameState } from "../../../store/context";
import calculateAmountDue from "./calculateAmountDue";

const PayRentDialog = () => {
  const [{ currentPlayer, players, propertyOwnership, currentTurn }, dispatch] =
    useGameState();
  const player = players[currentPlayer];
  const diceResult = currentTurn.diceResult;
  const ownerIndex = propertyOwnership[player.position];
  const owner = players[ownerIndex];

  const amountDue = calculateAmountDue(
    player.position,
    propertyOwnership,
    diceResult!
  );

  const onConfirm = () => {
    dispatch({
      type: ActionType.TransferMoney,
      from: currentPlayer,
      to: ownerIndex,
      amount: amountDue
    });
  };

  return (
    <app-modal>
      <div className="content">
        <p>
          You have to pay rent <strong>${amountDue}</strong> to {owner.name}.
        </p>
        <button className="button" onClick={onConfirm}>
          Pay ${amountDue}
        </button>
      </div>
    </app-modal>
  );
};

export default PayRentDialog;
