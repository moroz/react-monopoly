import FieldData from "../data/field_data";
import { FieldType } from "../interfaces/fields";
import { GameState, TurnStage } from "./state";

export function getTurnStageByState(state: GameState) {
  const currentPosition = state.players[state.currentPlayer].position;
  console.log({ currentPosition });
  const currentField = FieldData[currentPosition];
  const owner = state.propertyOwnership[currentPosition];

  switch (currentField.type) {
    case FieldType.Property:
    case FieldType.Railway:
    case FieldType.Utility: {
      if (owner === null) {
        return TurnStage.BuyPropertyDialog;
      } else if (owner !== state.currentPlayer) {
        return TurnStage.PayRentDialog;
      }
    }

    default:
      return TurnStage.NoActionsLeft;
  }
}
