import TitleDeed from "../../components/TitleDeed";
import FieldData from "../../data/field_data";
import { Property } from "../../interfaces/fields";
import { useGameState } from "../../store/context";

const Inventory = () => {
  const [{ currentPlayer, propertyOwnership }] = useGameState();
  const ownedProperties = Object.entries(FieldData).filter(([key]) => {
    return propertyOwnership[Number(key)] === currentPlayer;
  });

  return (
    <div>
      {ownedProperties.map(([index, field]) => (
        <TitleDeed field={field as Property} key={index} />
      ))}
    </div>
  );
};

export default Inventory;
