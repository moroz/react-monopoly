import clsx from "clsx";
import FieldData from "../../../data/field_data";
import { ActionType } from "../../../store/actions";
import { useGameState } from "../../../store/context";
import TitleDeed from "../../TitleDeed";
import styles from "./BuyProperty.module.sass";

const BuyPropertyDialog = () => {
  const [{ currentPlayer, players }, dispatch] = useGameState();
  const player = players[currentPlayer];
  const currentProperty = FieldData[player.position];

  const onBuy = () => {
    dispatch({
      type: ActionType.BuyProperty,
      player: currentPlayer,
      propertyId: player.position
    });
  };

  return (
    <app-modal>
      <TitleDeed field={currentProperty} />
      <div className={clsx("content", styles.root)}>
        <h2>For sale</h2>
        <div>Would you like to buy this property?</div>
        <button className="button" onClick={onBuy}>
          Buy for ${currentProperty.price}
        </button>
        <button className="button">Nope</button>
      </div>
    </app-modal>
  );
};

export default BuyPropertyDialog;
