import FieldData from "../../../data/field_data";
import { useGameState } from "../../../store/context";
import TitleDeed from "../../TitleDeed";

const BuyPropertyDialog = () => {
  const [{ currentPlayer, players }] = useGameState();
  const player = players[currentPlayer];
  const currentProperty = FieldData[player.position];

  return (
    <app-modal>
      <TitleDeed field={currentProperty} />
      <div className="content">
        <div>Would you like to buy this property?</div>
      </div>
    </app-modal>
  );
};

export default BuyPropertyDialog;
