import clsx from "clsx";
import FieldData from "../../../data/field_data";
import { useGameState } from "../../../store/context";
import TitleDeed from "../../TitleDeed";
import styles from "./BuyProperty.module.sass";

const BuyPropertyDialog = () => {
  const [{ currentPlayer, players }] = useGameState();
  const player = players[currentPlayer];
  const currentProperty = FieldData[player.position];

  return (
    <app-modal>
      <TitleDeed field={currentProperty} />
      <div className={clsx("content", styles.root)}>
        <h2>For sale</h2>
        <div>Would you like to buy this property?</div>
        <button className="button">Buy for ${currentProperty.price}</button>
      </div>
    </app-modal>
  );
};

export default BuyPropertyDialog;
