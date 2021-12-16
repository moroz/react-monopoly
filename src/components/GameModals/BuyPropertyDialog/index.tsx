import clsx from "clsx";
import FieldData from "../../../data/field_data";
import { Property } from "../../../interfaces/fields";
import { ActionType } from "../../../store/actions";
import { useGameState } from "../../../store/context";
import TitleDeed from "../../TitleDeed";
import styles from "./BuyProperty.module.sass";

const BuyPropertyDialog = () => {
  const [{ currentPlayer, players }, dispatch] = useGameState();
  const player = players[currentPlayer];
  const currentProperty = FieldData[player.position] as Property;
  const balance = player.balance;
  const canBuy = balance >= currentProperty.price;

  const onBuy = () => {
    dispatch({
      type: ActionType.BuyProperty,
      player: currentPlayer,
      propertyId: player.position
    });
  };

  const onDismiss = () => {
    dispatch({ type: ActionType.Dismiss });
  };

  return (
    <app-modal>
      <TitleDeed field={currentProperty} />
      <div className={clsx("content", styles.root)}>
        <h2>For sale</h2>
        {canBuy ? (
          <>
            <p>Would you like to buy this property?</p>
            <button className="button" onClick={onBuy}>
              Buy for ${currentProperty.price}
            </button>
            <button className="button" onClick={onDismiss}>
              Nope
            </button>
          </>
        ) : (
          <>
            <p>You do not have enough money to buy this property.</p>
            <button className="button" onClick={onDismiss}>
              Dismiss
            </button>
          </>
        )}
      </div>
    </app-modal>
  );
};

export default BuyPropertyDialog;
