import { Player } from "../interfaces/players";
import FieldData from "../data/field_data";

export enum GameStage {
  Preparation = "preparation",
  Gameplay = "gameplay"
}

export class GameState {
  currentPlayer: number = 0;
  players: Player[];
  turn: number = 1;
  stage: GameStage = GameStage.Preparation;
  propertyOwnership: Record<number, number>;

  constructor(players: Player[] = []) {
    this.players = players;

    this.propertyOwnership = Object.keys(FieldData).reduce((acc, key) => {
      const property = FieldData[Number(key)];
      if (property.price) {
        return {
          ...acc,
          [key]: null
        };
      }
      return acc;
    }, {});
  }

  static fromJSON(json: any) {
    const state = new GameState([]);
    Object.assign(state, json);
    return state;
  }
}
